/* eslint-disable react/jsx-key */
import { useState } from "react"
import ToggleButtons from "./ToggleButtons"
import { Bachelor1, Bachelor2, Bachelor3, Master1 } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

export default function Education() {
  const [year, setYear] = useState("Bachelor 1")
  const [educations, setEducation] = useState(Bachelor1)
  const handleYearChange = (newYear) => {
    setYear(newYear)
    if (newYear === "Bachelor 1") {
      setEducation(Bachelor1)
      console.log(Bachelor1)
    }
    if (newYear === "Bachelor 2") {
      setEducation(Bachelor2)
      console.log(Bachelor2)
    }
    if (newYear === "Bachelor 3") {
      setEducation(Bachelor3)
      console.log(Bachelor3)
    }
    if (newYear === "Master 1") {
      setEducation(Master1)
      console.log(Master1)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-bottom"
      >
        Education
      </h1>
      <ToggleButtons
        handleYearChange={handleYearChange}
        data-aos="fade-bottom"
      />
      <ul className="mt-8 w-6/12" data-aos="fade-left">
        {educations.map((education, index) => (
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCode} className="text-purple-500" />{" "}
            <li key={index}>{education}</li>
          </div>
        ))}
      </ul>
      {/* Display selected year */}
    </div>
  )
}
