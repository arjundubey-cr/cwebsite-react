import React from 'react'
import { Row, Container } from 'react-bootstrap'
import Carasouel from '../components/Carasouel'
import AboutHome from '../components/AboutHome'
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
        <Row></Row>
      </Container>
    </div>
  )
}

export default HomeScreen
