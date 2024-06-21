import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons" // Import the icon
import { faGithub } from "@fortawesome/free-brands-svg-icons" // Import the icon

export default function Socials() {
  return (
    <div
      className="flex flex-col fixed bottom-0 left-5 justify-center items-center gap-3"
      data-aos="zoom-bottom"
      data-aos-duration="2000"
    >
      <a
        href="https://github.com/SamiIlyas-Nouicer"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-700 text-xs  hover:text-purple-900 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/sami-nouicer-7bba61314/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white-700 text-xs  hover:text-purple-900 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <div className="h-32 w-0 relative  border"></div>
    </div>
  )
}
