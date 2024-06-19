/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion"
import { JupiterCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import "animate.css"

export default function Hero() {
  return (
    <div className="flex flex-wrap h-screen relative z-0">
      <div className="flex  h-full overflow-hidden w-full flex-wrap">
        {" "}
        <div
          data-aos="fade-right"
          className="text-white w-6/12 flex  flex-col justify-start items-start p-56 animate__animated animate__zoomIn;
"
        >
          {" "}
          <h1 className="font-bold text-7xl mb-10 flex">
            <p className="font-bold text-7xl">{"<>"}</p>
            Hey,I'm <span className="text-purple-500 ml-2">Sami</span>
          </h1>{" "}
          <p className="font-bold text-2xl ">
            I am a software engineer , FullStack developer and im currently
            pursuing my masters in AI !{" "}
            <p className="font-bold text-7xl">{"</>"}</p>
          </p>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 1, 1)}
          className="
      w-5/12 min-h-full flex justify-center items-center 
      "
        >
          <JupiterCanvas />
        </motion.div>
      </div>
    </div>
  )
}
