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
        if (user.username.length < 1 || user.avatar.length < 1) {
            res.sendStatus(400)
            return;
        }
        users.push(user);
        res.status(201).send('OK');
        return;
    } else {
        res.sendStatus(400);
        return;
    }
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    const user = users.find((info) => info.username === tweet.username);
    if (!user) {
        res.sendStatus(400);
        return;
    }
    if(!tweet.hasOwnProperty('tweet')) {
        res.sendStatus(400);
        return;
    }
    if (tweet.hasOwnProperty('username')) {
        if (tweet.username.length < 1 || tweet.tweet.length < 1) {
            res.sendStatus(400);
            return;
        }
        tweet.avatar = user.avatar;
        tweets.unshift(tweet);
        if (tweets.length > TWEETS_LIMIT) tweets.pop();
        res.status(201).send('OK');
        return;
    } else {
        res.res.sendStatus(400);
        return;
    }
});

app.get('/tweets', (req, res) => {
    res.send(tweets);
    return;
});

app.listen(port);