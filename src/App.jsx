import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './context/context.js'
import { useState, useEffect } from 'react'


import Navbar from './componentes/Navbar.jsx'
import Home from './views/Home.jsx'
import Pokemones from './views/Pokemones.jsx'
import Pokemon from './views/Pokemon.jsx'

function App() {
  const [data, setData] = useState([])
  const globalState = { data }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((e) => console.log(e))
  }, [])


  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pokemones' element={<Pokemones />}></Route>
            <Route path='/Pokemones/:name' element={<Pokemon />}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App
