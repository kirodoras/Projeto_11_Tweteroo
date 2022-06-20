<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kirodoras/Projeto_11_Tweteroo">
    <img src="logo.svg" alt="Logo" width="120">
  </a>

<h3 align="center">Tweeteroo | Back end</h3>
    <br />
    <a href="https://tweeteroo.herokuapp.com/"><strong>Deploy in Heroku»</strong></a>
</div>

<div align="center">
  <h3 align="center">Built With</h3>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
</div>

Sign-up - POST
<br />
Save this user in an array of server users
```jsx
https://tweeteroo.herokuapp.com//sign-up

const body_exemple =
{
username: "bobesponja",
avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}
```

Tweets - POST
<br />
Save this tweet in an array of server tweets
```jsx
https://tweeteroo.herokuapp.com//tweets

const body_exemple =
{
username: "bobesponja",
tweet: "eu amo o hub"
}
```

Tweets - GET
<br />
Returns the last 10 published tweets
```jsx
https://tweeteroo.herokuapp.com//tweets

const return_exemple =
[
{
username: "bobesponja",
avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
tweet: "eu amo o hub"
},
]
```

<!-- CONTACT -->

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/mateus-figueiredo-pereira/