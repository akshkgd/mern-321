// array mapping and filters
// registration system



let users = []
function addUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let ifUserExist = users.filter((data)=>{
        return data.email == email.value;
    })
    console.log("filter result", ifUserExist)
    let user = {
        name: name.value,
        email: email.value
    }
    if(ifUserExist.length == 0){
        users.push(user)
    }
    else{
        console.log('email exist')
    }
    
    console.log(users)
}


// assignment => render the users in the main page using map and create elements
// assignment => choose 10 city as exam centers and randomly allot a exam city to a user who has registered for the exam