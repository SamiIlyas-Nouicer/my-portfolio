import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons" // Import the icon
import { faGithub } from "@fortawesome/free-brands-svg-icons" // Import the icon
export default function Footer() {
  const sendEmail = () => {
    const recipientEmail = "Nouicer.samiIlyas@gmail.com"
    const subject = "Hey! I'm reaching out from your website!"
    const body = "Hey"

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <footer className="text-white text-center p-5 sm:p-8 lg:p-12 flex items-center justify-center mt-16">
      <div className="flex flex-col rounded-md p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-3xl items-center justify-center gap-6 sm:gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
          Get in Touch
        </h1>
        <p className="font-bold text-gray-400 mb-6 sm:mb-8 md:mb-12 text-sm sm:text-base md:text-lg lg:text-xl">
          I'm currently looking for job or internship opportunities. My inbox is
          always open, and I'll try to reach back to you as soon as I can.
        </p>
        <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          Nouicer.samiIlyas@gmail.com
        </p>{" "}
        <div className="flex gap-5">
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
        </div>
        <button
          onClick={sendEmail}
          className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
        >
          Send a message
        </button>
      </div>
    </footer>
  )
}
