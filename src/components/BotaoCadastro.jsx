import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const BotaoCadastro = ({ nome, bold, icon }) => {
  const IconComponent = icon === "google" ? FcGoogle : FaApple;
  return (
    <button
      className={`bg-white rounded-full h-10 w-[310px] mt-3 font-open-sans-light text-sm ${bold} p-4 flex justify-center items-center gap-1`}
    >
      <IconComponent size={20} />
      <span>{nome}</span>
    </button>
  );
};

export default BotaoCadastro;
