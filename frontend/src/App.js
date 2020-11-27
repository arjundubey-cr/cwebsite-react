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
import Faculty from './Departments/mainContent/Cse/Faculty.js'

import AdmissionScreen from './screens/AdmissionScreen'
import ScrollToTop from './ScrollToTop'
import Tpc from './screens/Tpc'
import StudentLife from './screens/StudentLife'
import AboutScreen from './screens/AboutScreen'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <ScrollToTop>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/cse' component={Cse} exact />
          <Route path='/cse/faculty' component={Faculty} exact />
          <Route path='/ece' component={Ece} exact />
          <Route path='/ce' component={Ce} exact />
          <Route path='/me' component={Me} exact />
          <Route path='/ee' component={Ee} exact />
          <Route path='/ash' component={Ash} exact />
          <Route path='/admission' component={AdmissionScreen} exact />
          <Route path='/tpc' component={Tpc} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/studentlife' component={StudentLife} exact />
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  )
}

export default App
