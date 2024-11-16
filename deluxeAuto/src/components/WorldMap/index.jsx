import { ComposableMap, Geographies, Geography, Marker, Sphere, Graticule } from "react-simple-maps"
import { Link } from "react-router-dom"
import "./styleWM.css"


const geoUrl =
  "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";


const paises = ["USA", "DEU", "ITA", "KOR", "SWE", "JPN", "GBR"]


export default function WorldMap(){
    return(
        <>
            <div className="Mapa">
                <ComposableMap projectionConfig={{rotate:[-10, 0, 0], scale: 147}} fill="#f5f5f5">
                    <Sphere stroke="#aaa" strokeWidth={0.2}/>
                    <Graticule stroke="#aaa" strokeWidth={0.2}/>
                    
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography 
                                    key={geo.rsmKey} 
                                    geography={geo}
                                    style={{
                                        default: {fill: paises.includes(geo.id) ? "#d80000" : "#f5f5f5"},
                                        hover: { fill: paises.includes(geo.id) ? "red" : "#606060"},
                                        pressed: {fill: "#"}
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    <Marker coordinates={[-82.000, 38.000]}>
                        <Link to={"/worldmap/eua"}>
                            <circle r={10} fill="#ddd" strokeWidth={2}/>
                            <image href="https://img.icons8.com/?size=100&id=fIgZUHgwc76e&format=png&color=000000" x="-10" y="-10" width="20" height="20"/>
                        </Link>
                    </Marker>
                </ComposableMap>
            </div>
            


























        <div className="peido">
            <Link to={"/worldmap/italia"}>
                Italia
            </Link>

            <Link to={"/worldmap/coreia"}>
                Coreia do Sul
            </Link>

            <Link to={"/worldmap/suecia"}>
                Suécia
            </Link>

            <Link to={"/worldmap/japao"}>
                Japão
            </Link>

            <Link to={"/worldmap/eua"}>
                Estados Unidos
            </Link>

            <Link to={"/worldmap/inglaterra"}>
                Inglaterra
            </Link>

            <Link to={"/worldmap/alemanha"}>
                Alemanha
            </Link>
        </div>
        

        <h2>Selecione um país.</h2>
        </>
    )
}