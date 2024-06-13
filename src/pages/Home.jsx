import Cadastro from "../components/Cadastro";
import Footer from "../components/Footer";
import MyIcon from "../components/MyIcon";

const Home = () => {
    return(
        <div className="h-screen flex flex-col">
            <div className="flex h-[90vh] border-b-[0.5px] border-gray-700">
                <div className="w-2/4 flex justify-center items-center pl-[17.5%] pt-[10.5%]">
                    <MyIcon width={"500px"} height={"500px"}/>
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