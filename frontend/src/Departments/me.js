import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/Me/About'
import Faculty from './mainContent/Me/Faculty'
import Achievement from './mainContent/Me/Achievement'
import CourseSyllabus from './mainContent/Me/syllabus'
import UpScrollButton from './UpScrollButton'

const Me = (props) => {
  const [mainContent, setContent] = useState('')

  const ChangeContent = (ContentName) => {
    if (ContentName === 'About') {
      return <About />
    } else if (ContentName === '') {
      return <About />
    } else if (ContentName === 'Faculty') {
      return <Faculty />
    } else if (ContentName === 'Achievement') {
      return <Achievement />
    } else if (ContentName === 'CourseSyllabus') {
      return <CourseSyllabus />
    } else {
      return <div>content not found</div>
    }
  }

  const handlediv = (e) => {
    setContent(e.target.getAttribute('Value'))
    const a = document.getElementsByClassName('item-nav')
    a[0].classList.remove('show')
  }

  const goback = () => {
    props.history.push('/')
  }

  return (
    <div className='screen'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-blue nav-fixed-top'>
        <button
          className='navbar-toggler collapsed mr-auto '
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExample05'
          aria-controls='navbarsExample05'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='navbar-collapse collapse item-nav'
          id='navbarsExample05'
          style={{}}>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link
                to='/me'
                className='nav-link sidebar-item active'
                onClick={handlediv}
                value='About'>
                About
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/me' className="nav-link sidebar-item" onClick={handlediv} value='VisionAndMission' >Visions & mission</Link>
</li> */}
            <li className='nav-item'>
              <Link
                to='/me'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='Faculty'>
                Faculty
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/me' className="nav-link sidebar-item" onClick={handlediv} value='CourseOffered' >Course Offered</Link>
</li> */}
            <li className='nav-item'>
              <Link
                to='/me'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='Achievement'>
                Achievements
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/me'
                className='nav-link sidebar-item'
                onClick={handlediv}
                value='CourseSyllabus'>
                Course Syllabus
              </Link>
            </li>
            {/* <li className="nav-item">
    <Link to='/me' className="nav-link sidebar-item" onClick={handlediv} value='Resources' >Resources</Link>
</li> */}
          </ul>
        </div>

        <div></div>
      </nav>
      <div className='content container pl-3 pr-5 pt-3 pb-5 position-realtive'>
        {ChangeContent(mainContent)}
        <UpScrollButton />
      </div>
    </div>
  )
}

export default Me
