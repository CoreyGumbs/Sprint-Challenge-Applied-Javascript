// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.tabs');

const TabsTopics = (topic) => {

    //create element
    const tabs = document.createElement('div');

    //class
    tabs.setAttribute('class', 'tab');

    //context - content
    tabs.textContent = topic;

    return tabs;
}

console.log(TabsTopics('test'));