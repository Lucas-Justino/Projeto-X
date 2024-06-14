import SuggestionTopic from "./SuggestionTopic";

const Topics = () => {
  return (
    <div className="bg-black flex flex-col xl:h-[52vh] 3xl:h-[52vh] border border-[#2F3336] rounded-xl lg:p-3 lg:ml-2 xl:ml-2 xl:p-0 3xl:m-2 cursor-pointer w-full">
      <span className="text-[#E7E9EA] font-bold xl:text-xl xl:p-3 3xl:p-3">
        O que está acontecendo
      </span>
      <SuggestionTopic
        tema={"Drama Sombrio • Assunto no momento"}
        destaque={"The Boys"}
        posts={"180 mil posts"}
      />
      <SuggestionTopic
        tema={"Esportes • Assunto no momento em Brasil"}
        destaque={"Sem Neymar"}
        posts={"1.839 posts"}
      />
      <SuggestionTopic
        tema={"Esportes • Assunto no momento"}
        destaque={"O Vasco"}
        posts={"33,1 mil posts"}
      />
      <SuggestionTopic
        tema={"Esportes • Assunto no momento"}
        destaque={"Gremio"}
        posts={"48,9 mil posts"}
      />
      <SuggestionTopic
        tema={"Assuntos do momento em Brasil"}
        destaque={"Enem 2024"}
      />
      <div className="h-full flex items-center justify-start 3xl:ml-1 xl:pl-3 hover:bg-[#080808] rounded-xl">
        <span className="text-[#1D9BF0] font-light">Mostrar mais</span>
      </div>
    </div>
  );
};

export default Topics;
