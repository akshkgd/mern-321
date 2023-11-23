// arrays and objects
// conditionals functions 

// let and const
let students = ['ashish', 'yash', 'kunal', 'nayan'];
// students.push('mayank')  //push always add the value at the end
// students.pop()


// splice => (index, deleteCount(how many values to delete), AddItems(add new vlaues(as many we want))=> optionl)


// console.log(students)
// students.splice(1, 1, 'pankaj')

// console.log(students);



let user ={
    name: 'arpit',
    email: 'arpit@gmail.com',
    address: {
        address: '3210 city lane, Gaughat',
        city: 'allahabad',
        pinCode: 211003
    },
    hobbies: ['coding', 'cooking', 'watching movies']
}
// let user =  ['arpit', 'arpit@gmail.com', 'allahabad']

// user.name = 'arpit khare';
// user.age = 24;
// delete user.email;
// console.log(user.address)


// conditionals
// anything that is true/false or that gets converted to true or false can be written inside the condition
let age = 23

// age is between 18 to 24
// if(age >= 18 &&  age<= 24){
//     console.log('eligible to play!')
// }
// else{
//     console.log('not eligible to play!')
// }


// roles => user(0), teacher(1), admin(2)
// document which can be accessed by either teacher or admin

let role = 'student';
// == comparing the values
// && will only work when both the conditions are correct
// || =>or  => if one condition is correct it will convert to true

// if(role == 'teacher' || role == 'admin'){
//     console.log('you can access!')
// }
// else {
//     console.log('you can not access!') ;
// }






// prompt
// html page DOM

// truthy (true)
// falsy (false) => 0 , -0, NaN, null, undefined, '', "";

// if(''){
//     console.log('running...')
// }
// else{
//     console.log('last hope!!')
// }



// else if
let day  = 'tue'

if(day == 'mon' || day == 'wed' || day== 'fri'){
    console.log('You have a live class today')
}
else if(day == 'tue' || day == 'thu' || day== 'sat' || day == 'sun'){
    console.log('You do not have a class today')

}
else{
    console.log('Invalid day!')
}


