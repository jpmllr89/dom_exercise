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
// const data = {
//   clicks: '',
//   clicked: localStorage.getItem('favorites')
// }
// console.log(data.clicks);
// const cards = document.getElementsByClassName('card');
// function setRed(e){
//   e.classList.add('red');
// }
// function removeRed(e){
//   e.classList.remove('red');
// }

// const addToLS = (e) => {
//   console.log(data.clicks);
//   if(data.clicked == null){
//     localStorage.setItem('favorites', data.clicks);
//     data.clicks+=e.id;
//   }
//   if(data.clicked !== ''){
//     data.clicks += e.id;
//   }
//   let storageData = data.clicks;
//   localStorage.setItem('favorites', storageData);
// }

// const deleteFromLS = (e) => {
//   let storage = data.clicked;
//   if(storage !== null && storage !== ''){
//     let dataArray = data.clicks.split('');
//     // console.log("alert");
//     dataArray.splice(dataArray.indexOf(e.id), 1).join('');
//     let storageData = dataArray.join('');
//     data.clicked = localStorage.setItem('favorites', storageData);
//   }
// }

// const callBackFn = (e) => {
//   const clicked = e.target;
//   let storage = Array.from(data.clicked);
//   if(!data.clicked.split('').find(e=> e==clicked.id)){  
//     setRed(clicked);
//     addToLS(clicked);
//   }
//   else if(data.clicked.split('').find(e => e==clicked.id)){
//     removeRed(clicked);
//     deleteFromLS(clicked);
//   }
//   console.log(data.clicks);
// }
// Array.from(cards).forEach((item) => {
//   item.addEventListener('click', callBackFn);
//   // if(data.clicks.includes(item.id)){
//   //   item.classList.add('red');

//   // }
// })


const workingStorage = {
  clicks : '',
  clicked : localStorage.getItem('favorites')
}
const cards = document.getElementsByClassName('card');
function setRed(e){
  e.classList.add('red');
}
function removeRed(e){
  e.classList.remove('red');
}

const addToLS = (e) => {
  data = localStorage.getItem('favorites');
  console.log(data)
  // if(data == null){
  //   data += e.id;
  // }
  if(data !== ''){
    data += e.id;
  }
  let storageData = data;
  localStorage.setItem('favorites', storageData);
}

const deleteFromLS = (e) => {
  data = localStorage.getItem('favorites');
  if(data !== null && data !== ''){
    let dataArray = data.split('');
    console.log(dataArray)
    // console.log("alert");
    dataArray.splice(dataArray.indexOf(e.id), 1).join('');
    console.log(dataArray);
    let storageData = dataArray.join('');
    localStorage.setItem('favorites', storageData);
  }
}

const callBackFn = (e) => {
  const clicked = e.target;
  data = localStorage.getItem('favorites');
  if(!data.split('').find(e=> e==clicked.id)){  
    setRed(clicked);
    addToLS(clicked);
  }
  else if(data.split('').find(e => e==clicked.id)){
    removeRed(clicked);
    deleteFromLS(clicked);
  }
  console.log(data);
}
Array.from(cards).forEach((item) => {
  item.addEventListener('click', callBackFn);
  if(Array.from(workingStorage.clicked).includes(item.id)){
    console.log(Array.from(workingStorage.clicked))
    item.classList.add('red');

  }
})