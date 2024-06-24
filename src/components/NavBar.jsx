import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons" // Import the icon
import logo2 from "../assets/logo2.png"

export function NavBar() {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf" // Construct the URL to the resume file
    window.open(resumeUrl, "_blank") // Open the resume in a new tab/window
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      )

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <div
      data-aos="zoom-bottom"
      data-aos-duration="3000"
      className={`flex justify-between items-center h-16 text-white ${
        visible ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="p-3">
          <img src={logo2} className="h-8" alt="Logo" />
        </div>
        <div className="font-bold text-2xl">SamiLyas</div>
      </div>

      <nav className="flex gap-4 md:hidden">
        <MobileNavDropdown handleDownload={handleDownload} />
      </nav>

      <nav className="hidden md:flex gap-4">
        <ul className="flex gap-4">
          <NavItemResponsive label="About" />
          <NavItemResponsive label="Education" />
          <NavItemResponsive label="Techs" />
          <NavItemResponsive label="Contact" />
          <li
            className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer flex items-center"
            onClick={handleDownload}
          >
            <span className="relative text-xl inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
              Resume <FontAwesomeIcon icon={faDownload} />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// Responsive NavItem component
function NavItemResponsive({ label }) {
  return (
    <li className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
      <span className="relative text-xl inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
        {label}
      </span>
    </li>
  )
}

// Dropdown menu for mobile view
function MobileNavDropdown({ handleDownload }) {
  return (
    <div className="relative">
      <button className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
        <span className="relative text-xl inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          <FontAwesomeIcon icon={faBars} />{" "}
        </span>
      </button>
      <ul className="absolute top-12 right-0 bg-gray-900 text-white rounded-lg shadow-lg py-2 mt-1 hidden">
        <li
          className="block p-2 hover:bg-purple-700 cursor-pointer"
          onClick={handleDownload}
        >
          Resume <FontAwesomeIcon icon={faDownload} />
        </li>
        <NavItemResponsive label="About" />
        <NavItemResponsive label="Education" />
        <NavItemResponsive label="Techs" />
        <NavItemResponsive label="Contact" />
      </ul>
    </div>
  )
}
