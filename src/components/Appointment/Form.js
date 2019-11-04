import React, { useState } from "react"
import InterviewerList from "components/InterviewerList"
import Button from "components/Button"

export default function Form (props) {
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [name, setName] = useState(props.name || "");

  console.log(interviewer)
  function reset() {
    setName("");
    setInterviewer(null)

  }

  const cancel = () => {
    reset(props.onCancel())
  }
  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off">
        <input

        className="appointment__create-input text--semi-bold"
         value={name}
         type="text"
         placeholder="Enter Student Name"
         onSubmit={event => event.preventDefault()}
         onChange={event => {
           setName(event.target.value);
         }}
         data-testid="student-name-input"
        />
      </form>
      <InterviewerList 
      interviewers={props.interviewers} 
      value={props.interviewers} 
      onChange={setInterviewer} 
      interviewer={interviewer}/>
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button onClick={cancel} danger>Cancel</Button>
        <Button onClick={() => props.onSave(name, interviewer)} confirm>Save</Button>
      </section>
    </section>
  </main>
  )
}