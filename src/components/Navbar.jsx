import MyIcon from "../components/MyIcon";
import { GoHome } from "react-icons/go";
import { RiNotification2Line } from "react-icons/ri";
import { SlEnvolope } from "react-icons/sl";
import { BsSlashSquare } from "react-icons/bs";
import { TbClipboardText } from "react-icons/tb";
import { MdBookmarkBorder } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Foto from "../images/foto.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col w-1/4 lg:gap-[1px] 2xl:gap-[5px] 3xl:gap-[6px] p-2">
      <div className="flex bg-black pl-1">
        <Link to={"/"}>
          <button className="h-12 w-12 p-2 rounded-full hover:bg-[#181919]">
            <MyIcon width={"40px"} height={"40px"} />
          </button>
        </Link>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-52 p-3 rounded-full hover:bg-[#181919]">
          <GoHome size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Página Inicial</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-40 p-3 rounded-full hover:bg-[#181919]">
          <IoIosSearch size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Explorar</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-52 p-3 rounded-full hover:bg-[#181919]">
          <RiNotification2Line size={"25px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Notificações</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-48 p-3 rounded-full hover:bg-[#181919]">
          <SlEnvolope size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Mensagens</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-32 p-3 rounded-full hover:bg-[#181919]">
          <BsSlashSquare size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Grok</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-36 p-3 rounded-full hover:bg-[#181919]">
          <TbClipboardText size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Listas</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-48 p-3 rounded-full hover:bg-[#181919]">
          <MdBookmarkBorder size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Itens Salvos</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-52 p-3 rounded-full hover:bg-[#181919]">
          <HiOutlineUsers size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Comunidades</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex gap-2 lg:h-[44px] 2xl:h-[38px] w-44 p-3 rounded-full hover:bg-[#181919]">
          <MyIcon width={"40px"} height={"40px"} />
          <span className="text-[#E7E9EA] text-xl">Premium</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-36 p-3 rounded-full hover:bg-[#181919]">
          <HiOutlineUser size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Perfil</span>
        </button>
      </div>
      <div className="flex">
        <button className="flex items-center gap-5 lg:h-[38px] 2xl:h-[52px] w-36 p-3 rounded-full hover:bg-[#181919]">
          <CiCircleMore size={"30px"} color="white" />
          <span className="text-[#E7E9EA] text-xl">Mais</span>
        </button>
      </div>
      <div className="lg:mt-3 xl:mt-6 3xl:mt-6">
        <button className="flex bg-[#1D9BF0] items-center justify-center gap-5 lg:h-[36px] lg:ml-3 2xl:h-[52px] 2xl:w-[234px] p-3 rounded-full hover:bg-[#1A8CD8] xl:w-[200px] lg:w-[130px]">
          <span className="text-[#E7E9EA] text-lg font-bold">Postar</span>
        </button>
      </div>
      <div className="rounded-full lg:w-[250px] xl:w-[250px] 2xl:h-[60px] 3xl:w-[290px] xl:mt-24 3xl:mt-24 lg:mt-4 flex hover:bg-[#181818] cursor-pointer gap-2 items-center justify-start">
        <div className="rounded-full h-10 w-10 flex justify-center items-center">
          <img src={Foto} className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col 3xl:w-[200px] 2xl:w-[150px] xl:w-[100px] lg:w-[150px] justify-around">
          <span className="text-[#E7E9EA] font-bold mt-2 text-nowrap">
            Lucas da Silva Justino
          </span>
          <span className="text-[#5D6266] leading-tight">@Lucas_Justino07</span>
        </div>
        <div className="flex ml-2">
          <IoIosMore color="#E7E9EA" size={"20px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
