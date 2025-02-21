


var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

//--------------------------------------------------------------------


var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var sub = num1 - num2;

document.write(" <br> Subtraction of " + num1 + " and " + num2 + " is " + sub);


//--------------------------------------------------------------------


var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var mul = num1 * num2;

document.write(" <br> Multiplication of " + num1 + " and " + num2 + " is " + mul);


//--------------------------------------------------------------------



var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var div = num1 / num2;

document.write(" <br> Division of " + num1 + " and " + num2 + " is " + div);


//--------------------------------------------------------------------


var num1 = Number(prompt("Enter first number:"));

var num2 = Number(prompt("Enter second number:"));

var mod = num1 % num2;

document.write(" <br> Modulus of " + num1 + " and " + num2 + " is " + mod);

//--------------------------------------------------------------------


var num = 5

document.write("Value after variable declaration is: " + num + "<br>");

num = 5
document.write("Initial value: " + num + "<br>");

num++; 
document.write("Value after increment is: " + num + "<br>");

num += 7; 
document.write("Value after addition is: " + num + "<br>");

num--; 
document.write("Value after decrement is: " + num + "<br>");

var remainder = num / 3;
document.write("The remainder is: " + remainder);

//--------------------------------------------------------------------


var ticketPrice = 600;

var tickets = Number(prompt("Enter the number of tickets:"));

var totalCost = ticketPrice * tickets;

document.write("Total cost of buying " + tickets + " tickets is " + totalCost + " PKR");


//--------------------------------------------------------------------

var number = Number(prompt("Enter a number for the multiplication table:"));

document.write("<h1>Multiplication Table of " + number + "</h1>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
