import "../style.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoChevy from "../../../assets/logos/chevrolet.png"
import LogoFord from "../../../assets/logos/Ford.png"
import Camaro from "../../../assets/images/normal/CamaroSS.jpg"
import Corvette from "../../../assets/images/normal/Corvette.jpg"
import Ranger from "../../../assets/images/normal/RangerRaptor.jpeg"
import Mustang from "../../../assets/images/normal/Mustang.webp"

export default function CarrosEua(){
    return(
        <>
            <section id="Showroom">
            <div className="paisBandeira">
                        <h2>Estados Unidos</h2>
                        <img src="https://img.icons8.com/?size=100&id=15532&format=png&color=000000" alt="" />
            </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Camaro} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoChevy} alt=""/>Chevrolet Camaro SS</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>461cv | 6.2L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 10 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Black</p>
                                    </div>
                                    <h4 class="preco">R$ 533.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Mustang}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoFord} alt=""/>Ford Mustang GT Performance</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>488cv | 5.0L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 10 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Algarve Blue</p>
                                    </div>
                                    <h4 class="preco">R$ 530.000,00</h4>
                                </div>
                            </div>
                    </div>


                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Corvette} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoChevy} alt=""/>Chevrolet Corvette Z06</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>670cv | 5.5L V8</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Torch Red</p>
                                    </div>
                                    <h4 class="preco">R$ 2.500.000,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={Ranger}  alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoFord} alt=""/>Ford Ranger Raptor</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>397cv | 3.0L V6</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 10 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Belize Blue</p>
                                    </div>
                                    <h4 class="preco">R$ 472.300,00</h4>
                                </div>
                            </div>
                    </div>
            </section>
        </>
    )
}