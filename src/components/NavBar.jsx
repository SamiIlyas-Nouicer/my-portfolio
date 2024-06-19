export function NavBar() {
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
            Experience
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
      </div>{" "}
    </div>
  )
}
