import React from "react"
import "./styles.scss"
import Header from "components/Appointment/Header"
import Show from "components/Appointment/Show"
import Empty from "components/Appointment/Empty"
import Form from "components/Appointment/Form"
import useVisualMode from "hooks/useVisualMode"
import {getInterviewersByDay} from "helpers/selectors"
import { get } from "http"
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"
import Error from "components/Appointment/Error"

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const DELETING = "DELETING"
  const EDIT = "EDIT"
  const ERRORSAVE = "ERRORSAVE"
  const ERRORDELETE = "ERRORDELETE"

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
    
  );

  function onAdd() {
    transition(CREATE)
  }

  function onCancel(){
    back()
  }

  function save(name, interviewer, cb) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(props.id, interview).then( () => transition(SHOW))
    .catch(error => transition(ERRORSAVE));

  }

  function onSave(name, interviewer){
    save(name, interviewer);
  }

  function cancelInterview() {
    transition(DELETING)
    props.deleteInterview(props.id).then( () => transition(EMPTY)
    ) 
    .catch(error => transition(ERRORDELETE));

  }


  console.log(props.interview)
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      <div id={props.id}>
      </div>
    <div>
      {mode === EMPTY && <Empty onAdd={onAdd} /> }
      {mode === CREATE && <Form interviewers={getInterviewersByDay(props.state, props.day)} onCancel={onCancel} 
        onSave={onSave} />}
      {mode === SHOW && <Show student={props.interview && props.interview.student} onCancel={() => transition(CONFIRM)}
      interviewer={props.interview && props.interview.interviewer && props.interview.interviewer.name} onEdit={() => transition(EDIT)}/>}
      {mode === SAVING && <Status deleting={"Saving"}/>}
      {mode === DELETING && <Status deleting={DELETING}/>}
      {mode === CONFIRM && <Confirm onCancel={() => transition(SHOW)} onDelete={cancelInterview}/>}
      {mode === EDIT && <Form interviewer={props.interview.interviewer.id} name={props.interview.student} interviewers={getInterviewersByDay(props.state, props.day)} onCancel={onCancel} 
        onSave={onSave} />}
      {mode === ERRORSAVE && <Error onClose={() => transition(EMPTY)} />}
      {mode === ERRORDELETE && <Error onClose={() => transition(SHOW)} />}

        
    </div>
    
    </article>
  )
}
//THIS IS FOR THE PROPS FOR INTERVIEWER CURRENTLY BEING REPLACED BY AN EMPTY ARRAY
// interviewer={props.interview.interviewer.name}/>}
