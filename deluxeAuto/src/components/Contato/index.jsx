import "./styleCT.css"
import { ComposableMap, Geographies, Geography, Marker, Sphere, Graticule} from "react-simple-maps"

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
                                        style={{default: { fill: "#D6D6DA", outline: "none" },
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
                </div>
            </section>
            
        </>
    )
}