/* eslint-disable react/prop-types */

// Reusable Project Component
const Project = ({ technologies, image, description }) => {
  return (
    <div
      className="flex flex-col justify-start border w-full rounded-lg border-purple-950 bg-no-repeat bg-cover bg-slate-950 transition-transform 
    duration-200 hover:scale-105 hover:shadow-lg  hover:cursor-pointer "
    >
      <div className="relative h-54 sm:h-64 md:h-72 lg:h-80 xl:h-80 overflow-hidden group">
        <img
          src={image}
          alt="Project Visual"
          className="w-full h-full object-cover filter brightness-100 group-hover:brightness-90 transition duration-300 hover:cursor-pointer"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-purple-950 group-hover:bg-transparent transition duration-200"></div>
      </div>
      <div className="p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4">
        <div className="text-sm sm:text-base">
          <ul className="flex gap-2 sm:gap-3 flex-wrap">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-purple-950 text-center transition duration-200 transform hover:scale-105 hover:bg-purple-500 hover:cursor-pointer hover:shadow-lg rounded p-2 sm:p-3 m-1 sm:m-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-base sm:text-lg md:text-xl font-bold">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Project
