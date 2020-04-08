const express = require('express');
const app = express();

const QADB = require('.db/QADB');

const port = 3000;

// List Questions
app.get('/', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;