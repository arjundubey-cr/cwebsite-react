import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import ReactDOM from "react-dom"
import './commondesign.css'
import About from './mainContent/About'

const Cse= (props)=> {

    const [mainContent,setContent]=useState('')

    const ChangeContent=(ContentName)=>
    {   
       if(ContentName==='About')
       {
           return <About/>
       }
       else if(ContentName===''){
           return <About/>
       }
       else{
           return <div>content not found</div>
       }
        
    }

    const handlediv = (e) => {
        // const a=e.target.getAttribute('Value')
        // const [mainContent,setState]=useState(e.target.getAttribute('value'))
        setContent(e.target.getAttribute('Value'))
        console.log(mainContent);
    }

    const backcolorchng=(e)=>
    {
        
    }

    const goback = () => {
        props.history.push('/');
    }
        return (
            <div className="screen">
                <div className="side">
                    <div className="sidebar">
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="About" value='About'><Link to='/cse' onClick={handlediv} value='About' className="active" onMouseOver={backcolorchng} >About</Link></li>
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="VisionAndMission" value='VisionAndMission'><Link to='/cse' onClick={handlediv} value='VisionAndMission' onMouseOver={backcolorchng}>Visions & mission</Link></li>
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="Faculty" value='Faculty'><Link to='/cse' onClick={handlediv} value="Faculty" onMouseOver={backcolorchng}>Faculty</Link></li>
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="Facilities" value='Facilities'><Link to='/cse' onClick={handlediv} value='Facilities' onMouseOver={backcolorchng}>Facilities</Link></li>
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="Achievement" value='Achievement'><Link to='/cse' onClick={handlediv} value='Achievement' onMouseOver={backcolorchng}>Achievements</Link></li>
                        <li className="sidebar-item card " onMouseOver={backcolorchng} id="CourseSyllabus" value='CourseSyllabus'><Link to='/cse' onClick={handlediv} value='CourseSyllabus' onMouseOver={backcolorchng}>Course Syllabus</Link></li>
                    </div>
                    <button className="btn goback btn-success m-3 ml-6 text-dark p-2 rounded" onClick={goback}>Go Back</button>
                </div>
                <div className="content ">
                    {ChangeContent(mainContent)}  

                </div>
            </div>

        )
}

export default Cse;