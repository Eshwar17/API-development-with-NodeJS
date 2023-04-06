import express from 'express';
import mongoose from 'mongoose';

const app = express();
//using middlewares
app.use(express.json());

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
});
//getting Users API
app.get('/users/all',async (req, res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users,
    });
});

//Posting Users API
app.post("/users/new", async (req, res) => {
    const {name, email, password} = req.body;

    await User.create({
        name, email, password
    });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: 'User created successfully',
    });
});

app.listen(4000, () => {
    console.log('listening on port 4000');
})