import { RiVerifiedBadgeFill } from "react-icons/ri";
import MyIcon from "./MyIcon";
import FotoPerfil from "../images/ElonMusk.jpg";
import FotoPost from "../images/FotoPost.jpg"

const TabPosts = () => {
  return (
    <div>
      <div className="flex h-14 w-full items-start gap-2 m-2">
        <img
          src={FotoPerfil}
          alt="Foto Perfil Elon Musk"
          className="rounded-full h-12"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[#E7E9EA] font-bold leading-tight">
              Elon Musk
            </span>
            <RiVerifiedBadgeFill color="#1D9BF0" size={"18px"} />
            <div className="flex border border-[#2F3336] h-4 w-4 p-[1.5px]">
              <MyIcon width={"15px"} height={"15px"} />
            </div>
            <span className="text-[#5D6266] leading-6">@elonmusk • 9h</span>
          </div>
          <span className="text-[#E7E9EA] leading-7">Sending this cake to Delaware as a parting gift 😘</span>
        </div>
      </div>
      <div className="border border-[#2F3336] h-80 rounded-2xl overflow-hidden ml-16 mr-3 mt-1">
        <img src={FotoPost} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default TabPosts;
