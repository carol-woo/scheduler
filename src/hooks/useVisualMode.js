import React, {useState} from "react"
import Show from "components/Appointment/Show"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);

  return { mode,
    transition: (mode) => setMode(mode) };
  }


