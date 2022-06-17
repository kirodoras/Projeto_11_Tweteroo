import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

const users = [];

const tweets = [];

app.post('/sign-up', (req, res) => {
    const user = req.body;
    if (user.hasOwnProperty('username')
        && user.hasOwnProperty('avatar')) {
        users.push(user);
        res.send('OK');
    } else {
        res.status(400).send('BAD REQUEST');
    }
});

app.listen(port);