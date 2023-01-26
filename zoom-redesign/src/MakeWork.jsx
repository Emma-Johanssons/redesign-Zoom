import wheel from "/zoom_wheel.png";
export default function MakeWork() {
  return (
    <div>
      <div className="flex md:flex-row flex-col items-center justify-center bg-[#00053d] md:h-72 h-auto">
        <img className=" w-auto md:w-fit mr-3" src={wheel}></img>
        <div className="flex flex-wrap justify-center mt-3 md:flex-col md:justify-center md:items-center">
          <h1 className=" mr-8 text-xl md:text-3xl font-bold text-blue-200">
            Make work less work
          </h1>
          <h2 className="text-center text-blue-200 md:text-blue-200 mt-5">
            Securely connect and collaborate so you can work better together.
            Simple to manage and delightful to use, <br />
            Zoom powers the modern workforce. <br />
          </h2>
          <h1 className="mb-2 text-blue-200 font-bold text-lg cursor-pointer hover:text-blue-400">
            <br />
            Discover the Possibilities
          </h1>
        </div>
      </div>
    </div>
  );
}
