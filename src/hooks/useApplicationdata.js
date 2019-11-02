import React, { useState, useEffect } from "react";
import axios from "axios"
import {getAppointmentsForDay, } from "helpers/selectors"


export default function useApplicationData() {

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});


function bookInterview(id, interview) {
  return axios.put("http://localhost:8001/api/appointments/"+id, {interview}).then( data => {
    setState((prev) => {
      return (
      {...prev, 
        appointments:{...prev.appointments, [id]: {
      ...prev.appointments[id], interview:interview}}}
    )})
  })
}

function deleteInterview(id){
  return axios.delete("http://localhost:8001/api/appointments/"+id).then( data => {
    setState((prev) => {
      return (
      {...prev, 
        appointments:{...prev.appointments, [id]: {
      ...prev.appointments[id], interview:null}}}
    )})
  })
}


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

return {
 state,
 setState,
 bookInterview,
 deleteInterview,
}
}
