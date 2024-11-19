import "../style.css"
import Marcha from "../../../assets/icons/marcha.png"
import LogoKoenigsegg from "../../../assets/logos/koenigsegg.png"
import LogoVolvo from "../../../assets/logos/volvo.png"
import XC90 from "../../../assets/images/normal/XC90ULT.webp"
import C40 from "../../../assets/images/normal/VolvoC40.jpg"
import Gemera from "../../../assets/images/normal/Gemera.webp"



export default function CarrosSuecia(){
    return(
        <>
            <section id="Showroom">
                <div className="paisBandeira">
                        <h2>Suécia</h2>
                        <img src="https://img.icons8.com/?size=100&id=15527&format=png&color=000000" alt="" />
                </div>

                    <div className="Fileira">
                            <div class="Card-carro">
                                <img className="fotoprincipal" src={XC90} alt="Volvo XC90"/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoVolvo} alt=""/>Volvo XC90 T8 Ultimate</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>462cv | 2.0L I4</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 8 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Black</p>
                                    </div>
                                    <h4 class="preco">R$ 630.130,00</h4>
                                </div>
                            </div>

                            <div class="Card-carro">
                                <img className="fotoprincipal" src={C40}  alt="Volvo C40"/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoVolvo} alt=""/>Volvo C40 Ultimate</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>78kWh - 413cv | Elétrico</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Vapour Gray</p>
                                    </div>
                                    <h4 class="preco">R$ 365.600,00</h4>
                                </div>
                            </div>
                    </div>

                    <div className="Fileira">
                        <div class="Card-carro">
                                <img className="fotoprincipal" src={Gemera} alt=""/>
                                <div className="Container">
                                    <h4 className="logo-nome" ><img src={LogoKoenigsegg} alt=""/>Koenigsegg Gemera</h4>
                                    <div className="Info">
                                        <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>2300cv | 5.0L V8 Híbrido</p>
                                        <p><img src={Marcha} alt="Câmbio"/>AT 9 Marchas</p>
                                        <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Ash Grey</p>
                                    </div>
                                    <h4 class="preco">R$ 20.000.000,00</h4>
                                    <h4 className="alerta">Único na América Latina!</h4>
                                </div>
                        </div>
                    </div>
            </section>
        </>
    )
}