import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Cse from './Departments/cse.js'
import Ece from './Departments/ece.js'
import Ce from './Departments/ce.js'
import Ee from './Departments/ee.js'
import Me from './Departments/me.js'
import Ash from './Departments/ash.js'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/cse' component={Cse} exact />
        <Route path='/Ece' component={Ece} exact />
        <Route path='/Ce' component={Ce} exact />
        <Route path='/Me' component={Me} exact />
        <Route path='/Ee' component={Ee} exact />
        <Route path='/Ash' component={Ash} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
