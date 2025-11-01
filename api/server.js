import serverEntry from '../dist/server/server.js'

export default async function handler(req, res) {
  const url = new URL(req.url || '/', `https://${req.headers.host}`)
  
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
  })

  const response = await serverEntry.fetch(request)
  
  res.status(response.status)
  
  response.headers.forEach((value, key) => {
    res.setHeader(key, value)
  })
  
  if (response.body) {
    const reader = response.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      res.write(value)
    }
  }
  
  res.end()
}

