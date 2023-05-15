const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(
  cors({
    origin: [
      'https://tourist-route.vercel.app',
      'https://tourist-route-git-develop-andryore.vercel.app',
    ],
  }),
)

app.get('/api/hello', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
