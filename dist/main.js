import "./main.css";
// const regeneratorRuntime = require("regenerator-runtime");
// const app_key = require('../config/keys').app_key;
// const searchForm = document.querySelector('.searchForm');
// const filterForm = document.querySelector('.filterForm');
// const searchResultDiv = document.querySelector('.search-result');
// const container = document.querySelector('.container');
// let searchQuery = '';

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     searchQuery = e.target.querySelector('.searchQuery').value;
//     fetchSearchResults(searchQuery);
//     searchQuery = '';
// })

// async function fetchSearchResults(searchQuery) {
//     const baseURL = 
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// filterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(window.location.search);
//     searchQuery = urlParams.get('includeIngredients');
//     console.log(searchQuery);
//     let excludeQuery = e.target.querySelector('.excludeQuery').value;
//     let type = e.target.querySelector('.type').value;
//     fetchFilteredSearchResults(searchQuery, excludeQuery, type);
//     excludeQuery = '';
// })

// async function fetchFilteredSearchResults(searchQuery, excludeQuery, type) {
//     const baseURL =
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}&excludeIngredients=${excludeQuery}&type=${type}`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// function generateHTML(results) {
//     filterForm.innerHTML = `
//         <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
//         <!-- <ion-icon name="search"></ion-icon> -->
//         <i class="fa fa-search" aria-hidden="true"></i>
//         <div class="filter-options">
//         <label for="type">Choose a type:</label>
//             <select name="type" class="type">
//                 <option value="main%20course">Main course</option>
//                 <option value="side%20dish">Side dish</option>
//                 <option value="dessert">Dessert</option>
//                 <option value="appetizer">Appetizer</option>
//                 <option value="salad">Salad</option>
//                 <option value="bread">Bread</option>
//                 <option value="breakfast">Breakfast</option>
//                 <option value="soup">Soup</option>
//                 <option value="beverage">Beverage</option>
//                 <option value="sauce">Sauce</option>
//                 <option value="marinade">Marinade</option>
//                 <option value="fingerood">Fingerfood</option>
//                 <option value="snack">Snack</option>
//                 <option value="drink">Drink</option>
//             </select>
//             <button type="submit">Filter</button>
//         </div>`;
//     let generatedHTML = ``;
//     results.map(result => {
//         generatedHTML += 
//         `<div class="item">
//             <img src=${result.image}>
//             <div class="flex-container">
//                 <h1 class="title">${result.title}</h1>
//                 <a class="view-button" href=${result.sourceUrl}>View recipe</a>
//             </div>
//             <p class="item-data">Vegetarian Vegan Gluten Free</p>
//         </div>`
//     })
//     searchResultDiv.innerHTML = generatedHTML;
// }






const regeneratorRuntime = require("regenerator-runtime");
const app_key = require('../config/keys').app_key;
const searchForm = document.querySelector('.searchForm');
const filterForm = document.querySelector('.filterForm');
const searchResultDiv = document.querySelector('.search-result');
const filterInputDiv = document.querySelector('.filter-input-div');
const filterOptions = document.querySelector('.filter-options');
const searchContainer = document.querySelector('.search-container');
const container = document.querySelector('.container');
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('.searchQuery').value;
    fetchSearchResults(searchQuery);
})

async function fetchSearchResults(searchQuery) {
    const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${searchQuery}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data);
    console.log(data);
}

filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let type = e.target.querySelector('.type').value;
    fetchFilteredSearchResults(searchQuery, type);
})

async function fetchFilteredSearchResults(currency, type) {
    const baseURL =
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${type}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data);
    console.log(data);
}

function generateHTML(results) {
    filterInputDiv.innerHTML = `
    <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
    <!-- <ion-icon name="search"></ion-icon> -->
    <i class="fa fa-search" aria-hidden="true"></i>`;
    
    filterOptions.innerHTML = `
    <div class="filter-options">
    <select name="type" class="type">
    <option disabled selected value> -- Type -- </option>
    <option value="bitcoin">Bitcoin</option>
    </select>
    <input type="checkbox" class="checkbox" value="vegetarian">
    <label for="vegetarian">Vegetarian</label>
    <input type="checkbox" class="checkbox" value="vegan">
    <label for="vegan">Vegan</label>
    <input type="checkbox" class="checkbox" value="gluten%20free">
    <label for="gluten-free">Gluten free</label>
    <button type="submit">Filter</button>
    </div>`;

    let generatedHTML = ``;
    results.map(result => {
        generatedHTML += 
        `<div class="item">
            <img src="https://www.rachelphipps.com/wp-content/uploads/2019/02/Salmon-Sashimi-Instagram.jpg">
            <div class="flex-container">
                <h1 class="title">${result.name}</h1>
                <a class="view-button" href="#">View recipe</a>
            </div>
            <p class="item-data">Vegetarian Vegan Gluten Free</p>
        </div>`
    })
    searchResultDiv.innerHTML = generatedHTML;
}


// const regeneratorRuntime = require("regenerator-runtime");
// const app_key = require('../config/keys').app_key;
// const searchForm = document.querySelector('.searchForm');
// const filterForm = document.querySelector('.filterForm');
// const searchResultDiv = document.querySelector('.search-result');
// const filterInputDiv = document.querySelector('.filter-input-div');
// const filterOptions = document.querySelector('.filter-options');
// const searchContainer = document.querySelector('.search-container');
// const container = document.querySelector('.container');
// let searchQuery = '';

// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     searchQuery = e.target.querySelector('.searchQuery').value;
//     fetchSearchResults(searchQuery);
//     //     searchQuery = '';
// })

// async function fetchSearchResults(searchQuery) {
//     const baseURL =
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}`
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// filterForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let excludeQuery = e.target.querySelector('.excludeQuery').value;
//     let type = e.target.querySelector('.type').value;
//     let diet = []
//     let vegetarian = document.getElementById('vegetarian').value;
//     let vegan = document.getElementById('vegan').value;
//     let glutenFree = document.getElementById('glutenFree').value;
//     let ketogenic = document.getElementById('ketogenic').value;
//     let lactoVegetarian = document.getElementById('lacto-vegetarian').value;
//     let ovoVegetarian = document.getElementById('ovo-vegetarian').value;
//     let pescetarian = document.getElementById('pescetarian').value;
//     let paleo = document.getElementById('paleo').value;
//     let primal = document.getElementById('primal').value;
//     let wholeThirty = document.getElementById('whole-30').value;
//     // diet.push(vegetarian, vegan, glutenFree, ketogenic, lactoVegetarian, ovoVegetarian, pescetarian, paleo, primal, wholeThirty)
//     diet = diet.push(vegetarian);
//     diet = diet.filter(word => word.length > 0)
//     // let vegetarian = document.getElementById('vegetarian');
//     // let vegan = document.getElementById('vegan');
//     // let glutenFree = document.getElementById('glutenFree');
//     // let ketogenic = document.getElementById('ketogenic');
//     // let lactoVegetarian = document.getElementById('lacto-vegetarian');
//     // let ovoVegetarian = document.getElementById('ovo-vegetarian');
//     // let pescetarian = document.getElementById('pescetarian');
//     // let paleo = document.getElementById('paleo');
//     // let primal = document.getElementById('primal');
//     // let wholeThirty = document.getElementById('whole-30');
//     fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
//     // excludeQuery = '';
// })

// async function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
//     const baseURL =
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&number=1000&addRecipeInformation=true&includeIngredients=${searchQuery}&excludeIngredients=${excludeQuery}&type=${type}&diet=${diet}`
//     console.log(baseURL);
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.results);
//     console.log(data);
// }

// function changeValue(value) {
//     // console.log(document.getElementById("vegetarian").value);
//     // document.getElementById("vegetarian").value = value;
// }

// function generateHTML(results) {
//     filterInputDiv.innerHTML = `
//     <input class="excludeQuery" type="text" placeholder="Exclude comma separated ingredients">
//     <!-- <ion-icon name="search"></ion-icon> -->
//     <i class="fa fa-search" aria-hidden="true"></i>`;

//     // Add tooltip overlay
//     filterOptions.innerHTML = `
//     <div class="filter-options">
//         <select name="type" class="type">
//             <option disabled selected value> -- Type -- </option>
//             <option value="bitcoin">Bitcoin</option>
//         </select>
    
//         <input type="checkbox" id="vegetarian" name="vegetarian" class="checkbox" value="" onClick=${changeValue('vegetarian')}>
//         <label for="vegetarian">Vegetarian</label>

//         <input type="checkbox" class="checkbox" value="vegan">
//         <label for="vegan">Vegan</label>
        
//         <input type="checkbox" class="checkbox" value="gluten%20free">
//         <label for="gluten-free">Gluten free</label>

//         <input type="checkbox" id="ketogenic" class="checkbox" value="ketogenic">
//         <label for="ketogenic">Ketogenic</label>

//         <input type="checkbox" id="lacto-vegetarian" class="checkbox" value="lacto%20vegetarian">
//         <label for="lacto-vegetarian">Lacto-vegetarian</label>

//         <input type="checkbox" id="ovo-vegetarian" class="checkbox" value="ovo%20vegetarian">
//         <label for="ovo-vegetarian">Ovo-vegetarian</label>

//         <input type="checkbox" id="pescetarian" class="checkbox" value="pescetarian">
//         <label for="pescetarian">Pescetarian</label>

//         <input type="checkbox" id="paleo" class="checkbox" value="paleo">
//         <label for="paleo">Paleo</label>

//         <input type="checkbox" id="primal" class="checkbox" value="primal">
//         <label for="primal">Primal</label>

//         <input type="checkbox" id="whole-30" class="checkbox" value="whole%2030">
//         <label for="whole-30">Whole 30</label>
        
//         <button type="submit">Filter</button>
//     </div>`;

//     let generatedHTML = ``;
//     results.map(result => {
//         generatedHTML +=
//             `<div class="item">
//              <img src=${result.image}>
//              <div class="flex-container">
//                  <h1 class="title">${result.title}</h1>
//                  <a class="view-button" href=${result.sourceUrl}>View recipe</a>
//              </div>
//              <p class="item-data">Vegetarian Vegan Gluten Free</p>
//         </div>`
//     })
//     searchResultDiv.innerHTML = generatedHTML;
// }