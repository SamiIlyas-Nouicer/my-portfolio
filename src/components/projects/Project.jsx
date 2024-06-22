/* eslint-disable react/prop-types */

// Reusable Project Component
const Project = ({ technologies, image, description }) => {
  return (
    <div className="flex flex-col justify-between border  w-5/12 rounded border-purple-950 bg-no-repeat bg-cover bg-slate-950 hover:scale-110 hover:shadow-lg transition transform duration-200 hover:m-8">
      <div className="relative h-2/3 overflow-hidden border-none group">
        <img
          src={image}
          alt="Project Visual"
          className="border-none w-full h-full object-cover filter brightness-100 group-hover:brightness-90 transition duration-300 hover:cursor-pointer"
        />
        <div className="absolute inset-0 bg-opacity-50 bg-purple-950 group-hover:bg-transparent transition duration-200 hover:cursor-pointer"></div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="text-sm">
          <ul className="flex gap-3 flex-wrap">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-purple-950 text-center transition duration-200 ease-in-out transform hover:scale-105 hover:bg-purple-500 hover:cursor-pointer hover:shadow-lg rounded p-2 m-2"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-lg font-bold">{description}</div>
      </div>
    </div>
  );
};

export default Project;
