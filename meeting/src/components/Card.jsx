function Card(props){
    return(
        <>
            <div className="w-[300px] text-left  shrink-0 border border-neutral-200 rounded-xl  p-3">
                <h3 className="text-xl weight-bolder">{props.title}</h3>
                
                <p>{props.date}</p>
        
            </div>
        </>
    )
}

export default Card;