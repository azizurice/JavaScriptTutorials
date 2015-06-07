/*
 * Assingment-3: Write a simple JavaScrpt program that will take/read four numbers from Keyboard and display the largest number on the screen.
 */

var a, b,c,d,largest;

a=parseInt(prompt("Enter the first number :",""));
b=parseInt(prompt("Enter the second number :",""));
c=parseInt(prompt("Enter the third number :",""));
d=parseInt(prompt("Enter the fourth number:",""));

if(a>b){
  if(a>c){
    if(a>d){
      largest=a;
    }else{
      largest=d;
    }
  }else{
    if(c>d){
      largest=c;
    }else{
      largest=d;
    }
  }
}else{
  if(b>c){
    if(b>d){
      largest=b;
    }else{
      largest=d;
    }
  }else{
    if(c>d){
      largest=c;
    }else{
      largest=d;
    }
  }
}

alert(a+ " , " + b + " , " + c + " and " + d + " The largest number is " + largest);