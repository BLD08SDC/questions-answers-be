const express = require('express');
const app = express();

const QADB = require('.db/QADB');

const port = 3000;

// List Questions
app.get('/qa/:product_id', (req, res) => {

});

// Add a Question
app.post('/qa/:product_id', (req, res) => {

});

// Mark Question as Helpful
app.put('/qa/question/:question_id/helpful', (req, res) => {

});

// Report Question
app.put('/qa/question/:question_id/report', (req, res) => {

});

// List Answers
app.get('/qa/:question_id/answers', (req, res) => {
    
});

// Add an Answer
app.post('/qa/:question_id/answers', (req, res) => {

});

// Mark Answer as Helpful
app.put('/qa/answer/:answer_id/helpful', (req, res) => {

});

// Report Answer
app.put('/qa/answer/:answer_id/report' (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

module.exports = app;