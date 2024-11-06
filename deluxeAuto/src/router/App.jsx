import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" Component={}/>

        <Route path="/worldmap" Component={}/>

        <Route path="/worldmap/italia" Component={}/>

        <Route path="/worldmap/alemanha" Component={}/>

        <Route path="/worldmap/franca" Component={}/>

        <Route path="/worldmap/suecia" Component={}/>

        <Route path="/worldmap/inglaterra" Component={}/>

        <Route path="/worldmap/japao" Component={}/>

        <Route path="/worldmap/eua" Component={}/>

        <Route path="/contato" Component={}/>

        <Route path="/conta" Component={}/>

        <Route path="/sobre-nos" Component={}/>

        <Route path="/diamond" Component={}/>

        <Route path="/diamond/classics" Component={}/>

        <Route path="/diamond/race" Component={}/>

      </Routes>
    </Router>
  )
}

export default App
