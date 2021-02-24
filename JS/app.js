var userName = confirm("Are you like our products?");
var amountofcups = prompt("how many cups you need?");
var totalprice = amountofcups *2.5

if (amountofcups >= 2 && amountofcups<=6){
    alert("Total Price =" + totalprice + "JD");
}
if (amountofcups>=7 && amountofcups<10){
    alert("Total Price =" + totalprice + "JD");
} else if (amountofcups<2){
    alert("Total Price =" + totalprice + "JD");
}


