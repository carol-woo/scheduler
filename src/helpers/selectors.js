import React from "react"
import InterviewerList from "components/InterviewerList";
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

export function getInterview(state, appointment){
 console.log(appointment.interview)
}
