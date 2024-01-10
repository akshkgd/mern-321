// var let and const
// hoisting
// reference and primitive data types
// == ===
// why arrays are objects in js



// callbacks
// clousers
// higher order functions



// var let and const

// console.log(name)
// var name = 'yash';
// var name =  'yash goel'

// console.log(userName)
// let userName = 'arpit'
// let userName = 'arpit khare'

// var is function scoped
function demo(){
    var n = 5;
    console.log(n)
    if(true){
        console.log('accessing var inside the if scope', n)
    }
}
// let is block scoped
function letDemo(){
    
    
    if(true){
       var n = 5;
        console.log(n)
    }
    console.log(n)
}

// console.log(n)


// letDemo()

// const => constant
// const taxDeduction = 10;
// taxDeduction = 20
// console.log(taxDeduction)



// const arr = [1,2,3]
// console.log(arr)
// arr.push(5)
// console.log(arr)


// const user = {
//     name : 'yash',
//     age: 24
// }
// console.log(user)
// user.gender = 'male'
// console.log(user)
// hoisting => calling the variable before init is hoisitng




// primitive and reference data types
// reference = [] {}


// primitive
// let x = 10;
// let y = x
// y = 20;
// console.log(x, y)


// let n = [1,2,4]
// let a = n;
// a.pop()
// console.log(n)



// == ===
// comparison and strict comparison

// let n = '10'
// console.log(typeof n)


// if(n === 10){
//     console.log('the number is 10')
// }


// how to empty an array with declaring the blank array
// let arr = [1,2,4,5]
// arr.length = 0
// console.log(arr)

