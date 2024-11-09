import "./styleh.css"
import {Link} from "react-router-dom"
import Logo from "../../assets/icons/diamante32.png"
import Caminhao from "../../assets/icons/caminhao.png"


export default function Header(){
    return (
        <>
        <header>
            <div className="Logo-Site">
                <Link to={"/"}>
                    <img src={Logo} alt="" />
                </Link>
                
                <h2>Deluxe Auto</h2>
            </div>

            <div className="container">
                
                <Link to={"/contato"} className="rotas">
                    <p>Entre em Contato</p>
                </Link>


                <Link to={"/sobre-nos"} className="rotas">
                    <p>Sobre Nós</p>
                </Link>

                <Link to={"/diamond"} className="rotas">
                    <p>Diamond Showroom</p>
                </Link>

                <Link to={"/conta"} className="rotas">
                    <p>Conta</p>
                </Link>
                <img id="caminhao" src={Caminhao} width="33px" alt=""/>

            </div>

        </header>
        </>
    )
}