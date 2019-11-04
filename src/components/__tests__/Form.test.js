import React from "react";
import { render, cleanup } from "@testing-library/react";
import Form from "components/Appointment/Form";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

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

});