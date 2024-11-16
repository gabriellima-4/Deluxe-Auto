import "./styleCL.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoPorsche from "../../../assets/logos/porsche.png"
import LogoMcLaren from "../../../assets/logos/mclaren.webp"
import F1 from "../../../assets/images/classics/McLarenF1.jpg"
import GT1 from "../../../assets/images/classics/PorscheGT1.webp"

export default function CarrosClassicos(){
    return(
        <>
            <section id="Showroom">
                <div className="paisBandeira">
                    <h2>Classics</h2>
                </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={F1} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMcLaren} alt=""/>McLaren F1 (Chassis #060) - 1997</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>636cv | 6.1L V12</p>
                                        <p><img src={Marcha} alt="Câmbio"/>MT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Dandelion Yellow</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=68757&format=png&color=000000" alt="" />240Km</p>
                                    </div>
                                    <h4 class="preco">R$ 100.000.000,00</h4>
                                    <h4 className="alerta">Configuração Única no mundo!!</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={GT1}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoPorsche} alt=""/>Porsche 911 GT1 Strassenversion - 1998</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>537cv | 3.2L Boxer6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>MT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Arctic Silver</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=68757&format=png&color=000000" alt="" />821Km</p>
                                    </div>
                                    <h4 class="preco">R$ 28.790.000,00</h4>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}