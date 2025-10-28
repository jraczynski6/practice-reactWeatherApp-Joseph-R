import { useState } from 'react'
import './App.css'
import CityList from './components/CityList'
import CityForecast from './components/CityForecast'

function App() {

const [selectedCity, setSelectedCity] = useState(null);
// TODO Manage state for selectedCity
  return (
    <>
      <div>
        <CityList onSelectedCity={setSelectedCity} />
        <CityForecast selectedCity={selectedCity} />
      </div>
    </>
  )
}

export default App
