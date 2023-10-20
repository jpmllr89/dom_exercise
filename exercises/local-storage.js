/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has white red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */


// console.log(localStorage.favorites.split(','));
/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...
const data = {
  clicks: Array.from(localStorage.getItem('favorites'))
}
console.log(data.clicks);
const cards = document.getElementsByClassName('card');
function setRed(e){
  e.classList.add('red');
}
function removeRed(e){
  e.classList.remove('red');
}

const addToLS = (e) => {
  console.log(data.clicks);
  if(data.clicks !== []){
    data.clicks.push(e.id);
  }
  let storageData = JSON.stringify(data.clicks);
  localStorage.setItem('favorites', storageData);
}

const deleteFromLS = (e) => {
  data.clicks.splice(data.clicks.indexOf(e.id), 1).join('');
  let storageData = JSON.stringify(data.clicks);
  localStorage.setItem('favorites', storageData);
}

const callBackFn = (e) => {
  const clicked = e.target;
  if(!data.clicks.find(e=> e==clicked.id)){  
    setRed(clicked);
    addToLS(clicked);
  }
  else if(data.clicks.find(e => e==clicked.id)){
    removeRed(clicked);
    deleteFromLS(clicked);
  }
  console.log(data.clicks);
}
Array.from(cards).forEach((item) => {
  item.addEventListener('click', callBackFn);
  if(localStorage.favorites.includes(item.id)){
    item.classList.add('red');

  }
})
