import React from "react"
import InterviewerList from "components/InterviewerList";
import { statement } from "@babel/template";
// import Test from "helpers/selectors.test"

export function getAppointmentsForDay(state, day) {
  if (!state.days.length){
    return [];
  }
  
  let findDay = state.days.filter(Day => Day.name === day)
  
  if(!findDay.length) {
  return [];
  }
  
  let mapDay = findDay.map(obj => obj.appointments)[0]

  const appointments= mapDay.map(id => state.appointments[id])
  return appointments
}
//DID THIS ON THE APP
// export function getInterview(state, appointment){
//  console.log(appointment.interview)
// }

export function getInterviewersByDay(state, day) {
  if (!state.days.length){
    return [];
  }
  
  let findDay = state.days.filter(Day => Day.name === day)
  
  if(!findDay.length) {
    return [];
  }
  
  let mapDay = findDay.map(obj => obj.interviewers)[0]
  const interviewers= mapDay.map(id => state.interviewers[id])
  return interviewers
}
