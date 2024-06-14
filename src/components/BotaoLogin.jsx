import { Link } from "react-router-dom";

const BotaoLogin = () => {
  return (
    <Link to={"/feed"}>
      <button
        className={
          "bg-[#000000] border border-custom-gray rounded-full w-[310px] h-10 mt-4 hover:bg-[#031018]"
        }
      >
        <span className={"text-[#1D9BF0] font-bold"}>Entrar</span>
      </button>
    </Link>
  );
};

export default BotaoLogin;
