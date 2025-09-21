
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {


  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
    </>
  )
}

export default App
