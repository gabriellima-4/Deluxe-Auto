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
                <p>Estabelecimentos</p>
                <Link to={"/contato"}/>
                <p>Nossa História</p>
                <p>Contatos</p>
                <p>Classic Showroom</p>

                {/* <img id="caminhao" src="https://img.icons8.com/?size=100&id=ejfcITBjGKja&format=png&color=ffffff" width="33px" alt="Cargo Truck"> */}

            </div>


        </header>
        </>
    )
}