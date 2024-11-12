import Marcha from "../../../assets/icons/marcha.png"
import LogoAM from "../../../assets/logos/Aston.webp"
import LogoMcLaren from "../../../assets/logos/mclaren.webp"
import LogoRR from "../../../assets/logos/Rolls-Royce.png"
import DB12 from "../../../assets/images/normal/AMDB12.jpg"
import Artura from "../../../assets/images/normal/Artura.jpeg"
import Cullinan from "../../../assets/images/normal/Cullinan.webp"
import DBX707 from "../../../assets/images/normal/DBX707.webp"
import M765 from "../../../assets/images/normal/McLaren765.jpg"


export default function CarrosInglaterra(){
    return(
        <>
            <section id="Showroom">
            <div className="paisBandeira">
                        <h2>Inglaterra</h2>
                        <img src="https://img.icons8.com/?size=100&id=18212&format=png&color=000000" alt="" />
            </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={DBX707} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoAM} alt=""/>Aston Martin DBX707</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>707cv | 4.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 9 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Ion Blue</p>
                                    </div>
                                    <h4 class="preco">R$ 3.500.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={DB12}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoAM} alt=""/>Aston Martin DB12 Coupé</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>670cv | 4.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Satin Onyx Black</p>
                                    </div>
                                    <h4 class="preco">R$ 3.490.000,00</h4>
                                </div>
                            </div>
                    </div>


                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Artura} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMcLaren} alt=""/>McLaren Artura</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>680cv | 3.0L V6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>McLaren Orange</p>
                                    </div>
                                    <h4 class="preco">R$ 2.800.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={M765}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoMcLaren} alt=""/>McLaren 765LT Spider</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>765cv | 4.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 7 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Black Matte</p>
                                    </div>
                                    <h4 class="preco">R$ 5.722.000,00</h4>
                                </div>
                            </div>
                    </div>


                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Cullinan} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoRR} alt=""/>Rolls Royce Cullinan Black Badge</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>592cv | 6.7L V12</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Black</p>
                                    </div>
                                    <h4 class="preco">R$ 8.080.000,00</h4>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}


