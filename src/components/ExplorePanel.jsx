import { IoIosSearch } from "react-icons/io";
import SuggestionProfile from "./SuggestionProfile";
import BillGates from "../images/BillGates.jpg";
import MrBeast from "../images/MrBeast.jpg";
import SpaceX from "../images/SpaceX.jpg";

const ExplorePanel = () => {
  return (
    <div>
      <div className="h-[6vh] pt-1">
        <button className="flex bg-[#202327] h-[44px] w-full rounded-full items-center gap-4 pl-4">
          <IoIosSearch color="#757575" size={"25px"} />
          <span className="text-[#757575] text-[16px]">Buscar</span>
        </button>
      </div>
      <div className="bg-black flex flex-col h-[30vh] border border-[#2F3336] rounded-xl m-2 cursor-pointer">
        <span className="text-[#E7E9EA] font-bold text-xl p-3">
          Talvez você curta
        </span>
        <div className="p-3">
          <SuggestionProfile foto={BillGates} nome={"Bill Gates"} />
        </div>
        <div className="p-3">
          <SuggestionProfile foto={MrBeast} nome={"MrBeast"} />
        </div>
        <div className="p-3">
          <SuggestionProfile
            foto={SpaceX}
            nome={"SpaceX"}
            isVerifiedPremium={1}
          />
        </div>
        <div className="h-full flex items-center justify-start pl-3 hover:bg-[#080808] rounded-xl">
          <span className="text-[#1D9BF0] font-light">Mostrar mais</span>
        </div>
      </div>
    </div>
  );
};

export default ExplorePanel;
