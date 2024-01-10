// local storage??
// localStorage => access the local storage of the browser
// setItem => saving the value
// getItem => read the values


// localStorage.setItem('name', 'yash')

// console.log(localStorage.getItem('name'))
// let storageName = localStorage.getItem('name');
// localStorage.removeItem('name')
// console.log(storageName);
// localStorage.setItem('name', 'mayank')

// console.log(localStorage.getItem('name'))


// localStorage.setItem('shirtPrice', 399)
// console.log(localStorage.getItem('shirtPrice'))
let price = localStorage.getItem('shirtPrice');
document.getElementById('price').innerText = price;
function increasePrice(){
    setTimeout(()=>{
        localStorage.setItem('shirtPrice', 499);
        let price = localStorage.getItem('shirtPrice');
        document.getElementById('price').innerText = price;
    }, 4000)
}


// localStorage.setItem('theme', 'dark');
let body = document.querySelector('body');
let themeBtn = document.getElementById('theme')
let card = document.querySelector('.card')


function renderThemeIcon(){
   let theme =  localStorage.getItem('theme');
   if(theme == 'light'){
        document.getElementById('theme').innerHTML = '<i class="bi bi-sun"></i>';
        body.style.backgroundColor = 'white';
        themeBtn.style.color = 'black';
        card.style.color = 'black';
        card.style.borderColor = '#eee';
   }
   else{
        document.getElementById('theme').innerHTML = '<i class="bi bi-moon-stars"></i>'
        body.style.backgroundColor = '#242424';
        themeBtn.style.color = 'white'
        card.style.color = 'white';
        card.style.borderColor = '#333333';
   }
}
renderThemeIcon()

function updateTheme(){
    let theme =  localStorage.getItem('theme');
    if(theme == 'light'){
         localStorage.setItem('theme', 'dark');
         renderThemeIcon();

    }
    else{
        localStorage.setItem('theme', 'light');
        renderThemeIcon()
 
    }
}