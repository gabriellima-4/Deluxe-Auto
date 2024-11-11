import "./styleCS.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoHyundai from "../../../assets/logos/hyundai.png"
import Palisade from "../../../assets/images/normal/Palisade.jpeg"
import Ioniq from "../../../assets/images/normal/IONIQ5.jpg"


export default function CarrosCoreia(){
    return(
        <>
            <section id="Showroom">
                <div className="paisBandeira">
                        <h2>Coréia do Sul</h2>
                        <img src="https://img.icons8.com/?size=100&id=33288&format=png&color=000000" alt="" />
                </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Palisade} alt="Hyundai Palisade"/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoHyundai} alt=""/>Hyundai Palisade Signature</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>295cv | 3.8L V6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Moonlight Pearl Blue</p>
                                    </div>
                                    <h4 class="preco">R$ 450.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Ioniq}  alt="Hyundai IONIQ5"/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoHyundai} alt=""/>Hyundai IONIQ5 Signature</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>84Kwh - 365cv | Elétrico</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Titan Gray</p>
                                    </div>
                                    <h4 class="preco">R$ 394.990,00</h4>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}