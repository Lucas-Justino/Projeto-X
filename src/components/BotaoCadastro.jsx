import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const BotaoCadastro = ({ nome, bold, icon }) => {
  const IconComponent = icon === "google" ? FcGoogle : FaApple;
  return (
    <button
      className={`bg-white rounded-full lg:h-8 xl:h-10 3xl:h-10 lg:w-[250px] xl:w-[310px] 3xl:w-[310px] mt-3 font-open-sans-light text-sm ${bold} p-4 flex justify-center items-center gap-1`}
    >
      <IconComponent size={20} />
      <span>{nome}</span>
    </button>
  );
};

export default BotaoCadastro;
