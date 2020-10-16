import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './commondesign.css'
class Cse extends Component {

    constructor(props)
    {
        super(props)
        this.hello=React.createRef()
    }
    handlediv=()=>
    {
            // this.hello.current=<h1>hi</h1>
    }
    render() {
        return (
            <div>
                <div className="sidebar">
                    <li className="sidebar-item card bg-secondary"><Link to='' className="active">About</Link></li>
                    <li className="sidebar-item card bg-secondary"><Link to=''>Visions & mission</Link></li>
                    <li className="sidebar-item card bg-secondary"><Link to='/cse' onClick={this.handlediv}>Faculty</Link></li>
                    <li className="sidebar-item card bg-secondary"><Link to=''>Facilities</Link></li>
                    <li className="sidebar-item card bg-secondary"><Link to=''>Achievements</Link></li>
                    <li className="sidebar-item card bg-secondary"><Link to=''>Course Syllabus</Link></li>
                </div>
                <div>
                    <h4 className="text-right hello" ref={this.hello}>hello</h4>
                </div>
            </div>

        )
    }
}

export default Cse;