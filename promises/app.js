// promise

// setTimeout(()=>{
//     console.log('download complete')
// },2000)
// console.log('notification send')


// promise => 
// downloading an image
// const demoPromise = new Promise((resolve, reject)=>{
//     let status = false;
//     setTimeout(()=>{
//         if(status == true){
//             console.log('download completed')
//             resolve('promise resolve value')
//         }
//         else{
//             reject('download failed!')
//         }
//     }, 3000)
// })


// demoPromise.then((data)=>{
//     console.log(data)
//     console.log('notification send!')
// }).catch((error)=>{
//     console.log("rejected: ", error)
// })




// API's
// fetch()



fetchQuote=()=>{
    fetch('https://type.fit/api/quotes').then((data)=>{
        console.log('data fetched from the url')
        return data.json()
    })
    .then((data)=>{
        let random = Math.floor(Math.random()*data.length);
        document.getElementById('quote').innerText = data[random].text;
        document.getElementById('author').innerText = data[random].author
    })
}

fetchQuote()