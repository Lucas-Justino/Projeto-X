import { IoIosMore } from "react-icons/io";

const SuggestionTopic = ({ tema, destaque, posts }) => {
  return (
    <div className="flex justify-between m-2 ml-4 mr-4 gap-5 hover:bg-[#080808]">
      <div className="flex flex-col items-start">
        <span className="text-[#5D6266] text-sm">{tema}</span>
        <span className="text-[#E7E9EA] font-semibold">{destaque}</span>
        <span className="text-[#5D6266] text-sm">{posts}</span>
      </div>
      <div className="hover:bg-[#0A171F] rounded-full w-9 h-9 flex justify-center items-center">
        <IoIosMore
          className="text-[#71767B] hover:text-[#1D9BF0]"
          size={"20px"}
        />
      </div>
    </div>
  );
};

export default SuggestionTopic;
