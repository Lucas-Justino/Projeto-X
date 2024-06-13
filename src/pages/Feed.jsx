import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Sidebar from "../components/Sidebar";

const Feed = () => {
  return (
    <div className="h-screen w-screen bg-black flex">
      <div className="w-1/4"></div>
      <div className="flex w-2/4 gap-5">
        <Navbar />
        <Profile />
        <Sidebar />
      </div>
      <div className="w-1/4"></div>
    </div>
  );
};

export default Feed;
