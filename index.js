// Initialize express server on PORT 1337
const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

// create a new route for "/hello-world"

app.listen(process.env.PUBLIC_PORT, () => {
	console.log('Server started')
})
