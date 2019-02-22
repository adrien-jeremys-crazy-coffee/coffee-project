"use strict"

function renderCoffee(coffee) {
    var html = '<div id="coffee">';
    html += '<a>' + '<span>' + coffee.name + " " + coffee.roast + '</span>' + '</a>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);

    }

    return html;
}

function updateCoffees(roastSelection) {
    roastSelection.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.target.value;
    // console.log(selectedRoast);
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function keyWordSearch() {

    var input, filter, coffeesDisplayedDiv, txtValue, coffeeName;
    input = document.getElementById("coffee-name");
    filter = input.value.toUpperCase();
    // var renderCoffeeList = document.getElementById("coffee");

    var renderCoffeeList = tbody;
    console.log(renderCoffeeList);
    // console.log(test);
    coffeesDisplayedDiv = renderCoffeeList.getElementsByTagName("a");
    // console.log(coffeesDisplayedDiv);

    for (var i = 0; i < coffeesDisplayedDiv.length; i++) {


        coffeeName = coffeesDisplayedDiv[i].getElementsByTagName("span")[0];
        console.log(coffeeName);
        txtValue = coffeeName.textContent || coffeeName.innerText;
        console.log(txtValue);
        console.log( txtValue.toUpperCase().indexOf(filter));

        if (txtValue.toUpperCase().indexOf(filter) > -1) {


            coffeesDisplayedDiv[i].style.display = "";

        } else {
            coffeesDisplayedDiv[i].style.display = "none";
        }

    }

    // coffeeList = coffees;
    // console.log(coffeeList.length);
    // for(var i = 0; i < coffeeList.length; i++){
    //
    //     //a Prints individual elements
    //     a = coffeeList[i].name;
    //     console.log(a);
    //     txtValue = a.textContent || a.innerText;
    //     console.log(txtValue);
    // }
    //
    // if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //     a.style.display = "";
    // } else {
    //     a.style.display = "none";
    // }


}

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

var tbody = document.querySelector('.row');
// var roastSelection = document.querySelector('#roast-selection');


tbody.innerHTML = renderCoffees(coffees);

// roastSelection.addEventListener('click', updateCoffees);