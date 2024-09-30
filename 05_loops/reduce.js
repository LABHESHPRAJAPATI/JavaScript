const arr=[100,200,300,400,500,600,700,800,900,1000]
// const arr1=arr.reduce((prevalue,value)=>prevalue+value,100)
// console.log(arr1);


const Newarr=arr.map((value)=>value*10)
              .map((value)=>value+1)
              .filter((value)=>value>5000)

console.log(Newarr);
