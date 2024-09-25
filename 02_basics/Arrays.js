const arr=["labhesh","rakesh","paras","prakash","bhavin"]
const arr1=[1,2,3,4,5]
const points = [40, 100, 1, 5, 25, 10];

// console.log(arr.shift());
// console.log(arr.unshift('yogesh'));
// console.log(arr.concat(arr1,arr1));
// console.log(arr.copyWithin(2,0));
// console.log(arr1.flat(Infinity));
// console.log(arr1.flatMap((value)=>(value*2)));
//  const arr2=arr.splice(3,0,"sohan")
// console.log(arr);
// console.log(arr.slice(2,4));
// console.log(arr.indexOf("prakash"));
// console.log(arr.lastIndexOf("rakesh")+1);
// console.log(arr.includes("labhesh"));
// console.log(arr1.find(display));
//  function display(x){
//  return x > 3
//  }
//  console.log(arr1.findIndex(display));
//  function display(x){
//  return x > 3
//  }

// console.log(arr1.findLast(x=>x>3));
// console.log(arr1.findLastIndex(x=>x>3));
// console.log(arr.sort());
// console.log(arr1.sort());
// console.log(arr.reverse());
// console.log(arr1.reverse());
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort((x,y)=>(x-y)));
// console.log(points.sort(()=>(0.5-Math.random())));

// for (let i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     let k = points[i];
//     points[i] = points[j];
//     console.log(points[j] = k);
//   }
//  console.log(points.sort((a,b)=>(a-b)));
//  console.log(points[0]);
//  console.log(points[points.length-1]);
 
// function arr_Min(arr){
//     // return Math.min(...points)
//     return Math.min.apply(null,points)
// }
// function arr_Max(arr){
//     // return Math.max.apply(null,arr)
//     return Math.max(...points)
// }
 
// console.log(arr_Max(points));
// console.log(arr_Min(points));

// function arr_Min1(arr){
//   let length=arr.length
//   let min=Infinity
//   while (length--) {
//     if (arr[length]<min) {
//         min=arr[length]
//     }
    
//   }
//   return min
// }


// function arr_Max1(arr){
//     let length=arr.length
//     let max=-Infinity
//     while (length--) {
//       if (arr[length]>max) {
//           max=arr[length]
//       }
      
//     }
//     return max
//   }
// console.log( arr_Min1(points));
// console.log( arr_Max1(points));

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

// cars.sort((a,b)=>(a.year-b.year))
//  console.log(`type:${cars[0].type}  year:${cars[0].year}`);
//  console.log(`type:${cars[1].type}  year:${cars[1].year}`);
//  console.log(`type:${cars[2].type}  year:${cars[2].year}`);



//   ****loops for arrays ******


// arr.forEach((value,index,arr)=>console.log(`${value}  ${index}.  ${arr}`))
// newArr=points.map((X)=>(  X=X*2))
// console.log(newArr);
// arr2=points.flatMap((a)=>(a*2))

// console.log(arr2);

// const arr3=points.filter((a)=>(a>18))
// console.log(arr3);

// const arr4=points.reduce((x,a)=>(x+=a))
// console.log(arr4);

// const arr4=points.reduceRight((x,a)=>(x+=a))
// console.log(arr4);


// const arr4=points.every((x)=>(x<=100))
// console.log(arr4);

// const arr4=points.some((x)=>(x==10))
// console.log(arr4);

// console.log(Array.from("labhesh"));
// const me=Array.from("labhesh")
// console.log(me[4]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let x=fruits.keys()
// for (const element of x) {
//     console.log(element);
    
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let x=fruits.entries()
// for (const element of x) {
//     console.log(element);
    
// }

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const month=[...q1,...q2,...q3,...q4]

// console.log(month);

















