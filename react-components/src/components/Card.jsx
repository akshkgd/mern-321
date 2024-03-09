function Card(props){
    function orderFoodHandler(){
        let amount = 0;
        if(props.price>199){
            amount = props.price
        }
        else{
            amount = props.price + 40;
        }
        console.log('order successful for ', props.title)
        console.log('Total amount payable: ', amount)
    }
    return(
        <div className="card" onClick={orderFoodHandler}>
            <div className="card-header">
                <img src={props.img} className="card-img" alt="" />
                <div className={props.ratings >=4.5 ? "try" : "none"}>Must try</div>    
            </div>
            
            <div className="flex">
                <h3 className="title">{props.title}</h3>
                {/* <div className={props.type== 'nonveg'? "nonveg" : "veg"}></div> */}
            </div>
            
            <p className="price">Rs {props.price} for two</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
export default Card;