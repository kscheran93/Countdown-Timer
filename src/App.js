import React,{useState,useEffect} from 'react';
import './App.css';
import Display from './Display'

function App() {
  const endTime=new Date('July 11, 2021 00:00:00').getTime();
  const[currentTime,setCurrentTime]=useState(new Date().getTime());
  const gap = endTime-currentTime;

const seconds = 1000;
const minutes = seconds*60;
const hours = minutes * 60;
const days = hours *24;

const remaingingDays= Math.floor(gap/days);
const remainingHours = Math.floor((gap % days)/hours);
const remainingMinutes = Math.floor((gap % hours)/minutes);
const remainingSeconds = Math.floor((gap % minutes)/seconds);

useEffect(()=>{
  setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
  //if(gap===0){
    //<Redirect to={Home}/>
 // }
},[currentTime])

  return (
    <div className="App"> 
    <center>
      <Display days={remaingingDays} hours={remainingHours} minutes={remainingMinutes} seconds={remainingSeconds}/>
      </center>
    </div>
  );
}

export default App;
