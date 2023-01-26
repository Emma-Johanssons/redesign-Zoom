import HeroLaptop from "/laptop.jpg";
import HeroNotes from "/notes-woman.jpg";
export default function Hero() {
  return (
    <div>
      <div className="p-3 flex flex-wrap flex-row md:p-6">
        <h1 className="text-3xl md:text-6xl font-bold">
          One platform <br />
          to{" "}
          <span className=" text-blue-600">connect, create and innovate</span>
        </h1>
      </div>
      <div className=" md:w-6/12 ml-3  float-left">
        <h2 className="p-3 font-normal text-lg">
          Bring teams together, reimagine workspaces, engage new audiences, and
          delight your costumers - all on the Zoom platform you know and love.
        </h2>
        <ul className=" flex-wrap md:p-3 flex gap-4 mt-10">
          <li className="border-solid border-2 p-2 rounded-3xl pl-4 pr-4 bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer">
            Plans & Pricing
          </li>
          <li className="p-2 pl-4 pr-4 font-normal text-blue-600 text-lg cursor-pointer">
            Sign Up, It´s free {">"}
          </li>
        </ul>
      </div>
      <div className="flex-wrap float-right flex bg-slate-50 md:h-80 rounded-xl mr-16">
        <img
          className=" w-32 h-40 md:w-80 md:h-64 mr-8 mt-14  rounded-xl"
          src={HeroLaptop}
        ></img>
        <img
          className="w-32 h-40 md:w-80 md:h-64 rounded-xl"
          src={HeroNotes}
        ></img>
      </div>
    </div>
  );
}
