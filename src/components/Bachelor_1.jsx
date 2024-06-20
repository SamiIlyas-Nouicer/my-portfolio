/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { Bachelor1 } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
export default function Bachelor_1() {
  const [educations, setEducation] = useState(Bachelor1)
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="mt-8 w-6/12" data-aos="fade-left">
        {educations.map((education, index) => (
          <div className="flex  gap-3">
            <FontAwesomeIcon icon={faCode} className="text-purple-500 mt-1" />{" "}
            <li key={index}>{education}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}
