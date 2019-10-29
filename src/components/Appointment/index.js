import React from "react"
import "./styles.scss"
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"

export default function Appointment(props) {
  // if(props.interview === true) {
  return (
    <article className="appointment">
      <div id={props.id}>
      {props.time}
      </div>
      <div>
      <Show />
      </div>
      
    </article>
  )
  // }
}