const arr=[1,2,3,4,5,6,7,8,9]
// const Newarr=arr.forEach((value)=> {return value} )



// const Newarr=arr.map((value,index,a)=> `${value}.  :${index}. 
//   :${a}`)

// const Newarr=arr.map((value)=>value>5)
// console.log(Newarr);

const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      email: "alice@example.com",
      isActive: true,
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      email: "bob@example.com",
      isActive: false,
      skills: ["Python", "Django", "Machine Learning"]
    },
    {
      id: 3,
      name: "Charlie",
      age: 28,
      email: "charlie@example.com",
      isActive: true,
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 4,
      name: "David",
      age: 35,
      email: "david@example.com",
      isActive: false,
      skills: ["Java", "Spring", "Hibernate"]
    }
  ];

  const arr1=users.map((item)=>item.name+" kumar")
  console.log(arr1);
  