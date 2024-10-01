// Q1:Number is even or not

function NumberIsEven(number){
    return number%2===0
}

// console.log(NumberIsEven(11));

// Q2:Write a function that takes a number n and returns an array containing the first n numbers in the Fibonacci sequence.
const arr=[0,1]
function Fibonacci(number) {
for (let i = 2; i < number; i++) {
    arr.push(arr[i-1]+arr[i-2])
    
}
  return arr  
}
  
// console.log(Fibonacci(10));

// Q3:Write a function that takes a year and determines whether it is a leap year.

function leapyear(year) {
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log(`this is leap year :${year}`);
    
}else{

    console.log(`this is  not leap year :${year}`);
}
}

// leapyear(2028)


// Q4:Given an array of numbers, write a function that returns the largest number in the array.

// function largestNumber(arr) {
//   arr= arr.sort((a,b)=>{
//      return b-a
//   })
    
//   return arr[0]
// }
// console.log(largestNumber([1,3,5,2,8,3,6,9,1]));

// function largestNumber(arr) {
//     return Math.max(...arr)
// }
// console.log(largestNumber([100,32,53,24,85,32,63,94,122]));
const array=[10,32,53,24,85,32,63,94,122]
function largestNumber(arr) {
   
    let max=arr[0]
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]>max) {
        max=arr[i]
      }
        
    }
    return max 
}

// console.log(largestNumber(array));

// function largest(arr) {
//     if (arr.length==0) {
//         console.log("array is empty");
        
//     }else{

//         return arr.reduce((a,b) => {return (a>b)?a:b})
//     }
    
// }
// console.log(largest(array));

// function largest(arr) {
//     let max=arr[0]
//      arr.forEach((num) => {
//         if (num>max) {
//              max=num
//         }
        
//     });
//     return max
// }

// console.log(largest(array));

// function largest(arr) {
//     let max=arr[0]
//      arr.filter((num) => {
//         if (num>max) {
//              max=num
//         }
        
//     });
//     return max
// }

// console.log(largest(array));

function largest(arr) {
    let max=arr[0]
    if (arr.length==0) {
        console.log("array is empty");
        
    }else{
        arr.every(num=>{
            if (num>max) {
                max=num
            }
            return true
        })
    }
return max
}

// console.log(largest(array));



// Q5:Write a function that takes an object representing a person (with name, age, and location) and returns a string in the following format: "Name is [name], age is [age], and lives in [location]".


const person={
    Name:"labhesh",
    age:22,
    location:"surat"
}
 function name(obj) {
  return `Name is ${obj.Name} age is ${obj.age} location is ${obj.location}`  
 }

//  console.log(name(person));

// Q6:Write a function that takes an array of numbers and returns an array of squares of the even numbers using filter and map.

function squre(arr) {
     return arr.filter((value)=>value%2==0).map((value)=> value*value)
}
 
// console.log(squre(array));

// Q7:Write a function that calculates the sum of an array of numbers using the reduce method

function sum(arr) {
    return arr.reduce((a,b)=>a+b)
    
}
// console.log(sum(array));

// Q8:Write a function that accepts two arguments: a base and an exponent, and returns the result of raising the base to the power of the exponent. (Hint: You can use the Math.pow() function, but try writing it manually using a loop).

function pow(base, exponent) {
    let result=1
    for (let i = 0; i <exponent; i++) {
       result*=base
        
    }
    return result
}

// console.log(pow(4,3));

// Q9:Write a function that reverses a given string.

// function reverse(str) {
//     return str.split('').reverse().join(" ")
// }

// console.log(reverse("labhesh"));

// function reverse1(str) {
//     return str1=[...str].reverse().join(' ')
// }
//  console.log(reverse1("labhesh"));

// function reverse(str) {
//     let revstr="";
//     for (let i = str.length-1; i >=0 ; i--) {
//        revstr+=str[i]
        
//     }
//     return revstr
// }
 
// console.log(reverse("labhesh"));

function reverse(str) {
    let arr=[]
   for (const char of str) {
      arr.push(char)
   }
   let revstr=""
   while (arr.length>0) {
    revstr+=arr.pop()
   }
   return revstr
}

// console.log(reverse("labhesh"));

// Q10:Write a recursive function that computes the factorial of a given number n (i.e., n! = n * (n-1) * ... * 1).

function Fibonacci(num) {
    if (num==0||num==1) {
        return 1
    }
    return num *Fibonacci(num-1)
}
//  console.log(Fibonacci(5));
 

// Q11:Write a program that takes two numbers as input from the user and prints their sum, difference, product, and quotient.

// function Input(num1,num2) {
//    return num1+num2
   
// }
// function Input(num1,num2) {
//    return num1-num2
   
// }
// function Input(num1,num2) {
//    return num1*num2
   
// }
// function Input(num1,num2) {
// let total

//   total= num1/num2
  
//   return total.toFixed()
// }

// console.log(Input(12,10));

// Q12:Write a program that takes a number as input and determines whether it is odd or even.


// function Input1(num) {
//     if (num%2==0) {
//        return `${num}: is even `;
        
//     }else{
//        return `${num}: is odd `; 
//     }
// }
//  console.log(Input1(12));
 
// Q13:Write a program that takes three numbers as input and prints the largest one.

function Input2(num1,num2,num3) {
let largest;
     if (isNaN(num1)||isNaN(num2)||isNaN(num3)) {
        return "please enter valid number"

     }
    //    return Math.max(num1,num2,num3)
     if (num1>=num2 && num1>=num3) {
        largest=num1
     }else if(num2>=num1 && num2>=num3){
         largest=num2
     }else {
        largest=num3
     }
return largest
}

// console.log(Input2(1,10,30));

// Q13:Write a program that prints all numbers from 1 to 10 using a loop.

// for (let i = 1; i <= 10; i++) {
//  console.log(i);
// }

let i=1
// while (i<=10) {
//     console.log(i);
//     i++
// }

// do {
//     console.log(i);
//     i++
// } while (i<=10);

// Q14:Write a program that prints the multiplication table of a number input by the user.

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
       console.log(i*num);
       
        
    }
}

// multiplicationTable(17)

// Q15:Write a program that calculates the factorial of a number entered by the user.

function factorial1(num) {
    let result=1;
    for (let i = 1; i <= num; i++) {
       result*=i
    }
    
    return result
}

// console.log(factorial1(10));


// Q16:Write a program that takes a string as input and checks if it's a palindrome (a word that reads the same forward and backward).


function palindrome(str) {
   let word= str.toLowerCase().replace(/[^a-z0-9]/g, '')
   let reverword= word.split('').reverse().join('')
console.log(word);
console.log(reverword);

   if (word===reverword) {
    return `${str} is palindrone`
   }else{
       return `${str} is  not palindrone`
   }
}


// console.log(palindrome("pop"));


// Q17:Write a program that generates the first N numbers of the Fibonacci sequence, where N is entered by the user.

function Fibonacci(num) {
    let arr=[0,1]

    for (let i = 2; i <num; i++) {
       arr.push(arr[i-1]+arr[i-2])
        
    }
    return arr
}
//  console.log(Fibonacci(11));


// Q18:Write a program that functions as a basic calculator. The user should input two numbers and an operator (+, -, *, /), and the program should perform the corresponding operation.

function sum(num1,num2) {
    return num1+num2
}
function subtraction(num1,num2) {
    return num1-num2
}
function multiplication(num1,num2) {
    return num1*num2
}
function divide(num1,num2) {
    return num1/num2
}
 
// console.log(sum(8,4));
// console.log(subtraction(8,4));
// console.log(multiplication(8,4));
// console.log(divide(8,4));


