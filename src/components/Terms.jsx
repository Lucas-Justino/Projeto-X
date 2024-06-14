import { IoIosMore } from "react-icons/io";

const Terms = () => {
  return (
    <div className="grid grid-cols-2 text-sm ml-5">
      <span className="text-[#71767B] hover:underline cursor-pointer">
        Termos de Serviço
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer">
        Política de Privacidade
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer">
        Política de cookies
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer">
        Acessibilidade
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer">
        Informações de anúncios
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer flex gap-1">
        Mais
        <div className="flex justify-center items-center">
          <IoIosMore
            className="text-[#71767B] hover:text-[#1D9BF0]"
            size={"15px"}
          />
        </div>
      </span>
      <span className="text-[#71767B] hover:underline cursor-pointer">
        © 2024 X Corp.
      </span>
    </div>
  );
};

export default Terms;
