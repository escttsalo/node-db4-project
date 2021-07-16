require('dotenv').config(); //accesses .env for port

const server = require('./api/server.js');

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});