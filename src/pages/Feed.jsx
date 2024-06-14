import EnvolopIcon from "../components/EnvolopIcon";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Feed = () => {
  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="w-1/4"></div>
      <div className="flex w-2/4 gap-5">
        <Navbar />
        <Profile />
        <Sidebar />
      </div>
      <div className="w-1/4 relative min-h-screen">
        <div
          className="text-[#E7E9EA] text-xl font-bold absolute bottom-0 left-56 pl-4 
        border-t border-l border-r border-[#212121] shadow-md shadow-white h-14 w-96 flex items-center justify-between rounded-lg"
        >
          Mensagens
          <div className="flex gap-5 pr-4 items-center">
            <EnvolopIcon />
            <MdKeyboardDoubleArrowUp size={"30px"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
