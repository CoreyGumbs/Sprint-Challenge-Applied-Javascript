// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');
//const topicsArray = [];

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const data = response.data.articles;
    const topics = Object.values(data);

    //map through each article topic and pull each article from topic
    //then push all articles to an array

    //const topics = Object.keys(data);
    // topics.map(key => {
    //     data[key].forEach(topic => {
    //         topicsArray.push(topic);
    //     })  
    // })
    topics.forEach(topic =>{
        topic.forEach(article =>{
            // topicsArray.push(article);
            cardsContainer.append(ArticleCard(article));
        });
    });
    
})
// .then(() => {
//     //map through topicsArray and publish each article to component function
//     topicsArray.map(topic => {
//         cardsContainer.append(ArticleCard(topic));
//     })
// })
.catch(err => console.log(err));

const ArticleCard = (article) => {
  
    //create elements
    const card =  document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const authorImgContianer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    //classes
    card.setAttribute('class', 'card');
    cardHeadline.setAttribute('class', 'headline');
    cardAuthor.setAttribute('class', 'author');
    authorImgContianer.setAttribute('class', 'img-container');

    //append
    card.append(cardHeadline, cardAuthor);
    cardAuthor.append(authorImgContianer, authorName);
    authorImgContianer.appendChild(authorImg);

    //content - context
    cardHeadline.textContent = article.headline;
    authorImg.src = article.authorPhoto;
    authorName.textContent = article.authorName;

    return card;
}

