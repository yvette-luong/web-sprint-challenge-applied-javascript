// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const containerCards = document.querySelector('.cards-container')

let bootstrapArticles
let jsArticles
let nodeArticles
let technologyArticles
let jQueryArticles

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => {
        const { articles } = res.data
        console.log(articles)
        bootstrapArticles = articles.bootstrap
        jsArticles = articles.javascript
        jQueryArticles = articles.jquery
        nodeArticles = articles.node
        technologyArticles = articles.technology
        const allArticles = [ ...jQueryArticles, ...bootstrapArticles, ...jsArticles, ...nodeArticles, ...technologyArticles]
        allArticles.map(article => {
            cardsMaker(article)
        })  
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    })

function cardsMaker(object) {
    const cardWrapper = document.createElement('div');
    const innerHeadline = document.createElement('div');
    const profile = document.createElement('div');
    const imgContainer = document.createElement('div');
    const profilePic = document.createElement('img');
    const profileName = document.createElement('span');

    //classlist att set up
    cardWrapper.classList.add('card');
    innerHeadline.classList.add('headline')
    profile.classList.add('author')
    imgContainer.classList.add('img-container')
    profilePic.setAttribute('src', object['authorPhoto'])

    //text
    innerHeadline.textContent = object.headline
    profileName.textContent = object.authorName

    //append
    cardWrapper.append(innerHeadline)
    cardWrapper.append(profile)
    cardWrapper.appendChild(imgContainer)
    profile.append(imgContainer)
    profile.appendChild(profilePic)
    imgContainer.append(profilePic)
    profile.append(profileName)

    // Add a listener for click events so that when a user clicks on a card

    cardWrapper.addEventListener('click',() =>{
        console.log(object.headline)
    }
  )

    containerCards.appendChild(cardWrapper)
    return cardWrapper
}
