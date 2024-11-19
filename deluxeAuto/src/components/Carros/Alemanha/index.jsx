import "../style.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoBMW from "../../../assets/logos/BMW.webp"
import LogoAudi from "../../../assets/logos/Audi.webp"
import LogoMercedes from "../../../assets/logos/Mercedes.webp"
import LogoPorsche from "../../../assets/logos/porsche.png"
import TurboS from "../../../assets/images/normal/911TS.webp"
import Dakar from "../../../assets/images/normal/Dakar.jpeg"
import Cayman from "../../../assets/images/normal/Cayman.webp"
import Etron from "../../../assets/images/normal/AudiETRON.jpg"
import RS6 from "../../../assets/images/normal/AudiRS6.jpg"
import GWagon from "../../../assets/images/normal/MERCG63.webp"
import Sclass from "../../../assets/images/normal/S63AMG.jpg"
import X6 from "../../../assets/images/normal/X6.webp"


export default function CarrosAlemanha(){
    return(
        <>
            <section id="Showroom">
            <div className="paisBandeira">
                        <h2>Alemanha</h2>
                        <img src="https://img.icons8.com/?size=100&id=15502&format=png&color=000000" alt="" />
            </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={X6} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoBMW} alt=""/>BMW X6 XDRIVE40i</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>318cv | 3.0L I6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Black Sapphire</p>
                                    </div>
                                    <h4 class="preco">R$ 842.640,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Etron}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoAudi} alt=""/>Audi RS E-Tron GT Quattro</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>440kW - 640cv | Elétrico</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Floret Silver</p>
                                    </div>
                                    <h4 class="preco">R$ 1.145.000,00</h4>
                                </div>
                            </div>
                    </div>


                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Dakar} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoPorsche} alt=""/>Porsche 911 Dakar</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>480cv | 3.0L Boxer 6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>PDK 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Martini Stripes</p>
                                    </div>
                                    <h4 class="preco">R$ 1.799.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={RS6}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoAudi} alt=""/>Audi RS6 Avant</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>630cv | 4.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Daytona Gray Matte</p>
                                    </div>
                                    <h4 class="preco">R$ 1.220.350,00</h4>
                                </div>
                            </div>
                    </div>


                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={GWagon} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMercedes} alt=""/>Mercedes G-63 AMG</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>585cv | 4.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 9 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Iridium Silver Metallic</p>
                                    </div>
                                    <h4 class="preco">R$ 1.939.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Sclass}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMercedes} alt=""/>Mercedes S-63 AMG S E Performance</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>791cv | 4.0L V8 Híbrido</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 9 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Nautical Blue Metallic</p>
                                    </div>
                                    <h4 class="preco">R$ 1.220.350,00</h4>
                                </div>
                            </div>
                    </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Cayman} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoPorsche} alt=""/>Porsche 718 Cayman GTS</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>400cv | 4.0L Boxer 6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>MT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>GT Silver Metallic</p>
                                    </div>
                                    <h4 class="preco">R$ 868.750,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={TurboS}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoPorsche} alt=""/>Porsche 911 Turbo S Coupé</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>650cv | 3.7L Boxer 6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>PDK 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>GT Silver Metallic</p>
                                    </div>
                                    <h4 class="preco">R$ 1.974.000,00</h4>
                                </div>
                            </div>
                    </div>

            </section>
        </>
    )
}