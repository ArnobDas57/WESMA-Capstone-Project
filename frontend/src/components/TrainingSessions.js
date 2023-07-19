import React, { useState } from 'react'
import './Page.styles.css'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './TrainingSessions.styles.css'

const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022, 12, 5),
    end: new Date(2022, 12, 7),
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

export default function TrainingSessions() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date (allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);

      if (((d1  <= d2) && (d2 <= d3)) || ((d1 <= d4) && (d4 <= d3))) {   
        alert("CLASH"); 
        break;
      }
    }
  
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className='training-sessions'>
      <h1>Training Sessions</h1>
      <div className='event-add'>
        <h2>Add New Training Session</h2>
        <input className='add-title' type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker className='start' placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker className='end' placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button className='add-event' onClick={handleAddEvent}>
          Add Session
        </button>
      </div>
        <Calendar className='calendar' localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"/>
    </div>
  )
}
