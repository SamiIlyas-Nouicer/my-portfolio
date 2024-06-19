/* eslint-disable react/no-unescaped-entities */
import Tech from "./Tech"

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div
        className="gradient-border-blur  p-5 w-10/12 m-20"
        data-aos="fade-right"
      >
        <div className="inner-container  w-full">
          <h1 className="font-bold text-5xl text-white mb-10 text-center">
            About me
          </h1>
          <p className="text-white mb-10">
            My name is Nouicer Sami Ilyas, and I hold a Bachelor's degree in
            Software Engineering from the University of Science and Technology
            Houari Boumediene. I am deeply passionate about Information
            Technology and am currently advancing my expertise by pursuing a
            Master's degree in Artificial Intelligence at the same institution.
            Professionally, I specialize as a Fullstack Developer and I want to
            push my career to the next level by working in the machine and deep
            learning field.
          </p>
        </div>
      </div>
      <h1 className="font-bold text-5xl text-white mb-10 text-center">
        Techs{" "}
      </h1>
      <Tech></Tech>
    </div>
  )
}
