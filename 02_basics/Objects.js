
const sym=Symbol("key")

const obj={
    name:"labhesh",
    age:21,
    city:"surat",
    isloggedIn:true,
    [sym]:"mysm"
}

const obj1=new Object()

obj1.firstName="rakesh"
obj1.age=22
obj1.city="Ahmdabad"
obj1.isloggedIn=false

function person(name,age,city,isloggedIn){
    this.name=name;
    this.age=age
    this.city=city
    this.isloggedIn=true
}

let paras=new person("paras",23,"ahmdabad",false)
let akash=new person("akash",23,"aburoad",true)
paras.lastName='kumar'
person.prototype.lastName="kumar"
//  console.log(paras);
//  console.log(akash.lastName);

 

class person1{
    constructor(name,age,city,isloggedIn){
 this.name=name
 this.age=age
 this.city=city
 this.isloggedIn=isloggedIn
    }
}

let yogesh=new person1("yogesh",23,"goa",false)

// console.log(obj);
// console.log(obj1);
// console.log(paras);
// console.log(yogesh);
// console.log(obj.name);
// console.log(obj["age"]);
// obj.age=22
// obj.surName="prajapati"
// delete obj.isloggedIn
// console.log("isloggedIn" in obj);
// console.log(obj.hasOwnProperty("age"));
// for (const i in obj) {
//     console.log(i,obj[i]);
    
// }

// console.log(Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(Object.values(obj));


// obj.display= function(){
//     console.log(`my name is ${this.name}`);
    
// }

// console.log(obj.display());


// const obj2=Object.assign({},obj)
// const obj2={...obj,...obj1}
// console.log(obj2);

// const deepCopy=JSON.parse(JSON.stringify(obj))
// deepCopy.name="sohan"
// console.log(deepCopy);
// console.log(obj);

// console.log(Object.getPrototypeOf(obj));

// let animal = {
//     type: "Animal",
//     sound: function() {
//       console.log("Some generic sound");
//     }
//   };
  
//   const cat=Object.create(animal)
// cat.sound()

