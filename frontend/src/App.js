import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import Cse from './Departments/cse.js'
import AdmissionScreen from './screens/AdmissionScreen'
import ScrollToTop from './ScrollToTop'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <ScrollToTop>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/cse' component={Cse} exact />
          <Route path='/admission' component={AdmissionScreen} exact />
        </ScrollToTop>
      </main>
      <Footer />
    </Router>
  )
}

export default App
