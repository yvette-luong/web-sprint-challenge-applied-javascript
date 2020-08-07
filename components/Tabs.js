// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios
.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(res => {
    const tabArr = res.data.topics 
    const tabsContainer = document.querySelector('.topics')
    tabArr.forEach( data=> {
        //create element
        const tabsWrapper = document.createElement('div')
        // set up classlist
        tabsWrapper.classList.add('tab')
        //text 
        tabsWrapper.textContent = data
        tabsContainer.appendChild(tabsWrapper)
    });    
 console.log(res) 
 }) //close for res
.catch(err => {
  console.log(err)
})
