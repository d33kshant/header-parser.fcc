const express = require('express')
const app = express()

const PORT = 5000

app.use(express.json())

app.get('/api/whoami', (req, res)=>{
  const ipaddress = req.headers['x-forwarded-for']
  const language = req.headers['accept-language']
  const software = req.headers['user-agent']

  res.json({
    ipaddress,
    language,
    software,
  })
})

app.listen(PORT, ()=>console.log('Started listening on port:', PORT))
