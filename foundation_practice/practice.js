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
 