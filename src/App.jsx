// import './App.css'
import { useState, useEffect } from "react"
import Greeting from './Greeting'
import Clock from './Clock'
import BitCoinRates from './BitCoinRates'
import UseReducer from './UseReducer'

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false)
  return (
    <main>
      {/* <BitCoinRates /> */}
      <UseReducer />
    </main>
  )
}
