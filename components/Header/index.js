// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());

function Header() {

    //create elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //add classes
    header.setAttribute('class', 'header');
    headerDate.setAttribute('class', 'date');
    headerTemp.setAttribute('class', 'temp');

    //context -  content
    headerDate.textContent =  'MARCH 29, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°';

    //append titles to parent div
    header.append( headerDate, headerTitle, headerTemp);

    return header;
}
