import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/cse/About'
import Faculty from './mainContent/cse/Faculty'

const Cse = (props) => {

    const [mainContent, setContent] = useState('')

    const ChangeContent = (ContentName) => {
        if (ContentName === 'About') {
            return <About />
        }
        else if (ContentName === '') {
            return <Faculty />
        }
        else if(ContentName==='Faculty')
        {
            return <Faculty/>
        }
        else {
            return <div>content not found</div>
        }

    }

    const handlediv = (e) => {
        // const a=e.target.getAttribute('Value')
        // const [mainContent,setState]=useState(e.target.getAttribute('value'))
        setContent(e.target.getAttribute('Value'))
        console.log(mainContent);
    }

    const goback = () => {
        props.history.push('/');
    }
    return (
        <div className="screen">
            <div className="side">
                <div className="sidebar">
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='About' className="active">About</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='VisionAndMission' >Visions & mission</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value="Faculty" >Faculty</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='CourseOffered' >Course Offered and Thrust Areas</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='Achievement' >Achievements</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='CourseSyllabus' >Course Syllabus</Link></li>
                    <li className="sidebar-item card "  ><Link to='/cse' onClick={handlediv} value='Resources' >Resources</Link></li>
                </div>
                <button className="btn goback btn-success m-3 ml-6 text-dark p-2 rounded" onClick={goback}>Go Back</button>
            </div>
            <div className="content bg-light">
                {ChangeContent(mainContent)}

            </div>
        </div>

    )
}

export default Cse;