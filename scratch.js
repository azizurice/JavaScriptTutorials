/*
 * Assingment-3: Write a JavaScrpt program that will take/read three numbers from Keyboard and display the larger number on the screen.
 */

var a, b,c,d,larger;

a=parseInt(prompt("Enter the first number :",""));
b=parseInt(prompt("Enter the second number :",""));
c=parseInt(prompt("Enter the third number :",""));


if(a>b){
  if(a>c){
    larger=a;
  }else{
    larger=c;
  }
}else{
  if(b>c){
    larger=b;
  }else{
    larger=c;
  }
}

alert(a+ " , " + b + " and " + c +  " The larger number is " + larger);