import express from 'express';

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World</h1>
        <p>Welcome to the backend of CBC-Batch-6!</p>
        <p>Initiate the backend👏</p>
    `);
});