import { useState } from 'react';
import './App.css'
function App() {
  let [counter, setCounter] = useState(0);
  let [alertStatus, setAlertStatus] = useState(false)
  let [loaderStatus, setLoaderStatus] = useState(false)
  function incrementHandler(){

  }
  function alertHandler(){
    if(alertStatus == true){
      setAlertStatus(false)
    }
    else{
      setAlertStatus(true)
    }
}

function loaderHandler(){
  if(loaderStatus == true){
    setLoaderStatus(false)
  }
  else{
    setLoaderStatus(true)
  }
}


  return (
    <>
      <div className={alertStatus == true? "alert" : "d-none"}>
        <img src="https://source.unsplash.com/1600x1000/?workspace" className='alert-img' alt="" />
        <div className="padding">
          <h3>This is an alert</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugiat!</p>
        </div>
      </div>



      {/* <button onClick={alertHandler}>Toggal Modal</button> */}
      <button className="btn" onClick={loaderHandler}><span>Join next batch</span> <div className={loaderStatus? "loader" : "d-none"}></div> </button>


    </>
  )
}

export default App
