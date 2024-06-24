/* eslint-disable react/no-unescaped-entities */
import { JupiterCanvas } from "./canvas"
import "animate.css"

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen relative z-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="flex h-full w-full flex-wrap">
        <div className="text-white w-full lg:w-6/12 flex flex-col justify-start items-start p-6 sm:p-8 md:p-10 lg:p-14 xl:p-18 2xl:p-22">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
              &lt;&gt;
            </span>
            Hey, I'm <span className="text-purple-500 ml-1">Sami</span>
          </h1>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-normal">
            I am a software engineer, FullStack developer, and I'm currently
            pursuing my master's in AI!{" "}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl block mt-3">
              &lt;/&gt;
            </span>
          </p>
        </div>
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          {/* Replace with your component or content */}
          <JupiterCanvas />
        </div>
      </div>
    </div>
  )
}
