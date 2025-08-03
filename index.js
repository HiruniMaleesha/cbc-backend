import express from 'express';

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World</h1>
        <h2>Welcome to my Express app!</h2>
    `);
});