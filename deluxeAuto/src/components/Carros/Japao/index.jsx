import "../style.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoLexus from "../../../assets/logos/lexus.png"
import LogoNissan from "../../../assets/logos/nissan.png"
import GTR from "../../../assets/images/normal/NissanGTR.jpeg"
import LexusRX from "../../../assets/images/normal/RX500h.jpg"
import ES300 from "../../../assets/images/normal/ES300h.webp"


export default function CarrosJapao(){
    return(
        <>
            <section id="Showroom">
                <div className="paisBandeira">
                        <h2>Japão</h2>
                        <img src="https://img.icons8.com/?size=100&id=22435&format=png&color=000000" alt="" />
                </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={LexusRX} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoLexus} alt=""/>Lexus RX500h F-Sport</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>371cv | 2.4L I4 Híbrido</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Azul Olimpio</p>
                                    </div>
                                    <h4 class="preco">R$ 580.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={ES300}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoLexus} alt=""/>Lexus ES300h</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>211cv | 2.5L I4 Híbrido</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Preto Grafite</p>
                                    </div>
                                    <h4 class="preco">R$ 365.600,00</h4>
                                </div>
                            </div>
                    </div>

                    <div className="Fileira">
                        <div class="Card-carro">
                                <img className="fotoprincipal" src={GTR} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoNissan} alt=""/>Nissan GT-R Premium T-Spec (2025)</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>565cv | 3.8L V6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 6 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Millennium Jade</p>
                                    </div>
                                    <h4 class="preco">R$ 1.500.000,00</h4>
                                </div>
                        </div>
                    </div>
            </section>
        </>
    )
}