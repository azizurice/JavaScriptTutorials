/*
 * Assingment-3: Write a JavaScrpt program that will take/read two numbers from Keyboard and display the large number on the screen.
 *
 */

var a, b, large;

a=parseInt(prompt("Enter the first number :",""));
b=parseInt(prompt("Enter the second number :",""));

if(a>b){
  large=a;
}else{
  large=b;
}

alert("The number is " + a + " and " + b + " large number " + large);
