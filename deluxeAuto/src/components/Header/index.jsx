import "./styleh.css"
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <>
        <header>
            <div className="Logo-Site">
                {/* <img src="Icones/icons8-diamante-poly-16.png" alt="Logo"> */}
                <h2>Deluxe Auto</h2>
            </div>

            <div className="container">
                
                <Link to={"/contato"}>
                    <p>Entre em Contato</p>
                </Link>


                <Link to={"/sobre-nos"}>
                    <p>Sobre Nós</p>
                </Link>

                <Link to={"/diamond"}>
                    <p>Diamond Showroom</p>
                </Link>

                <Link to={"/conta"}>
                    <p>Conta</p>
                </Link>
                {/* <img id="caminhao" src="https://img.icons8.com/?size=100&id=ejfcITBjGKja&format=png&color=ffffff" width="33px" alt="Cargo Truck"> */}

            </div>


        </header>
        </>
    )
}