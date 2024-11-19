import "../style.css"
import LogoFerrari from "../../../assets/logos/ferrari.png"
import LogoLambo from "../../../assets/logos/Lamborghini.jpg"
import LogoMaserati from "../../../assets/logos/Maserati.png"
import Roma from "../../../assets/images/normal/Roma.webp"
import Urus from "../../../assets/images/normal/Urus.jpeg"
import GTB from "../../../assets/images/normal/296GTB.webp"
import Huracan from "../../../assets/images/normal/Huracan.webp"
import Maserati from "../../../assets/images/normal/MC20.jpg"
import Revuelto from "../../../assets/images/normal/Revuelto.jpg"
import Marcha from "../../../assets/icons/marcha.png"

export default function CarrosItalia(){
    return (
        <>
            <section id="Showroom">
                <div className="paisBandeira">
                    <h2>Itália</h2>
                    <img src="https://img.icons8.com/?size=100&id=BV2gY6QOLTF9&format=png&color=000000" alt="" />
                </div>

                <div className="Fileira">
                        <div class="Card-carro">
                            <img className="fotoprincipal" src={Roma} alt="Ferrari Roma"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoFerrari} alt=""/> Ferrari Roma</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>620cv | 3.9L V8</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Rosso Corsa</p>
                                </div>
                                <h4 className="preco">R$ 3.600.000,00</h4>
                            </div>
                        </div>

                        <div class="Card-carro">
                            <img className="fotoprincipal" src={Urus}  alt="Lamborghini Urus S"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoLambo} alt=""/>Lamborghini Urus S</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>666cv | 4.0L V8</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT|MT 8 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Grigio Telesto</p>
                                </div>
                                <h4 class="preco">R$ 3.950.000,00</h4>
                            </div>
                        </div>
                </div>

                <div className="Fileira">
                        <div className="Card-carro">
                            <img className="fotoprincipal" src={GTB} alt="296GTB"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoFerrari} alt="Ferrari Logo"/>Ferrari 296GTB</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>830cv | 3.0L V6</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT|MT 8 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Rosso Corsa / Nero</p>
                                </div>
                                <h4 className="preco">R$ 4.200.000,00</h4>
                            </div>
                        </div>

                        <div className="Card-carro">
                            <img className="fotoprincipal" src={Huracan} alt="Huracan STO"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoLambo} alt=""/>Lamborghini Huracan STO</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>640cv | 5.0L V10</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT|MT 7 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Verde Scandal / Nero</p>
                                </div>
                                <h4 className="preco" >R$ 5.507.000,00</h4>
                            </div>
                        </div>
                        
                </div>


                <div className="Fileira">
                        <div className="Card-carro">
                            <img className="fotoprincipal" src={Maserati} alt="MC20"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoMaserati} alt="Maserati Logo"/>Maserati MC20 Cielo</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>630cv | 3.0L V6</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT|MT 8 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Grigio Mistero</p>
                                </div>
                                <h4 className="preco">R$ 2.900.000,00</h4>
                            </div>
                        </div>

                        <div className="Card-carro">
                            <img className="fotoprincipal" src={Revuelto} alt="Revuelto"/>
                            <div className="Container">
                                <h4 className="logo-nome" ><img src={LogoLambo} alt=""/>Lamborghini Revuelto</h4>
                                <div className="Info">
                                    <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>1015cv | 6.2L V12 Híbrido</p>
                                    <p><img src={Marcha} alt="Câmbio"/>AT|MT 8 Marchas</p>
                                    <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Bianco Avus</p>
                                </div>
                                <h4 className="preco" >R$ 8.500.000,00</h4>
                            </div>
                        </div>
                        
                </div>

            </section>
        </>
    )
}