import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Server i sii')
})

app.listen(3030, () => {
  console.log('server is running at 3030')
})
