const TabSignature = () => {
  return (
    <div className="flex flex-col m-4 gap-3 justify-start items-start">
      <span className="text-[#E7E9EA] text-2xl font-bold">
        Desbloquear mais com Assinaturas{" "}
      </span>
      <span className="text-[#5D6266] leading-5">
        @elonmusk compartilhou 9 posts apenas para assinantes. Assine e veja
        posts exclusivos e conteúdo bônus da pessoa.{" "}
      </span>
      <button className="flex justify-center items-center h-10 w-36 mt-4 rounded-full bg-[#EFF3F4] hover:bg-[#D7DBDC]">
        <span className="font-bold text-[16px]">Inscrever-se</span>
      </button>
    </div>
  );
};

export default TabSignature;
