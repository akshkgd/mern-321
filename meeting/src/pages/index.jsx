import { useState, useEffect} from "react";
import Card from '../components/Card'
function Index(){
    let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'}
    let [meetings, setMeetings] = useState([]);
    useEffect(()=>{
        fetch('https://mern-321-default-rtdb.firebaseio.com/meetings.json')
    .then(data=> data.json()).then((data)=>{
        let tempMeetings = [];
        console.log(data)
        for(let key in data){
            let meeting = {
                id: key,
                ...data[key]
            }
            tempMeetings.push(meeting)
        }
        setMeetings(tempMeetings)
    })
    }, [])
    
    
    return(
        <>
            <section>
                    <h1 className="text-4xl font-black">This is the home page</h1>
                 <div className="flex gap-5 mt-10" >
                    {
                        meetings.map((meeting)=>{
                            let date = new Date(meeting.date);
                            let fdate = date.toLocaleDateString('en', options)
                        return  <Card title={meeting.title} date={fdate} />
                        })
                    }
                </div>  
                
            </section>
        </>
    )
}
export default Index;