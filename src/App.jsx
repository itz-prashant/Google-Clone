import React from 'react'
import Home from "./components/Home"
import SearchResult from "./components/SearchResult"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from './utils/ContextApi'

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Home />}/>
        <Route  path='/:query/:startIndex'  element={<SearchResult />}/>
      </Routes>
      </BrowserRouter>
    </AppContext> 
  )
}

export default App