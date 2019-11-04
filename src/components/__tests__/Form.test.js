import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Form from "components/Appointment/Form";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";
import { get } from "http";

afterEach(cleanup);

describe("Form", () => {
  const interviewers = [
    {
      id: 1,
      name: "Sylvia Palmer",
      avatar: "https://i.imgur.com/LpaY82x.png"
    }
  ];

  it('renders', () => {
    expect(render(<Form interviewers={interviewers} value="Lydia Miller-Jones" />))
  })

  it('renders placeholder', () => {
    const { getByPlaceholderText } = render(<Form interviewers={interviewers} value="Lydia Miller-Jones" />)
    expect(getByPlaceholderText("Enter Student Name"))
  })

  it("renders student name", () => {
    const { getByTestId } = render(
      <Form interviewers={interviewers} name="Lydia Miller-Jones" />
    );
    expect(getByTestId("student-name-input"))
  })

  it("validates that the name isn't blank", () => {
    const onSave = jest.fn()
    const {getByText} = render(
      <Form interviewers={interviewers} onSave={onSave} />
    )
    fireEvent.click(getByText("Save"))
    expect(getByText(/student name cannot be blank/i)).toBeInTheDocument()
    expect(onSave().not.toHaveBeenCalled())
  })

  it("Calls onSave function when name is defined", () => {
    const onSave = jest.fn()
    const { getByText, queryByText } = render(
      <Form interviewers={interviewers} onSave={onSave} name="Lydia Miller-Jones" />
    )
    fireEvent.click(getByText("Save"));
    expect(queryByText(/student name cannot be blank/i)).toBeNull();
    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith("Lydia Miller-Jones", null);

  })

});