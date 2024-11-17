import "./styleR.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoMarussia from "../../../assets/logos/marussia.webp"
import LogoChevy from '../../../assets/logos/chevrolet.png'
import MR02 from "../../../assets/images/race/Marussia.jpg"
import CorvetteC6 from "../../../assets/images/race/corvettec6r.webp"

export default function CarrosCorrida(){
    return(
        <>
            <section id="Showroom">
                <div className="titulopagina">
                    <h2>Race</h2>
                </div>

                    <div className="Fileira">
                            <div class="Card-carro-corrida">
                                <img className="fotoprincipal" src={MR02} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMarussia} alt=""/>Marussia MR02 - 2013 #22</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>750cv | 2.4L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT|MT 7 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Marussia F1 Team</p>
                                    </div>
                                    <h4 class="preco">R$ 17.000.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro-corrida">
                                <img className="fotoprincipal" src={CorvetteC6}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoChevy} alt=""/>Chevrolet Corvette C6.R #3</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>590cv | 7.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>MT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Corvette Racing</p>
                                    </div>
                                    <h4 class="preco">R$ 4.050.000,00</h4>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}