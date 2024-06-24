import { useState } from "react"
import ToggleButtons from "./ToggleButtons"
import Bachelor1 from "./Bachelor_1"
import Bachelor2 from "./Bachelor_2"
import Bachelor3 from "./Bachelor_3"
import Master1 from "./Master_1"
export default function Education() {
  const [year, setYear] = useState(1)

  const handleYearChange = (newYear) => {
    setYear(newYear)
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1
        className="text-4xl font-bold text-center mb-16"
        data-aos="fade-bottom"
      >
        Education
      </h1>
      <ToggleButtons handleYearChange={handleYearChange} />
      {year === 1 ? (
        <Bachelor1 />
      ) : year === 2 ? (
        <Bachelor2 />
      ) : year === 3 ? (
        <Bachelor3 />
      ) : year === 4 ? (
        <Master1 />
      ) : null}
    </div>
  )
}
