import React from 'react'
import Home from "./components/Home"
import SearchResult from "./components/SearchResult"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/'  element={<Home />}/>
      <Route  path='/'  element={<SearchResult />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App