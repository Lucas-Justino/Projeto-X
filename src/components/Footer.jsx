import { IoCloseOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex mt-4 text-[15px] text-[#E7E9EA]">
      <div className="flex-1"></div>
      <div className="flex flex-1 gap-10 whitespace-nowrap pt-1">
        <div>
          <h1 className="font-bold text-[20px] text-[#E7E9EA] mb-3">
            Bem-vindo ao x.com!
          </h1>
          <p>
            Informamos que estamos alterando nosso URL, mas suas configurações
            de privacidade e proteção de dados permanecem as mesmas.
          </p>
          <p>
            Para mais detalhes, consulte nossa Política de Privacidade:
            <span className="text-[#8F8FE6] underline"> https://x.com/en/privacy</span>
          </p>
        </div>
        <button className="flex justify-center items-center w-14 h-9 border border-custom-gray rounded-full hover:bg-[#181919]">
          <IoCloseOutline size={24} />
        </button>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Footer;
