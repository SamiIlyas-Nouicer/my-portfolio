import { motion } from "framer-motion"
import { JupiterCanvas } from "../components/canvas"
import { slideIn } from "../utils/motion"

export default function Hero() {
  return (
    <div className="h-8/12">
      {" "}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] "
      >
        <JupiterCanvas />
      </motion.div>
    </div>
  )
}
