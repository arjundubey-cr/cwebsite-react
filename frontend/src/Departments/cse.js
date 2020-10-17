import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/About'
import * as Main from './mainContent/'
const CSE = (props) => {
  const [mainContent, setContent] = useState('')
  const handlediv = (e) => {
    // const a=e.target.getAttribute('Value')
    // const [mainContent,setState]=useState(e.target.getAttribute('value'))
    setContent(e.target.getAttribute('value'))
    console.log(mainContent)
  }

  const goback = () => {
    this.props.history.push('/')
  }
  return (
    <div className='screen'>
      <div className='side'>
        <div className='sidebar'>
          <li className='sidebar-item card '>
            <Link
              to='/cse'
              onClick={handlediv}
              value='About'
              className='active'>
              About
            </Link>
          </li>
          <li className='sidebar-item card '>
            <Link to='/cse' onClick={handlediv} value='VisionAndMission'>
              Visions & mission
            </Link>
          </li>
          <li className='sidebar-item card '>
            <Link to='/cse' onClick={handlediv} value='Faculty'>
              Faculty
            </Link>
          </li>
          <li className='sidebar-item card '>
            <Link to='/cse' onClick={handlediv} value='Facilities'>
              Facilities
            </Link>
          </li>
          <li className='sidebar-item card '>
            <Link to='/cse' onClick={handlediv} value='Achievement'>
              Achievements
            </Link>
          </li>
          <li className='sidebar-item card '>
            <Link to='/cse' onClick={handlediv} value='CourseSyllabus'>
              Course Syllabus
            </Link>
          </li>
        </div>
        <button
          className='btn goback btn-success m-3 ml-6 text-dark p-2 rounded'
          onClick={goback}>
          Go Back
        </button>
      </div>
      <div className='content '></div>
    </div>
  )

  // const ChangeContent=(ContentName)=>
  // {

  // }
}
export default CSE
