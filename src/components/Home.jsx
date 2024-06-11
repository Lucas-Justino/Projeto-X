import Cadastro from "./Cadastro";
import Footer from "./Footer";
import MyIcon from "./MyIcon";

const Home = () => {
    return(
        <div className="h-screen flex flex-col">
            <div className="flex h-[90vh] border-b-[0.5px] border-gray-700">
                <div className="w-2/4 flex justify-center items-center pl-[17.5%] pt-[10.5%]">
                    <MyIcon />
                </div>
                <div className="w-2/4 pl-10">
                    <Cadastro />
                </div>
            </div>
            <div className="h-[13vh]">
                <Footer />
            </div>
        </div>
    );
}

export default Home;