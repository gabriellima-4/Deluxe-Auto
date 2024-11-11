// Teste!!
import { Link } from "react-router-dom"
import "./styleWM.css"

export default function WorldMap(){
    return(
        <>
        <div className="peido">
            <Link to={"/worldmap/italia"}>
                Italia
            </Link>

            <Link to={"/worldmap/coreia"}>
                Coreia do Sul
            </Link>

            <Link to="/worldmap/suecia">
                Suécia
            </Link>
        </div>
        

        <h2>Selecione um país.</h2>
        </>
    )
}