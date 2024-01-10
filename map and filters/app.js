// array mapping and filters
// foreach loop

// let users = ['yash', 'nayan', 'kunal', 'mayank', 'ridhi']

// console.log(users)


// for(let i=0; i< users.length; i++ ){
//     console.log(users[i])
// }


// foreach
// users.forEach(function (abc){
//         console.log(abc)
// })

// let num = [1,2,3,4,5,6]

// num.forEach((n)=>{
//     console.log(n*n)
// })

// ()=>{

// }


let arr = [1,2,3,4,5,6];

// store the sqrs in a new array
// let demo = arr.forEach((n)=>{
//     return n*n;
// })

// console.log(demo)

// let sqrs = arr.map((n)=>{
//     return n*n
// })

// console.log(sqrs)


const users = [
    {
      firstName: "Aarav",
      lastName: "Sharma",
      age: 28,
      salary: 50000,
      gender: "Male",
      email: "aarav.sharma@example.com",
    },
    {
      firstName: "Aanya",
      lastName: "Patel",
      age: 32,
      salary: 60000,
      gender: "Female",
      email: "aanya.patel@example.com",
    },
    {
      firstName: "Arjun",
      lastName: "Singh",
      age: 25,
      salary: 45000,
      gender: "Male",
      email: "arjun.singh@example.com",
    },
    {
      firstName: "Dia",
      lastName: "Verma",
      age: 29,
      salary: 55000,
      gender: "Female",
      email: "dia.verma@example.com",
    },
    {
      firstName: "Rohan",
      lastName: "Gupta",
      age: 27,
      salary: 48000,
      gender: "Male",
      email: "rohan.gupta@example.com",
    },
    {
      firstName: "Ishita",
      lastName: "Joshi",
      age: 31,
      salary: 62000,
      gender: "Female",
      email: "ishita.joshi@example.com",
    },
    {
      firstName: "Aniket",
      lastName: "Kumar",
      age: 30,
      salary: 58000,
      gender: "Male",
      email: "aniket.kumar@example.com",
    },
    {
      firstName: "Pooja",
      lastName: "Malhotra",
      age: 26,
      salary: 52000,
      gender: "Female",
      email: "pooja.malhotra@example.com",
    },
    {
      firstName: "Vivek",
      lastName: "Rajput",
      age: 33,
      salary: 65000,
      gender: "Male",
      email: "vivek.rajput@example.com",
    },
    {
      firstName: "Kavya",
      lastName: "Shah",
      age: 28,
      salary: 53000,
      gender: "Female",
      email: "kavya.shah@example.com",
    },
  ];
  
//   console.log(users);
  


// let firstNames = users.map((user)=>{
//     return user.firstName
// })


// let names = users.map((user)=>{
//     return user.firstName + " " + user.lastName; 
// })

// console.log(names);




// map => putting all the values of array inside the function and storing the results
// inside the array we user the map



// calculat the 10% tax for each user and store its name and tax
let tax = users.map((user)=>{
    if (user.salary < 55000){
        return{
            name: user.firstName,
            salary: user.salary,
            tax: user.salary * .1,
        }
    }
    else{
        return{
            name: user.firstName,
            salary: user.salary,
            tax: user.salary * .2,
        }
    }  
})

// console.log(tax)




// filter ??
// let males = users.filter((user)=>{
//     return user.gender == 'Male'
// })
// let malesFirstName = males.map((user)=>{
//     return user.firstName
// })


// let males = users.filter((user)=>{
//         return user.gender == 'Male'
//     }).map((user)=>{
//         return user.firstName;
//     })


// console.log(males)


// map and filters
let num = [1,2,4,5,6,7]
let sqr = num.map((n)=>{
    return n*n;
}).filter((n)=>{
    return n>10;
})

// let numFilter = num.filter((n)=>{
//     return n>4
// }).map((n)=>{
//     return n*n;
// })

console.log(sqr)



// foreach => value can not be stored in an array
// chaining is not possible
// if you only want to iterate every array value use forEach


// map => store the result in a new array
// we can do chaining with  filters
// if you wish to filter the value or store the result in an array 



// upcoming projects => 




// reduces
// event listeners
// local storage