import express from 'express';
import mongoose from 'mongoose';

const app = express();



app.get('/', (req, res) => {
    res.send("Working fine Eshu");
})

app.get('/users/all', (req, res) => {
    res.json({
        success: true,
        users: [],
    })
})
app.listen(4000, () => {
    console.log('listening on port 4000');
})