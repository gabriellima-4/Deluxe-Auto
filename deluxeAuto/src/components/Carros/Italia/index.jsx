import "./styleIT.css"
import LogoFerrari from "../../../assets/logos/ferrari.png"
import LogoLambo from "../../../assets/logos/Lamborghini.jpg"
import Roma from "../../../assets/images/normal/Roma.webp"
import Urus from "../../../assets/images/normal/Urus.jpeg"

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
                                <p><img src="Icones/shifter.png" alt="Câmbio"/>AT 8 Marchas</p>
                                <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Rosso Corsa</p>
                            </div>
                            <h4 class="preco">R$ 3.600.000,00</h4>
                        </div>
                    </div>

                    <div class="Card-carro">
                        <img className="fotoprincipal" src={Urus}  alt="Lamborghini Urus S"/>
                        <div className="Container">
                            <h4 className="logo-nome" ><img src={LogoLambo} alt=""/>Lamborghini Urus S</h4>
                            <div className="Info">
                                <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>666cv | 4.0L V8</p>
                                <p><img src="Icones/shifter.png" alt="Câmbio"/>AT|MT 8 Marchas</p>
                                <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Grigio Telesto</p>
                            </div>
                            <h4 class="preco">R$ 3.950.000,00</h4>
                        </div>
                    </div>
            </div>


        </section>
        </>
    )
}