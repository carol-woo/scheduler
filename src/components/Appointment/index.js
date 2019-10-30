import React from "react"
import "./styles.scss"
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"

export default function Appointment(props) {
  console.log(props.interview)
  if(!props.interview) {
  return (
    <article className="appointment">
      <div id={props.id}>
      {props.time}
      </div>
      <div>
      <Empty />
      </div>
    </article>
  )
  } 
  return (
      <article className="appointment">
      <div id={props.id}>
      {props.time}
      </div>
      <div>
      <Show student={props.interview.student}
      interviewer={props.interview.interviewer.name}/>
      </div>
    </article>
    )
  
}