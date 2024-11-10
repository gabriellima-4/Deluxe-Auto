// Teste!!
import { Link } from "react-router-dom"
import "./styleWM.css"

export default function WorldMap(){
    return(
        <>
        <div className="peido"></div>
        <Link to={"/worldmap/italia"}>
            Botaoteste
        </Link>

        <h2>Selecione um país.</h2>
        </>
    )
}