// difference innerHTML / innerText
// create elements
// append child
// add classes / remove the classes
// conditions
// loops


// function test(){
//     let input = document.getElementById('inputDemo').value;
//     console.log(input);
//     let demo = document.getElementById('demo');
//     demo.innerHTML = input;
// }







// function createDemo(){
//     let heading = document.createElement('h1');
//     heading.innerText = 'This is a created element';
//     heading.classList.add('title')
//     let demo = document.getElementById('demo');
//     demo.appendChild(heading);
// }



let users = [];
let userContainer = document.getElementById('userContainer');
let alertDiv = document.getElementById('alert')
function render(){
    userContainer.innerHTML = "";
    for(let i=0; i<users.length; i++){
        let div = document.createElement('div');
        let name = document.createElement('div');
        let age = document.createElement('div');

        div.classList.add('user')
        name.innerText = users[i].name;
        age.innerText = users[i].age;

        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age)

    }
    
}
function showAlert(){
        alertDiv.classList.remove('d-none');
        alertDiv.classList.add('alert');


        setTimeout(()=>{
            alertDiv.classList.remove('alert');
            alertDiv.classList.add('d-none');
        }, 3000)

        // setTimeout the code is executed after the mentiond time
        // 3000 => 3s
}


function register(){
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');

    let user = {
        name: nameInput.value,
        age: Number(ageInput.value),
    }
    // user should only be added if the age is between 16-18 years
    if(user.age>=16 && user.age<=18){
        users.push(user);
        alertDiv.innerText = 'User added successfully!'
        showAlert()
        render();
    }
    else{
        alertDiv.innerText = 'User is not eligible to participate!';
        showAlert();
    }
    
    console.log(users)
}