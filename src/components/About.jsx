import React from "react"
import Tech from "./Tech" // Assuming this is your Tech component
import outer from "../assets/outer-space.png"
export default function About() {
  // Function to add glowing effect to cursor on hover
  const addGlowingEffect = () => {
    const cursor = document.getElementById("custom-cursor")
    if (cursor) {
      cursor.classList.add("glow")
    }
  }

  // Function to remove glowing effect from cursor
  const removeGlowingEffect = () => {
    const cursor = document.getElementById("custom-cursor")
    if (cursor) {
      cursor.classList.remove("glow")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div className="gradient-border-blur p-5 w-7/12 m-20">
        <div className="inner-container w-full flex ">
          <div className="w-full flex flex-col justify-center">
            <h1 className="font-bold text-5xl text-white mb-10 text-center">
              About me
            </h1>
            <p className="text-white mb-10 font-bold">
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
          <div className="w-10/12">
            <img src={outer} alt="outer space" className=" " />
          </div>
        </div>
      </div>
      <h1 className="font-bold text-5xl text-white mb-10 text-center">Techs</h1>
      <Tech />
    </div>
  )
}
