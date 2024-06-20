/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import "../../anim.scss"
import movie from "../../assets/movie.jpg" // Use default import for the image

export default function Movie_App() {
  const technologies = ["React ", "Tailwind ", "FireBase", "git", "next"]
  return (
    <div className="flex justify-between border-none  rounded-2xl border-purple-950 p-5">
      <div className="relative overflow-hidden border-none rounded-3xl w-6/12 group">
        <img
          src={movie}
          alt="Movie Poster"
          className="w-full border-none h-full object-cover rounded-3xl filter brightness-100 group-hover:brightness-50 transition duration-300 hover:cursor-pointer"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-purple-950 group-hover:bg-transparent transition duration-200 hover:cursor-pointer"></div>
      </div>
      <div className="w-6/12 pl-5 flex flex-col gap-12">
        <div className="text-lg font-bold">
          MovieWise is an innovative social media platform dedicated to film
          enthusiasts, merging the best of social networking with a rich
          cinematic experience. Designed for movie lovers of all kinds,
          MovieBoxd allows users to explore, share, and engage with a global
          community over their favorite films. Whether you’re a casual viewer or
          a die-hard cinephile, MovieBoxd offers a dynamic space to express your
          movie passion.
        </div>
        <div className="text-sm">
          <ul className="flex gap-3 flex-wrap">
            {technologies.map((technologie) => (
              <li className="bg-purple-950 w-2/12 text-center  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500 hover:cursor-pointer hover:shadow-lg rounded-2xl p-2 m-2">
                {technologie}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
