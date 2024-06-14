import FotoPost from "../images/FotoPost.jpg"
import Imagem2 from "../images/Imagem2.jpg"
import Imagem3 from "../images/Imagem3.jpg"
import Imagem4 from "../images/Imagem4.jpg"
import Imagem5 from "../images/Imagem5.jpg"
import Imagem6 from "../images/Imagem6.jpg"

const TabMidia = () => {
    return(
        <div className="grid grid-cols-3 gap-1">
            <div className=" h-full w-full overflow-hidden">
                <img src={FotoPost} alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" h-full w-full overflow-hidden">
                <img src={Imagem2} alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" h-full w-full overflow-hidden">
                <img src={Imagem3} alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" h-full w-full overflow-hidden">
                <img src={Imagem4} alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" h-full w-full overflow-hidden">
                <img src={Imagem5} alt="" className="h-full w-full object-cover" />
            </div>
            <div className=" h-full w-full overflow-hidden">
                <img src={Imagem6} alt="" className="h-full w-full object-cover" />
            </div>

        </div>
    );
}

export default TabMidia;