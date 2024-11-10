// Teste!!
import { Link } from "react-router-dom"
import "./styleWM.css"

export default function WorldMap(){
    return(
        <>
        <div className="peido">
            <Link to={"/worldmap/italia"}>
                Botaoteste
            </Link>
        </div>
        

        <h2>Selecione um país.</h2>
        </>
    )
}