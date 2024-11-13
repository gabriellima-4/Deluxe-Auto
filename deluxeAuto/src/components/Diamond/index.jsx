import "./styleD.css"
import diamante from "../../assets/icons/diamante32.png"
import {Link} from "react-router-dom"


export default function Diamond(){
    return(
        <>
            <Link to={"/"}>
                <button>
                    {diamante}
                    <p>Voltar</p>
                </button>
            </Link>

            <section>
                
            </section>
        </>
    )
}