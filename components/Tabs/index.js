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

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(res =>{
    const data = res.data.topics;
    data.forEach(topic => {
        tabs.appendChild(TabsTopics(topic));
    });
})
.catch(err => console.log(err));

const TabsTopics = (topic) => {
    //create element
    const tabs = document.createElement('div');
    //set class
    tabs.setAttribute('class', 'tab');
    //context - content
    tabs.textContent = topic;

    return tabs;
}
