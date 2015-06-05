/*
 * Assingment-3: Write a JavaScrpt program that will take/read two numbers from Keyboard and display the larger number on the screen.
 *
 */

var a, b, larger;

a=parseInt(prompt("Enter the first number :",""));
b=parseInt(prompt("Enter the second number :",""));

if(a>b){
  larger=a;
}else{
  larger=b;
}

alert("The number is " + a + " and " + b + " larger number " + larger);
