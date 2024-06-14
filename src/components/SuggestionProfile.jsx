import { RiVerifiedBadgeFill } from "react-icons/ri";

const SuggestionProfile = ({ foto, nome, isVerifiedPremium }) => {

    const iconColor = isVerifiedPremium ? "#E2B71A" : "#1D9BF0";

  return (
    <div className="flex justify-between hover:bg-[#080808]">
      <div className="flex">
        <div className="rounded-full h-10 w-10">
          <img src={foto} className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="flex flex-col justify-start items-start ml-2">
          <span className="flex leading-tight text-[#E7E9EA] font-semibold gap-1 hover:underline">
            {nome}
            <RiVerifiedBadgeFill color={iconColor} />
            </span>
          <span className="leading-tight text-[#71767B]">@{nome}</span>
        </div>
      </div>
      <button className="flex justify-center items-center h-8 w-20 rounded-full bg-[#EFF3F4] hover:bg-[#D7DBDC]">
        <span className="font-semibold text-[16px]">
            Seguir
        </span>
      </button>
    </div>
  );
};

export default SuggestionProfile;
