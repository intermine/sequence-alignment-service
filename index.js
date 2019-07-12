const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status(200).json({
		version: 1.0,
		api_working: true,
		error: false
	});
});

app.post('/align-sequence', (req, res) => {
	if (!req.body.sequence) {
		return res
			.status(400)
			.json({ error: true, message: 'No sequence sent!' })
			.end();
	}

	
	
});

app.listen(process.env.PORT || 3000, () => {
	console.log('Server started!');
});