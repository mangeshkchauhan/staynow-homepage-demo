import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the worker for react-pdf using local file
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export const Route = createFileRoute("/pdf")({
	component: PDFViewer,
	validateSearch: (search: Record<string, unknown>) => {
		return {
			url: (search.url as string) || undefined,
		};
	},
});

function PDFViewer() {
	const { url } = Route.useSearch();
	const [numPages, setNumPages] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [pageWidth, setPageWidth] = useState<number>(800);
	const [pdfSource, setPdfSource] = useState<string | null>(
		url ||
			"https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
	);
	const [searchText, setSearchText] = useState("");
	const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
	const pageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

	// Handle responsive width
	useEffect(() => {
		const updateWidth = () => {
			const maxWidth = window.innerWidth - 32; // Account for padding
			const idealWidth = Math.min(maxWidth, 800);
			setPageWidth(idealWidth);
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
		setNumPages(numPages);
		setError(null);
	};

	const onDocumentLoadError = (error: Error) => {
		setError(`Failed to load PDF: ${error.message}`);
	};

	// Search functionality
	const highlightPattern = (text: string, pattern: string) => {
		if (!pattern.trim()) return text;
		const regex = new RegExp(`(${pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
		return text.replace(regex, (match) => `<mark class="bg-yellow-300">${match}</mark>`);
	};

	const textRenderer = (textItem: { str: string }) => {
		if (!searchText.trim()) return textItem.str;
		return highlightPattern(textItem.str, searchText);
	};

	const handleSearch = (value: string) => {
		setSearchText(value);
		setCurrentMatchIndex(0);
		
		if (!value.trim()) {
			return;
		}

		// Scroll to first match after a brief delay to allow rendering
		setTimeout(() => {
			const firstMark = document.querySelector('mark');
			if (firstMark) {
				firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}, 300);
	};

	const navigateMatch = (direction: 'next' | 'prev') => {
		const marks = document.querySelectorAll('mark');
		if (marks.length === 0) return;

		let newIndex = currentMatchIndex;
		if (direction === 'next') {
			newIndex = (currentMatchIndex + 1) % marks.length;
		} else {
			newIndex = currentMatchIndex === 0 ? marks.length - 1 : currentMatchIndex - 1;
		}

		setCurrentMatchIndex(newIndex);
		marks[newIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		
		// Highlight current match differently
		marks.forEach((mark, idx) => {
			if (idx === newIndex) {
				mark.classList.add('bg-orange-400');
				mark.classList.remove('bg-yellow-300');
			} else {
				mark.classList.add('bg-yellow-300');
				mark.classList.remove('bg-orange-400');
			}
		});
	};

	const totalMatches = () => {
		if (!searchText.trim()) return 0;
		return document.querySelectorAll('mark').length;
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-4 sm:py-8 mt-20">
			<div className="container mx-auto px-2 sm:px-4 max-w-6xl">
				{/* Header Section */}
				<div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-slate-200">
					<div className="flex items-center gap-3 mb-4">
						<div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 sm:w-6 sm:h-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="PDF Document Icon"
							>
								<title>PDF Document</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
								PDF Viewer
							</h1>
							<p className="text-sm sm:text-base text-slate-600 mt-1">
								{url ? "📄 External PDF" : "📁 Sample PDF"}
							</p>
						</div>
					</div>

					<div className="mb-4 text-sm text-slate-600">
						<p className="font-medium mb-2">Test PDfs</p>
						<ol className="list-inside list-decimal">
							<li>
								<button
									type="button"
									className="text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
									onClick={() =>
										setPdfSource(
											"https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf",
										)
									}
								>
									Original sample
								</button>
							</li>
							<li>
								<button
									type="button"
									className="text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
									onClick={() => setPdfSource("/image-doc.pdf")}
								>
									With Images
								</button>
							</li>
							<li>
								<button
									type="button"
									className="text-indigo-600 hover:text-indigo-700 transition-colors cursor-pointer"
									onClick={() => setPdfSource("/sample-report.pdf")}
								>
									Report
								</button>
							</li>
							<br />
						</ol>
					</div>

					{/* Search Bar */}
					<div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
						<div className="flex flex-col sm:flex-row gap-3">
							<div className="flex-1 relative">
								<input
									type="text"
									value={searchText}
									onChange={(e) => handleSearch(e.target.value)}
									placeholder="Search in PDF..."
									className="w-full px-4 py-2 pl-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Search Icon"
								>
									<title>Search</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							
							{searchText && (
								<div className="flex items-center gap-2">
									<span className="text-sm text-slate-600 whitespace-nowrap">
										{totalMatches()} {totalMatches() === 1 ? 'match' : 'matches'}
									</span>
									<button
										type="button"
										onClick={() => navigateMatch('prev')}
										disabled={totalMatches() === 0}
										className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
										title="Previous match"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-label="Previous Match"
										>
											<title>Previous Match</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 19l-7-7 7-7"
											/>
										</svg>
									</button>
									<button
										type="button"
										onClick={() => navigateMatch('next')}
										disabled={totalMatches() === 0}
										className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
										title="Next match"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-label="Next Match"
										>
											<title>Next Match</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</button>
									<button
										type="button"
										onClick={() => {
											setSearchText('');
											setCurrentMatchIndex(0);
										}}
										className="p-2 bg-white border border-slate-300 rounded-lg hover:bg-red-50 hover:border-red-300 transition-colors"
										title="Clear search"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-label="Clear Search"
										>
											<title>Clear Search</title>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							)}
						</div>
					</div>

					{error && (
						<div className="mt-4 p-3 sm:p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg shadow-sm">
							<div className="flex items-start gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 mt-0.5 shrink-0"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Error Icon"
								>
									<title>Error</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<p className="text-sm sm:text-base">{error}</p>
							</div>
						</div>
					)}
				</div>

				{/* PDF Display Section */}
				<div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-slate-200">
					<div className="p-2 sm:p-4 md:p-6 bg-white">
						<div className="flex flex-col items-center gap-3 sm:gap-4">
							<Document
								file={pdfSource}
								onLoadSuccess={onDocumentLoadSuccess}
								onLoadError={onDocumentLoadError}
								loading={
									<div className="flex flex-col items-center justify-center py-12 sm:py-20">
										<div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4" />
										<p className="text-slate-600 text-sm sm:text-base font-medium">
											Loading PDF...
										</p>
									</div>
								}
								className="flex flex-col items-center w-full"
							>
								{numPages &&
									Array.from(new Array(numPages), (_, index) => (
										<div
											key={`page_${index + 1}`}
											className="mb-3 sm:mb-4 w-full flex justify-center"
										>
											<div 
												className="relative group"
												ref={(el) => { pageRefs.current[index + 1] = el; }}
											>
												<Page
													pageNumber={index + 1}
													renderTextLayer={true}
													renderAnnotationLayer={true}
													customTextRenderer={textRenderer}
													className="shadow-lg sm:shadow-xl rounded-lg overflow-hidden border border-slate-200 transition-transform duration-200 hover:shadow-2xl"
													width={pageWidth}
												/>
											</div>
										</div>
									))}
							</Document>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
