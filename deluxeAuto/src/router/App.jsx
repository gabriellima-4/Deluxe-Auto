import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../views/Home"
import SobreNosView from "../views/Sobre-Nos"
import MapaMundiView from "../views/MapaMundi"
import ShowroomItalia from "../views/Showrooms/Italia"
import ShowroomCoreia from "../views/Showrooms/Coreia-do-Sul"
import ShowroomSuecia from "../views/Showrooms/Suecia"
import ShowroomJapao from "../views/Showrooms/Japao"
import ShowroomEUA from "../views/Showrooms/EUA"
import ShowroomInglaterra from "../views/Showrooms/Inglaterra"
import ShowroomAlemanha from '../views/Showrooms/Alemanha'
import ViewConta from "../views/Conta"
import MenuDiamond from "../views/Diamond/Menu"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>

        <Route path="/worldmap" Component={MapaMundiView}/>

        <Route path="/worldmap/italia" Component={ShowroomItalia}/>

        <Route path="/worldmap/alemanha" Component={ShowroomAlemanha}/>

        <Route path="/worldmap/coreia" Component={ShowroomCoreia}/>

        <Route path="/worldmap/suecia" Component={ShowroomSuecia}/>

        <Route path="/worldmap/inglaterra" Component={ShowroomInglaterra}/>

        <Route path="/worldmap/japao" Component={ShowroomJapao}/>

        <Route path="/worldmap/eua" Component={ShowroomEUA}/>

        {/* <Route path="/contato" Component={}/> */}

        <Route path="/conta" Component={ViewConta}/>

        <Route path="/sobre-nos" Component={SobreNosView}/>

        <Route path="/diamond" Component={MenuDiamond}/>

        {/* <Route path="/diamond/classics" Component={}/>

        <Route path="/diamond/race" Component={}/> */}

      </Routes>
    </Router>
  )
}

export default App
