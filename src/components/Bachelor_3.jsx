/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Bachelor3 } from "../constants"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"
export default function Bachelor_3() {
  const [educations, setEducation] = useState(Bachelor3)
  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="mt-8 w-6/12" data-aos="fade-left">
        {educations.map((education, index) => (
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faCode} className="text-purple-500 mt-1" />{" "}
            <li className="list-none" key={index}>
              {education}
            </li>
          </div>
        ))}
      </ul>
      {/* Display selected year */}
    </div>
  )
}
