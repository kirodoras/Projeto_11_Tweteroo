import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const TWEETS_LIMIT = 10;

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

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    if (tweet.hasOwnProperty('username')
        && tweet.hasOwnProperty('tweet')) {
        const user = users.find((info) => info.username === tweet.username);
        tweet.avatar = user.avatar;
        tweets.unshift(tweet);
        if (tweets.length > TWEETS_LIMIT) tweets.pop();
        res.send('OK');
    } else {
        res.status(400).send('BAD REQUEST');
    }
});

app.get('/tweets', (req, res) => {
    res.send(tweets);
});

app.listen(port);