import { useState, useEffect} from "react";
import {Link, Routes, Route} from 'react-router-dom'
import Card from '../components/Card'
function Index(){
    let options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'}
    let [meetings, setMeetings] = useState([]);
    let [filter, setFilter] = useState([]);
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

    function filterDevHandler(){
        setFilter('dev')
    }
    function filterOperationsHandler(){
        setFilter('operations')
    }
    function filterMarketingHandler(){
        setFilter('marketing')
    }


    let filterMeetings = meetings;
    if(filter == 'dev'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'dev')
    }
    else if(filter == 'operations'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'operations')

    }
    else if(filter == 'marketing'){
        filterMeetings = meetings.filter(meeting => meeting.type == 'marketing')

    }
    
    return(
        <>
        <header className="py-4">
            <nav className="w-[990px] flex justify-between mx-auto align-center mb-10">
                <a href="" className="font-extrabold text-2xl">Codekaro Meetings</a>
                <div className="flex gap-4">
                    <Link to={'/add'}>Add Meetigns</Link>
                    <Link to={'/my-meetings'}>My Meetings</Link>
                </div>
            </nav>
        </header>
        

            <section className="w-[990px] mx-auto text-left">
                    <div className="text-center">
                
                        <div className="flex justify-cente gap-4 mt-5">
                            <button onClick={filterDevHandler} className={filter == 'dev' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Developers</button>
                            <button onClick={filterOperationsHandler} className={filter == 'operations' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Operations</button>
                            <button onClick={filterMarketingHandler} className={filter == 'marketing' ? "border border-orange-200 bg-orange-50 px-5 py-2 rounded-xl" : "border border-neutral-200 bg-neutral-50 px-5 py-2 rounded-xl"}>Marketing</button>
                            
                            
                        </div>
                    </div>
                 <div className="flex gap-5 mt-10" >
                    {
                        filterMeetings.length > 0 ?
                        filterMeetings.map((meeting)=>{
                            let date = new Date(meeting.date);
                            let fdate = date.toLocaleDateString('en', options)
                        return  <Card title={meeting.title} date={fdate} />
                        })
                        :
                        <div className="text-center">
                            <h2>No meetings are avaialable</h2>
                        </div>
                    }
                </div>  
                
            </section>
        </>
    )
}
export default Index;