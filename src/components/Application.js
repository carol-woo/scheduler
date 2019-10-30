import React, { useState, useEffect } from "react";
import axios from "axios"
import "components/Application.scss";
import DayList from "components/DayList"
import Appointment from "components/Appointment"


const days = [];

const appointments = {
  1: {
  id: 1,
  time: "12pm",
  interview: null
  },
  2: {
  id: 2,
  time: "1pm",
  interview: null
  },
  3: {
  id: 3,
  time: "2pm",
  interview: {
  student: "Archie Cohen",
  interviewer: 3
  }
  },
  4: {
  id: 4,
  time: "3pm",
  interview: {
  student: "Chad Takahashi",
  interviewer: 10
  }
  },
  5: {
  id: 5,
  time: "4pm",
  interview: {
  student: "Jamal Jordan",
  interviewer: 10
  }
  },
}

export default function Application(props) {
  
const [day, setDay] = useState([])

useEffect(() => {
axios
.get('http://localhost:8001/api/days')
.then(body => body.data.map(obj => ({
  id: obj.id,
  name:obj.name,
  appointments: obj.appointments, //How to get something out of "-"
  interviews: obj.interviews, // ^ same as above
  spots: obj.spots
})))
.then(day => setDay(day))
},[day])


const appointmentsComponents = Object.keys(appointments).map(i => {
  let appointment = appointments[i];
  return (
    <Appointment key={appointment.id} id={appointment.id} time={appointment.time} interview={appointment.interview} />
    )
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
  <DayList days={setDay} day={day} setDay={setDay} />
  </nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
     {appointmentsComponents}
      </section>
    </main>
  );
}
