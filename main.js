"use strict"


//if or else in html for even or odd for render Coffees.

//Two separate Divs. for loop through divs.



function renderCoffee(coffee) {



    var html = '<div id="coffee">';
    html += '<a id = coffee1>' + '<span>' + '<span id =coffeeName>' + coffee.name + '</span>' + " " +  '<span id =coffeeRoast>' + coffee.roast + '</span>'  + '</span>' + '</a>';
    html += '</div>';


    return html;
}

//First function called
//Loops through the array of coffees
function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1 ; i >= 0; i--) {



        html += renderCoffee(coffees[i]);

    }

    return html;
}

//Base Function
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

function pushCoffee(){


    //The coffeeName I want to push
    var coffeeName = document.getElementById("name-coffee").value;
    console.log(coffeeName);
    console.log(typeof coffeeName);



    //Roast Selection of the Second Menu Option
    var roastSelection2 = document.getElementById("roast-selection2").value;
    console.log(roastSelection2);


    var coffeePushed = {
    id: 15,
    name: coffeeName,
    roast: roastSelection2
    };



    coffees.push(coffeePushed);
    console.log(coffees);


    tbody.innerHTML = renderCoffees(coffees);

}

//Keyword filter search
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

}


//Step 0
//Array of coffees
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

//tbdoy declaration returns the first element in the document corresponding to row.
var tbody = document.querySelector('.row');

//Returns these rendered coffees to the HTML Document
//RenderCoffees is the first function called
tbody.innerHTML = renderCoffees(coffees);


//<------------------Second half of the coffee form------------------------------------->>

//Button submissionn return first element in the document corresponding to button submission
var submitButton = document.querySelector('#button-submission');



//push to updated coffee list
submitButton.addEventListener('click', pushCoffee);

