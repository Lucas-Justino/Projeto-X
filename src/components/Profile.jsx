import { IoMdArrowBack } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";
import { RiUserStarFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import MyIcon from "./MyIcon";
import Capa from "../images/Capa.jpg";
import ElonMusk from "../images/ElonMusk.jpg";
import TabComponent from "./TabComponent";

const Profile = () => {
  return (
    <div className="w-2/4 flex flex-col border border-[#2F3336]">
      <div className="bg-black h-[6vh] flex items-center">
        <div className="flex ml-2 gap-6 items-center">
          <button className="h-8 w-8 rounded-full flex justify-center items-center hover:bg-[#181919]">
            <IoMdArrowBack size={"20px"} color="#EFF3F4" />
          </button>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-[#E7E9EA] font-semibold text-xl leading-tight">
                Elon Musk
              </span>
              <RiVerifiedBadgeFill color="#1D9BF0" size={"20px"} />
              <div className="flex border border-[#2F3336] h-4 w-4 p-[1.5px]">
                <MyIcon width={"15px"} height={"15px"} />
              </div>
            </div>

            <span className="text-[#5D6266] leading-6 text-sm">
              45,7 mil posts
            </span>
          </div>
        </div>
      </div>
      <div className="bg-black h-[25vh] relative">
        <img src={Capa} alt=""/>
        <div className="flex justify-between">
          <div>
            <div className="absolute top-32 left-5 h-36 w-36 z-10">
              <img src={ElonMusk} alt="" className="rounded-full border-4 border-black" />
            </div>
          </div>
          <div className="flex gap-2 mr-4 mt-2">
            <button className="hover:bg-[#181919] border border-[#2F3336] h-8 w-8 rounded-full flex justify-center items-center">
              <IoIosMore color="#E7E9EA" size={"20px"} />
            </button>
            <button className="hover:bg-[#181919] border border-[#C936CC] h-8 w-8 rounded-full flex justify-center items-center">
              <RiUserStarFill color="#C936CC" size={"18px"} />
            </button>
            <button className="flex justify-center items-center h-9 w-[76px] rounded-full bg-[#EFF3F4] hover:bg-[#D7DBDC]">
              <span className="font-semibold text-[16px]">Seguir</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black h-[20vh] mt-8">
        <div className="flex flex-col m-3">
          <div className="flex items-center gap-1">
            <span className="text-[#E7E9EA] font-bold text-xl leading-tight">
              Elon Musk
            </span>
            <RiVerifiedBadgeFill color="#1D9BF0" size={"20px"} />
            <div className="flex border border-[#2F3336] h-4 w-4 p-[1.5px]">
              <MyIcon width={"15px"} height={"15px"} />
            </div>
          </div>
          <span className="text-[#5D6266] leading-6">@elonmusk</span>
          <span className="text-[#1677B8] hover:underline cursor-pointer">
            Ver mais
          </span>
          <div className="flex items-center gap-1 mt-1">
            <FaRegCalendarAlt color="#5D6266" />
            <span className="text-[#5D6266]">Ingressou em junho de 2009</span>
          </div>
          <div className="flex items-center mt-2 gap-4 text-[16px]">
            <span className="text-[#5D6266]">
              <span className="text-[#E7E9EA]">623</span> Seguindo
            </span>
            <span className="text-[#5D6266]">
              <span className="text-[#E7E9EA]">187,3 mi</span> Seguidores
            </span>
            <span className="text-[#5D6266]">
              <span className="text-[#E7E9EA]">146</span> Assinaturas
            </span>
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-[6vh] flex justify-around items-center cursor-pointer border-b border-[#2F3336]">
        <div className="w-full h-full flex items-center justify-center text-[#525659] hover:bg-[#181818]">
          <span>Posts</span>
        </div>
        <div className="w-full h-full flex items-center justify-center text-[#525659] hover:bg-[#181818]">
          <span>Respostas</span>
        </div>
        <div className="w-full h-full flex items-center justify-center text-[#525659] hover:bg-[#181818]">
          <span>Assinaturas</span>
        </div>
        <div className="w-full h-full flex items-center justify-center text-[#525659] hover:bg-[#181818]">
          <span>Destaques</span>
        </div>
        <div className="w-full h-full flex items-center justify-center text-[#525659] hover:bg-[#181818]">
          <span>Mídia</span>
        </div>
      </div> */}
      <TabComponent />
    </div>
  );
};

export default Profile;
