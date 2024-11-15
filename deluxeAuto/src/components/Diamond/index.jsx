import "./styleD.css"
import diamante from "../../assets/icons/diamante32.png"
import {Link} from "react-router-dom"


export default function Diamond(){
    return(
        <>
            <section id="menu">
                <div className="botaoVoltar">
                    <Link to={"/"}>
                        <button id="botaoDiamante">
                            <img src={diamante} alt="" />
                            <p>Voltar</p>
                        </button>
                    </Link>
                </div>

                <div className="fileiraOpcoes">
                    <div className="secaoClassics">
                        <Link to={"/diamond/classics"} className="rota">
                            <img src="https://storage.googleapis.com/car-silhouette-1/Ferrari/Ferrari%20Dino%20246%20GT-03-min.png" width="500px" alt="" />
                            <h2 id="tituloClassics">Classics</h2>
                        </Link>

                    </div>


                    <div className="secaoRace">
                        <Link to={"/diamond/race"} className="rota">
                            <img src="https://storage.googleapis.com/car-silhouette-1/Mercedes-Benz/Mercedes-AMG%20GT%20Black%20Series%20(C190)-12.png" width="500px" alt="" />
                            <h2 id="tituloRace">Race</h2>
                        </Link>

                    </div>
                </div>









                
            </section>
        </>
    )
}