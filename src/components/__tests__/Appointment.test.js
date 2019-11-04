import React from "react"
import {render} from "@testing-library/react"
import Application from "components/Application"
import { isTSAnyKeyword } from "@babel/types"
import Appointment from "components/Appointment/index"


describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("renders without crashing", () => {
    render(<Application />);
  });
});