"use strict";

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var roastSelection = '';

function filteredList(roast){


     roastSelection = roast.value;
     return roastSelection;
}


function renderCoffees(coffees) {
    var coffee = '';
    for (var i = 0; i < coffees.length; i++) {
        coffee += displayCoffee(coffees[i])
    }
    return(coffee);
}

var listOfCoffees = document.querySelector('li');

function displayCoffee(coffee) {
    var html = '';
    html += '<li>';
    html += coffee.name;
    html += '/';
    html += coffee.roast;
    html += '</li>';
    listOfCoffees.innerHTML = html;
}

console.log(renderCoffees(coffees));

//Should be an event listener
var roastFiltered = document.querySelector("#add-roast-selection");
// roastFiltered.innerText = filteredList(coffees.roast);

var listOfCoffees = document.querySelector('li');

