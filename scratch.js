/*
 * Assingment-3: Write a JavaScrpt program that will take/read three numbers from Keyboard and display the largest number on the screen.
 */

var a, b,c,d,largest;

a=parseInt(prompt("Enter the first number :",""));
b=parseInt(prompt("Enter the second number :",""));
c=parseInt(prompt("Enter the third number :",""));


if(a>b){
  if(a>c){
    largest=a;
  }else{
    largest=c;
  }
}else{
  if(b>c){
    largest=b;
  }else{
    largest=c;
  }
}

alert(a+ " , " + b + " and " + c +  " The largest number is " + largest);
