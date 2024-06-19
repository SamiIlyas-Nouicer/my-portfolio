export function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center h-16  text-white">
      <div className="flex flex-row items-center gap-4">
        <div className="p-3 text-2xl font-bold"></div>
        <div className="flex flex-row gap-4">
          <div className="font-bold text-2xl">SamiLyas</div>
        </div>
      </div>
      <div className=" p-3 flex flex-row gap-4">
        <div className="border-none rounded-3xl p-2 font-bold  hover:cursor-pointer">
          About
        </div>
        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
          Experience
        </div>
        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer">
          Techs
        </div>

        <div className="border-none rounded-3xl p-2 font-bold hover:cursor-pointer ">
          Contact
        </div>
      </div>{" "}
    </div>
  )
}
