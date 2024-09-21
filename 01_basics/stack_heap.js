// stack memory for  primitive datatypes 


let person ="rakesh"
let unknowPerson= person

console.log(unknowPerson);

// heap  memory for  primitive datatypes 

const user={
    name :"labhesh",
    age:21

}

const userTwo=user

userTwo.name="paras"

console.log(userTwo.name);
console.log(user.name);

const number=[1,2,3,4,5]
const numberTwo=number

numberTwo.push(12)
number.pop()
numberTwo.reverse()

console.log(number);
console.log(numberTwo);

let one=new Number(200)
let two=new Number(200)

console.log(one==two);
console.log(one===two);
