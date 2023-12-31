const express = require('express');
const pino = require('pino')();
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/live', (req, res) => res.status(200).json({ status: 'ok' }));

app.get('/', (req, res) => {
   res.send('Hello, World!');
});

app.listen(PORT, () => {
   pino.info(`Server listening on port ${PORT}`);
});
