import './index.css'
import Footer from './Comonents/Footer'
import Hero from './Comonents/Hero'
import Program from './Comonents/Program'
import ProgramList from './Comonents/ProgramsList'
import Quizz from './Comonents/Quizz'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import programs from './Comonents/mockEndpoints/programs.js'


function App() {
  
  
  const scrollToElement = (programId) => {
    const element = document.getElementById(`${programId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <Route exact path = '/'>
        <Hero />
        <ProgramList programs = {programs} scrollToElement={scrollToElement}/>
        <Program programs = {programs}/>
      </Route>
      <Route exact path ='/quizz/:courseId/:courseName'>
        <Quizz />
      </Route>
    <Footer />
    
    </Router>
  )
}

export default App

/*
Code related to fetching data from database:

const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/Test/programs")
    .then(res => res.json())
    .then((result) => {
      setPrograms(result)
    })
  },[])
  
*/