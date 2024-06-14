import { IoIosSearch } from "react-icons/io";
import SuggestionProfile from "./SuggestionProfile";
import BillGates from "../images/BillGates.jpg";
import MrBeast from "../images/MrBeast.jpg";
import SpaceX from "../images/SpaceX.jpg";
import Topics from "./Topics";
import Terms from "./Terms";
import ExplorePanel from "./ExplorePanel";

const Sidebar = () => {
  return (
    <div className="w-[31.5%] flex flex-col">
        <ExplorePanel />
       <Topics />
       <Terms />
    </div>
  );
};

export default Sidebar;
