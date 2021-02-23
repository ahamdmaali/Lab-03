var userName = confirm("Are you like our products?");
var amountofcups = prompt("how many cups you need?");



if (amountofcups >= 2 && amountofcups<6){
    alert("your discount is 15%!");
}
if (amountofcups>=7 && amountofcups<10){
    alert("your discount is 35%!");
} else if (amountofcups<2){
    alert("Sorry, you didn't earned a discount");
}
