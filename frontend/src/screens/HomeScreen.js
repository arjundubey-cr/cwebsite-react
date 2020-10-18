import React from 'react'
// import { LinkContainer } from 'react-router-bootstrap'
import { Row, Container } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
// importing all the branch logos
import DepartmentCard from '../components/DepartmentCard'
const HomeScreen = () => {
  return (
    <div>
      <Carasouel />
      <Container>
        <Row>
          <AboutHome />
        </Row>
        <Row>
          <DepartmentCard />
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
