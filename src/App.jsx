import './App.css'
import Footer from './Comonents/Footer'
import Hero from './Comonents/Hero'
import Program from './Comonents/Program'
import ProgramList from './Comonents/ProgramsList'
import Quizz from './Comonents/Quizz'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import programs from './Comonents/mockEndpoints/programs.js'


function App() {
  
  
  return (
    <Router>
      <Route exact path = '/'>
        <Hero />
        <ProgramList programs = {programs}/>
        <Program programs = {programs}/>
      </Route>
      <Route exact path ='/quizz'>
        <Quizz />
      </Route>
    <Footer />
    
    </Router>
  )
}

export default App

/*
Code related to fetching data from database:

import { useEffect, useState } from 'react'


const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/Test/programs")
    .then(res => res.json())
    .then((result) => {
      setPrograms(result)
    })
  },[])
  
*/