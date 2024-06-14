import Topics from "./Topics";
import Terms from "./Terms";
import ExplorePanel from "./ExplorePanel";

const Sidebar = () => {
  return (
    <div className="w-[31.5%] flex flex-col">
      <ExplorePanel />
      <Topics />
      <Terms />
    </div>
  );
};

export default Sidebar;
