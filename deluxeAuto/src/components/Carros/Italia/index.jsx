import "./styleIT.css"

export default function CarrosItalia(){
    return (
        <>
        <section id="Showroom">
            <div className="paisBandeira">
                <h2>Itália</h2>
                <img src="https://img.icons8.com/?size=100&id=BV2gY6QOLTF9&format=png&color=000000" alt="" />
            </div>

            <div className="Italia-Fileira1">

                    <div class="Ferrari-Roma-Card">
                        <img className="fotoprincipal" src="Fotos/Roma.webp" alt="Ferrari Roma"/>
                        <div className="Roma-Container">
                            <h4 className="logo-nome" ><img src="Logos/Ferrari.png" alt="Ferrari Logo"/> Ferrari Roma</h4>
                            <div clasSName="Roma-Info">
                                <p><img src="https://img.icons8.com/?size=100&id=zPV5akQ5KlKf&format=png&color=000000" alt="Motor" width="16px"/>620cv | 3.9L V8</p>
                                <p><img src="Icones/shifter.png" alt="Câmbio"/>AT 8 Marchas</p>
                                <p><img src="https://img.icons8.com/?size=100&id=25945&format=png&color=000000" width="16px" alt="Paleta Cor"/>Rosso Corsa</p>
                            </div>
                            <h4 class="preco">R$ 3.600.000,00</h4>
                        </div>
                    </div>

                    <div class="Lamborghini-Urus-Card">
                        <img className="fotoprincipal" src="Fotos/Urus.jpeg"  alt="Lamborghini Urus S"/>
                        <div className="Urus-Container">
                            <h4 className="logo-nome" ><img src="Logos/Lamborghini.jpg" alt="Lamborghini Logo"/>Lamborghini Urus S</h4>
                            <div className="Urus-Info">
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