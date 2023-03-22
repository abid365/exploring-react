import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Countries></Countries>
    </div>
  )
}
//todo: creating component
/* function LoadCountries(){
  const [countries, setCountries] = useState([])
  //todo: in useEffect there are two param, one is anonymous FN another is  an empty array
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])
  return(
    <div>
      <h1>Visiting Every Country Of the world</h1>
      <h1>Available Countries:{countries.length} </h1>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name:{props.name} </h2>
      <h4>Population:{props.population}</h4>
    </div>
  )
}
 */

export default App
