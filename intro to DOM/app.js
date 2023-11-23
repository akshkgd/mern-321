function feedback(){
    let title = document.getElementById('title');
    let btn = document.getElementById('btn');


    // take input from user
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    console.log(nameInput.value, emailInput.value)
    let output = "Thanks for the feedback " + nameInput.value;
    title.innerText = output;
    btn.style.display = 'none';
    nameInput.style.display = 'none';
    emailInput.style.display = 'none';
}


// target classes
// add and remove class from an element
// validation??
// create elements in js


