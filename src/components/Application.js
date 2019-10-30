import React, { useState, useEffect } from "react";
import axios from "axios"
import "components/Application.scss";
import DayList from "components/DayList"
import Appointment from "components/Appointment"
import { getAppointmentsForDay } from "helpers/selectors"

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

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

useEffect(() => {
  let daysURL = "http://localhost:8001/api/days"
  let appointmentsURL = "http://localhost:8001/api/appointments"
  let interviewersURL = "http://localhost:8001/api/interviewers"
  
  const promise1 = axios.get(daysURL);
  const promise2 = axios.get(appointmentsURL);
  const promise3 = axios.get(interviewersURL);
  
  Promise.all([promise1, promise2, promise3])
  .then((all) => {
    setState(prev => ({ days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
  });
},[])



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
  <DayList days={state.days} day={state.day} setDay={(string) => setState({...state, day:string})} />
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
