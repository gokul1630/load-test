const express = require("express");
const app = express();

app.get('/', (req, res)=>{
	res.send('express server')
})

app.get('/load', (req, res)=>{
	let count = 0
	for (let index = 0; index < 1e+11; index++) {
		count += 1
	}
	res.json({ count })
})

app.listen(8081)