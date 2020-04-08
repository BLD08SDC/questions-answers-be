const express = require('express');
const app = express();

const QADB = require('.db/QADB');

const port = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;