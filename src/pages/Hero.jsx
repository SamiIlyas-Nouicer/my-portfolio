/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { JupiterCanvas } from "../components/canvas"
import { slideIn } from "../utils/motion"
import "animate.css"
import StarsCanvas from "../components/canvas/stars"

export default function Hero() {
  return (
    <div className="relative z-0">
      <div className="flex  h-full overflow-hidden w-full flex-wrap">
        {" "}
        <div
          className="text-white w-6/12 flex  flex-col justify-start items-start p-56 animate__animated animate__zoomIn;
"
        >
          {" "}
          <h1 className="font-bold text-7xl mb-10 flex">
            <p className="font-bold text-7xl">{"<>"}</p>
            Hey,I'm <span className="text-purple-500">Sami</span>
          </h1>{" "}
          <p className="font-bold text-2xl ">
            I am a software engineer , webdeveloper and im currently passing my
            masters in AI ! <p className="font-bold text-7xl">{"</>"}</p>
          </p>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="
      w-6/12 min-h-full flex justify-center items-center 
      "
        >
          <JupiterCanvas />
        </motion.div>
      </div>
      <StarsCanvas />
    </div>
  )
}
