import { technologies } from "../constants"
import { BallCanvas } from "./canvas"

export default function Tech() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex  flex-wrap justify-center items-center gap-10 w-5/12"
        data-aos="fade-left"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
