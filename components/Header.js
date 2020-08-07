// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(object) {
    const headerContainer = document.querySelector('.header-container')
    //create elements
    const header = document.createElement('div')
    const datePanel   = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const tempPanel = document.createElement('span')   
    header.append(datePanel)
    header.append(headerTitle)
    header.append(tempPanel)
    header.className = 'header'
    datePanel.className = 'date'
    tempPanel.className = 'temp'
    headerContainer.appendChild(header)
    //text 
    headerTitle.textContent = object.headerTitle
    tempPanel.textContent = object.tempPanel
    datePanel.textContent = object.datePanel

    return header
}

console.log(Header({ datePanel:'MARCH 28, 2020',headerTitle: 'Lambda Times', tempPanel: '98°' }))
