import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../views/Home"
import SobreNosView from "../views/Sobre-Nos"
import MapaMundiView from "../views/MapaMundi"
import ShowroomItalia from "../views/Showrooms/Italia"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>

        <Route path="/worldmap" Component={MapaMundiView}/>

        <Route path="/worldmap/italia" Component={ShowroomItalia}/>

        {/* <Route path="/worldmap/alemanha" Component={}/>

        <Route path="/worldmap/coreia-do-sul" Component={}/>

        <Route path="/worldmap/suecia" Component={}/>

        <Route path="/worldmap/inglaterra" Component={}/>

        <Route path="/worldmap/japao" Component={}/>

        <Route path="/worldmap/eua" Component={}/>

        <Route path="/contato" Component={}/>

        <Route path="/conta" Component={}/> */}

        <Route path="/sobre-nos" Component={SobreNosView}/>

        {/* <Route path="/diamond" Component={}/>

        <Route path="/diamond/classics" Component={}/>

        <Route path="/diamond/race" Component={}/> */}

      </Routes>
    </Router>
  )
}

export default App
