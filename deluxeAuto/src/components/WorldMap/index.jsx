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
                <Sphere stroke="#555" strokeWidth={0.2}/>
                <Graticule stroke="#555" strokeWidth={0.2}/>
                
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography 
                                key={geo.rsmKey} 
                                geography={geo}
                                style={{
                                    default: {fill: paises.includes(geo.id) ? "red" : "darkgray"},
                                    hover: { fill: paises.includes(geo.id) ? "darkred" : "darkblue"},
                                    pressed: {fill: "#ff047f"}
                                }}
                            />
                        ))
                    }
                </Geographies>
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