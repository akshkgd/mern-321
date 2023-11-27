// event listners => 

function cardMouseIn(){
    console.log('mouse is in the card')
}

function cardMouseOut(){
    console.log('mouse is not there in the card')
}

function cardClicked(){
    console.log('card is clicked!')
}


function test(){
    let name = document.getElementById('name');
    let data = name.value;

    let count = data.length;
    console.log(count);
    if(count<=3){
        name.classList.add('input-danger')
        name.classList.remove('input-success');
        document.getElementById('data').innerText = 'Enter atlest 4 char'

    }
    else{
        name.classList.add('input-success')
        name.classList.remove('input-danger');
        document.getElementById('data').innerText = 'Good to Go!'

    }
}



// addEventListner()