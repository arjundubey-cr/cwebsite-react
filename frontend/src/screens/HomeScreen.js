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
        <Row></Row>
        <Row>
          <DepartmentCard />
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
