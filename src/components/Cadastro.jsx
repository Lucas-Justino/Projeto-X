import BotaoCadastro from "./BotaoCadastro";
import BotaoCriarConta from "./BotaoCriarConta";
import BotaoLogin from "./BotaoLogin";
import Separador from "./Separador";

const Cadastro = () => {
  return (
    <div className="flex flex-col lg:pt-[60px] xl:pt-[180px] 3xl:pt-[180px] lg:pl-8 xl:pl-28 3xl:pl-28">
      <div>
        <h1 className="font-sequel-sans-heavy-disp lg:text-[54px] xl:text-[74px] 3xl:xl:text-[74px] text-[#E7E9EA]">
          Acontecendo agora
        </h1>
      </div>
      <div className="lg:pt-4 xl:pt-8 3xl:pt-8 mb-3">
        <h1 className="font-sequel-sans-heavy-disp lg:text-[35px] xl:text-[38px] 3xl:text-[38px] text-[#E7E9EA]">
          Inscreva-se hoje
        </h1>
      </div>
      <BotaoCadastro
        nome={"Inscrever-se no Google"}
        bold={""}
        icon={"google"}
      />
      <BotaoCadastro
        nome={"Inscrever-se com Apple"}
        bold={"font-bold"}
        icon={"apple"}
      />
      <Separador />
      <BotaoCriarConta />
      <div className="w-80">
        <span className="text-[#71767B] text-[12px]">
        Ao se inscrever, você concorda com os <span className="text-[#0A88F0] hover:underline cursor-pointer">Termos de Serviço </span>
        e a <span className="text-[#0A88F0] hover:underline cursor-pointer">Política de Privacidade</span>, 
        incluindo o <span className="text-[#0A88F0] hover:underline cursor-pointer">Uso de Cookies</span>.
        </span>
      </div>
      <div className="lg:mt-2 xl:mt-10 3xl:mt-10">
        <span className="font-sequel-sans-heavy-disp text-[16px] text-[#E7E9EA]">
            Já tem uma conta?
        </span>
      </div>
      <BotaoLogin color="#000000" colorFont="#1D9BF0" colorHover="#031018"/>
    </div>
  );
};

export default Cadastro;
