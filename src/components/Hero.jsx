/* eslint-disable react/no-unescaped-entities */
import { JupiterCanvas } from "./canvas"
import "animate.css"

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen relative z-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex h-full w-full flex-wrap">
        <div
          // data-aos="fade-right"
          className="text-white w-full lg:w-6/12 flex flex-col justify-start items-start p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 2xl:p-24"
        >
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 flex items-center">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              {"<>"}
            </span>
            Hey, I'm <span className="text-purple-500 ml-2">Sami</span>
          </h1>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-normal">
            I am a software engineer, FullStack developer, and I'm currently
            pursuing my master's in AI!{" "}
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl block mt-4">
              {"</>"}
            </span>
          </p>
        </div>
        <div className="w-full lg:w-5/12  flex justify-center items-center p-4">
          <JupiterCanvas />
        </div>
      </div>
    </div>
  )
}
