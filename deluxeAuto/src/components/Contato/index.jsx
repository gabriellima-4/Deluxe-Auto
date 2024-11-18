import "./styleCT.css"
import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/gabriellima-4/mapa-brasil-data/refs/heads/main/brazil-states.json"

// const MapaBrasil = "https://raw.githubusercontent.com/VictorCazanave/svg-maps/refs/heads/master/packages/brazil/brazil.svg";

export default function Contatos(){
    return(
        <>
            <section id="contato">
                <div className="fileira-mapa-info">
                    <div className="mapaBrasil">
                        <ComposableMap  projection="geoMercator" projectionConfig={{rotate: [-10, 0, 0], scale: 720, center: [-64, -15]}}>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography key={geo.rsmKey} geography={geo}
                                        style={{default: { fill: "#f5f5f5", outline: "none" },
                                        hover: { fill: "#aaa", outline: "none" },
                                        pressed: { fill: "#777", outline: "none" }}}/>
                                    ))
                                }
                            </Geographies>
                            {/* Brasília */}
                            <Marker coordinates={[-48.000, -14.400]}>
                                <image href="https://img.icons8.com/?size=100&id=7880&format=png&color=d80000" x="-10" y="-10" width="30" height="30"/>
                            </Marker>

                            {/* São Paulo */}
                            <Marker coordinates={[-46.900, -22.400]}>
                                <image href="https://img.icons8.com/?size=100&id=7880&format=png&color=d80000" x="-10" y="-10" width="30" height="30"/>
                            </Marker>

                            {/* Teresina */}
                            <Marker coordinates={[-43.000, -5.100]}>
                                <image href="https://img.icons8.com/?size=100&id=7880&format=png&color=d80000" x="-10" y="-10" width="30" height="30"/>
                            </Marker>

                            {/* Balneário Camboriú */}
                            <Marker coordinates={[-49.100, -26.500]}>
                                <image href="https://img.icons8.com/?size=100&id=7880&format=png&color=d80000" x="-10" y="-10" width="30" height="30"/>
                            </Marker>
                        </ComposableMap>
                    </div>



                    <div className="informacoes">
                        <h2>Nossos estabelecimentos físicos</h2>

                        <div className="local">
                            <h3>Brasília (DF)</h3>
                            <p>Telefone: (61) 9xxxx-xxxx</p>
                        </div>

                        <div className="local">
                            <h3>São Paulo (SP)</h3>
                            <p>Telefone: (11) 9xxxx-xxxx</p>
                        </div>

                        <div className="local">
                            <h3>Teresina (PI)</h3>
                            <p>Telefone: (86)xxxx-xxxx</p>
                        </div>

                        <div className="local">
                            <h3>Balneário Camboriú (SC)</h3>
                            <p>Telefone: (48)xxxx-xxxx</p>
                        </div>

                        <div className="gerais">
                            <h4>Informações Gerais</h4>
                            <p id="email-institucional">contato@deluxeauto.com</p>
                            <p id="react">Site feito em: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/></p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}