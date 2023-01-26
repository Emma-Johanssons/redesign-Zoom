import logo from "/logo-zoom-blue.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between mt-1 border-b-gray-200 border-b-2">
        <img
          className="ml-5 mb-2 w-32 mt-3 cursor-pointer"
          src={logo}
          alt="Logo"
        />
        <ul className="flex flex-col items-end md:justify-center md:flex-row mt-2 mb-2">
          <li className=" text-[#4a4afa] border-solid border-2 w-fit pr-3 pl-3 mr-3 rounded-3xl border-sky-600 md:p-2 font-medium text-md hover:bg-blue-100 cursor-pointer">
            Contact Sales
          </li>
          <li className="text-[#4a4afa] border-solid border-2 w-fit pr-3 pl-3 mr-3 rounded-3xl border-sky-600 md:p-2 font-medium text-md hover:bg-blue-100 cursor-pointer">
            Sign Up Free
          </li>
        </ul>
      </nav>
    </div>
  );
}
