import Navbar from "./Navbar";
import Hero from "./Hero";
import MakeWork from "./MakeWork";
import Icons from "./Icons";
import Fonts from "./Fonts";
import { GiMagicHat } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { RiGovernmentFill } from "react-icons/ri";
import { RiMentalHealthLine } from "react-icons/ri";
import { VscTools } from "react-icons/vsc";
import { FaShopify } from "react-icons/fa";
function App() {
  return (
    <div>
      <div className="flex flex-col flex-wrap mb-10">
        <Navbar />
        <Hero />
      </div>
      <MakeWork />
      <div className="flex-row flex-wrap md:flex md:justify-evenly md:mt-24">
        <Icons />
        <div className="mb-10 grid grid-rows-2 grid-cols-2 gap-2 items-center justify-items-center">
          <Fonts icon={<GiMagicHat />} title={"Education"} />
          <Fonts icon={<GrMoney />} title={"Financial Services"} />
          <Fonts icon={<RiGovernmentFill />} title={"Government"} />
          <Fonts icon={<RiMentalHealthLine />} title={"Healthcare"} />
          <Fonts icon={<VscTools />} title={"Manufacturing"} />
          <Fonts icon={<FaShopify />} title={"Retail"} />
        </div>
      </div>
    </div>
  );
}

export default App;
