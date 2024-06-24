import Tech from "./Tech" // Assuming this is your Tech component
import outer from "../assets/outer-space.png"

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center m-4 sm:m-6 md:m-8 lg:m-10">
      <div className="gradient-border-blur p-4 sm:p-5 md:p-6 lg:p-4 w-full lg:w-8/12 my-10 sm:my-12 md:my-12 lg:my-12">
        <div className="inner-container w-full flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-6/12 flex flex-col justify-center mb-6 lg:mb-0">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 md:mb-10 text-center lg:text-left">
              About me
            </h1>
            <p className="text-white mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              My name is Nouicer Sami Ilyas, and I hold a Bachelor's degree in
              Software Engineering from the University of Science and Technology
              Houari Boumediene. I am deeply passionate about Information
              Technology and am currently advancing my expertise by pursuing a
              Master's degree in Artificial Intelligence at the same
              institution. Professionally, I specialize as a Fullstack Developer
              and I want to push my career to the next level by working in the
              machine and deep learning field.
            </p>
          </div>
          <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
            <img src={outer} alt="outer space" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8 md:mb-10 text-center">
        Techs
      </h1>
      <Tech />
    </div>
  )
}
