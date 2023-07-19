import React from 'react';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.styles.css';
import { EnrollmentView } from './EnrollmentView';

var events;
var trainingSessions;


export default function StudentSessions() {

  events =[{
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 11, 1),
    end: new Date(2022, 11, 1),
    id : 0
  },
  {
    title: "Vacation",
    start: new Date(2023, 1, 5),
    end: new Date(2023, 1, 5),
  },
  {
    title: "Conference",
    start: new Date(2023, 1, 5),
    end: new Date(2023, 1, 5),
  },

  ];

  trainingSessions = [
    
    {
      start: new Date(2022,11,15),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,14),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,13),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,10),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 4
    },
    {
      start: new Date(2022,11,19),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 3
    },
    {
      start: new Date(2022,11,15),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,14),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,13),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,10),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 4
    },
    {
      start: new Date(2022,11,19),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 3
    },
    {
      start: new Date(2022,11,15),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,14),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,13),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,10),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 4
    },
    {
      start: new Date(2022,11,19),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 3
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 1
    },
    {
      start: new Date(2022,11,11),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 2
    },
    {
      start: new Date(2022,11,10),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 4
    },
    {
      start: new Date(2022,11,19),
      location: "CMLP 54",
      capacity: 21,
      instructorID: 3,
      levelID: 3
    }

  ];

  var user = {
    studentID: 1
  }
  
  var trainingLevels = {
    levelID : 0,
    levelName : "LEVEL 1",
    levelDescription : "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  }
  
  const [enrollButton, setEnrollView] = useState(false);
  const [eventsOnDay, setEventsOnDay] = useState('');
  const [date, setDate] = useState(new Date());
  return (
    <div id='student-sessions'>
      <h1>Training Sessions Available</h1>
      <Calendar tileContent = {(date)=>  <TileContent events = {trainingSessions} date = {date} />} onClickDay = {(value)=>renderEnrollView(value, trainingSessions)} />
      <EnrollmentView trigger = {enrollButton} setTrigger = {setEnrollView} events = {eventsOnDay} date = {date}/>
    </div>
  )
  function renderEnrollView(date, trainingSessions){
    
    console.log(date);
    setEventsOnDay(eventsOnDate({date: date},trainingSessions));
    setDate(date);
    setEnrollView(true);
   }
   function eventsOnDate(date, events){
    var eventsForTheDay;
      eventsForTheDay = events.filter((e)=>{return date.date.getTime() === e.start.getTime();});
      return (eventsForTheDay);
  }
  
  function TileContent(props){
  
    var events = eventsOnDate(props.date, props.events);
  
  
    var levels = [];
    events.forEach(element => {
      levels.push(element.levelID);
    });
    var levelsUnique = [...new Set(levels)];
    var SessionsAvailable = [];
    levelsUnique.forEach((u)=>{
      var count = 0;
      levels.forEach(e=>{
        if(e === u) count++;
      })
      SessionsAvailable.push( <p key = {props.date+u} style ={{fontSize : '15px'}}>Level {u} Sessions: {count} </p>);
    });
    return (<div className='tileContent'>{SessionsAvailable}</div>);
  }
}




