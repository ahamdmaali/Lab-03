var userName = confirm("Are you like our products?");
var amountofcups = prompt("how many cups you need?");

function myfunction(amountofcups) {
    var totalprice = amountofcups*2.5 +"JD";
    return totalprice;
}
myfunction(amountofcups);
alert (myfunction(amountofcups));


