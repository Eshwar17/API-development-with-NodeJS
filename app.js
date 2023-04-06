import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName: 'backendapi',
}).then(() => {
    console.log("Database connection established");
}).catch((e) => console.log(e));

//creating schema
const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

//create collection
const User = mongoose.model('User', schema);

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