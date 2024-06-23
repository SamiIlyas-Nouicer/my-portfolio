import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

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
      className="flex flex-row justify-between items-center h-16  text-white "
    >
      <div className="flex flex-row items-center gap-4">
        <div className="p-3 text-2xl font-bold"></div>
        <div className="flex flex-row gap-4">
          <div className="font-bold text-2xl">SamiLyas</div>
        </div>
      </div>
      <div className=" p-3 flex flex-row gap-4">
        <div className="border-none rounded-3xl p-2 font-bold  hover:cursor-pointer ">
          <span className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            About
          </span>
        </div>
        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
          <span className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Education
          </span>
        </div>
        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
          <span className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Techs
          </span>
        </div>

        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer ">
          <span className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Contact
          </span>
        </div>
        <div
          className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer flex justify-center items-center gap-3"
          onClick={handleDownload}
        >
          <span className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-purple-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
            Resume <FontAwesomeIcon icon={faDownload} />
          </span>
        </div>
      </div>{" "}
    </div>
  )
}
