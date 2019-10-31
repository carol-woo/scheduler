import React from "react"
import "./styles.scss"
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import useVisualMode from "hooks/useVisualMode"



export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // if(!props.interview) {
  // return (
  //   <article className="appointment">
  //     <div id={props.id}>
  //     {props.time}
  //     </div>
  //     <div>
  //     <Empty />
  //     </div>
  //   </article>
  // )
  // } 
  // return (
  //     <article className="appointment">
  //     <div id={props.id}>
  //     {props.time}
  //     </div>
  //     <div>
  //     <Show student={props.interview.student}
  //     interviewer={props.interview.interviewer.name}/>
  //     </div>
  //   </article>
  //   )

  

  // return(
  // <article className="appointment">
  //       <Header time={props.time} />
  //     <div id={props.id}>
  //     {props.time}
  //     </div>
  //     <div>
  //     {mode === EMPTY && <Empty onAdd={props.onAdd} />}
  //     {mode === SHOW && (
  //       <Show
  //      student={props.interview.student}
  //       interviewer={props.interview.interviewer}
  //       />  
  //   )}
  //   </div>
  //   </article>
  // )
  
 console.log(mode)
  return (
    <article className="appointment">
      <Header time={props.time} />
      <div id={props.id}>
      </div>
    <div>
      {mode === EMPTY && <Empty onAdd={props.onAdd} />}
      {mode === SHOW && <Show student={props.interview.student}
      interviewer={props.interview.interviewer.name}/>}
    </div>
    
    </article>
  )
}