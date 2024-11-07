import { Link } from "react-router-dom"
import "./stylehome.css"

export default function LandingComponent(){
    return (
        <>
            <section id="Home">
                <div className="apresentacao">
                    <p>
                    Para os que enxergam além do metal e do carbono. Carros são, muitas vezes, sonhos magníficos realizados por meio do mais alto nível e classe de engenharia.
                    <br/>
                    Sonhos esses, que trazem sentimentos e sensações inigualáveis aos que pilotam, e que só quem realmente ama essas máquinas pode compreender.
                    <br/>
                    Seu sonho pode estar diante de você. Confira nosso showroom seletíssimo de máquinas incríveis.
                    </p>

                    <img src="https://media.astonmartin.com/wp-content/uploads/2023/06/a86e24a5d912249fa0e2c6537bb153a7-1500x791.jpg" width="700px" alt="CARRO"></img>

                    <Link to={"/worldmap"}>
                        <button>Conferir</button>
                    </Link>
                </div>
            </section>
        </>
    )
}