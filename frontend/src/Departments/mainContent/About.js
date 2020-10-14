import React from 'react'
import '../commondesign.css'

const About = (props) => {
    return (

        <div>
            <div className="intro">
                <h2 className="intro text-uppercase tx-blue">
                    DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
                </h2>
                <p>
                    Department of Computer Science & Engineering is the largest department in Faculty of Engineering and Technology. The Department offers a 4 years course, B.Tech.in Computer Sc. & Engineering, with an intake of 90 students and 3 Year MCA course with an intake of 30 students. Now-a-days Computer Science & Engineering is the most sought-after branch in the country. The Department has very experienced and well qualified faculty members and several well equipped laboratories. All computer laboratories have LAN connectivity which facilitates internet usage. The department works with a mission to provide state of art facilities for high quality academic practices.
                </p>

            </div>
            <div className="department-list">
                <p>The department covers all recent trends in Computer Technology with prime focuses on:</p>
                <ul>
                    <li><strong>A</strong><strong>rtificial Intelligence</strong></li>
                    <li><strong>Digital Image Processing</strong></li>
                    <li><strong>Computer Networking &amp; Parallel Computing</strong></li>
                    <li><strong>Algorithm Design</strong></li>
                    <li><strong>Programming Languages and Software Engineering</strong></li>
                    <li><strong>Computer Organization &amp; Architecture </strong></li>
                    <li><strong>Data Analytics</strong></li>
                    <li><strong>Database Management</strong></li>
                    <li><strong>Web Technology</strong></li>
                    <li><strong>Machine Learning</strong></li>
                    <li><strong>Information &amp; Cyber Security</strong></li>
                    <li><strong>Internet of Things (IoT)</strong></li>
                </ul>
            </div>
        </div>
    )
}

export default About