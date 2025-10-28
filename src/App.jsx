import { useState } from 'react'
import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'

function App() {


  return (
    <>
      <div>
        <CityList />
        <CityForecast />
      </div>
    </>
  )
}

export default App
