// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName(){
    customerName = "BOB";
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "Maggie";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Meredith";
}
console.log(changeLeastFavoriteCustomer())