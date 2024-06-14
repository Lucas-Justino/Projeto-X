import SuggestionTopic from "./SuggestionTopic";

const Topics = () => {
  return (
    <div className="bg-black flex flex-col h-[50vh] border border-[#2F3336] rounded-xl m-2 cursor-pointer">
      <span className="text-[#E7E9EA] font-bold text-xl p-3">
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
        posts={"1.839 mil posts"}
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
      <div className="h-full flex items-center justify-start ml-1 pl-3 hover:bg-[#080808] rounded-xl">
        <span className="text-[#1D9BF0] font-light">Mostrar mais</span>
      </div>
    </div>
  );
};

export default Topics;
