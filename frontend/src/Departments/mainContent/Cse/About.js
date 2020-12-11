import React from 'react'
import '../../commondesign.css'
import ComputerLab1 from '../../images/cse/computer_lab_1.jpg'
import ComputerLab2 from '../../images/cse/computer_lab_2.jpg'
import ComputerLab3 from '../../images/cse/computer-lab-3.jpg'
import matlab from '../../images/cse/matlab.jpg'
import NetworkLab from '../../images/cse/network-lab.jpg'
import { ReactComponent as Youtube } from '../../../assets/logo/youtube.svg'

const About = (props) => {
  return (
    <>
      <div className='about pl-2 pr-1 py-1'>
        <div className=' container social-handle mb-2 p-2 pl-1'>
          <div className='youtube align-items-center'>
            <a
              className='a-text-none d-flex align-items-center'
              href='https://www.youtube.com/channel/UCYYdzJx1d_Ktjg9HHpuhJuQ/featured?disable_polymer=1'
              alt='Computer Science youtube Channel'
              target='_blank'
              rel='noopener noreferrer'>
              <Youtube />
              <span
                className='ml-2 text-danger'
                style={{ fontSize: '1.2rem', fontWeight: 500 }}>
                Youtube Channel
              </span>
            </a>
          </div>
        </div>
        <div className='introduction'>
          <div className='text-uppercase container-fluid text-center department-section-heading'>
            DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
          </div>
          <hr className='section-underline' />
          <p className='description container'>
            Department of Computer Science & Engineering is the largest
            department in Faculty of Engineering and Technology. The Department
            offers a 4 years course, B.Tech.in Computer Sc. & Engineering, with
            an intake of 133 students and 3 Year MCA course with an intake of 33
            students. Now-a-days Computer Science & Engineering is the most
            sought-after branch in the country. The Department has very
            experienced and well qualified faculty members and several well
            equipped laboratories. All computer laboratories have LAN
            connectivity which facilitates internet usage. The department works
            with a mission to provide state of art facilities for high quality
            academic practices.
          </p>
        </div>
        <div className='course-offered container'>
          <h2 className='text-uppercase tx-blue section-sub-heading'>
            COURSES OFFERED
          </h2>
          <ul className='course-list description'>
            <li>
              <strong>
                B.Tech in Computer Science and Engineering(Duration-4 years)
              </strong>
            </li>
            <li>
              <strong>
                B.Tech in Computer Science and Engineering - Lateral (Duration-3
                years)
              </strong>
            </li>
            <li>
              <strong>BCA (Duration-3 Years)</strong>
            </li>
            <li>
              <strong>MCA-Lateral (Duration-2 Years)</strong>
            </li>
          </ul>
        </div>
        <div className='focus-list description container'>
          <p>
            The department covers all recent trends in Computer Technology with
            prime focuses on:
          </p>
          <ul>
            <li>
              <strong>Artificial Intelligence</strong>
            </li>
            <li>
              <strong>Digital Image Processing</strong>
            </li>
            <li>
              <strong>Computer Networking &amp; Parallel Computing</strong>
            </li>
            <li>
              <strong>Algorithm Design</strong>
            </li>
            <li>
              <strong>Programming Languages and Software Engineering</strong>
            </li>
            <li>
              <strong>Computer Organization &amp; Architecture </strong>
            </li>
            <li>
              <strong>Data Analytics</strong>
            </li>
            <li>
              <strong>Database Management</strong>
            </li>
            <li>
              <strong>Web Technology</strong>
            </li>
            <li>
              <strong>Machine Learning</strong>
            </li>
            <li>
              <strong>Information &amp; Cyber Security</strong>
            </li>
            <li>
              <strong>Internet of Things (IoT)</strong>
            </li>
          </ul>
          <p>
            While maintaining its ancient, traditional bonds to electrical
            engineering and mathematics, the department has gradually
            collaborated with other disciplines. The true significance of
            computer science and Engineering is best appreciated through such
            associations.
          </p>
        </div>
        <div className='department container'>
          <h2 className='text-uppercase section-sub-heading tx-blue'>
            CONSULTANCY AREAS
          </h2>
          <div className='description'>
            <ul>
              <li>Data Mining</li>
              <li>Data Analysis</li>
              <li>Ethical Hacking</li>
              <li>Wireless Sensor Network</li>
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Cryptography &amp; Network Security</li>
              <li>Algorithms &amp; Data Structure</li>
              <li>Program Analysis &amp; Optimization</li>
              <li>Requirement Analysis &amp; Gathering</li>
              <li>Documentation of Web Apps &amp; Android Apps</li>
              <li>Multi Agent System &amp; Symentic Web</li>
            </ul>
          </div>
        </div>
        <div className='computer-center'>
          <h2 className='container text-uppercase section-sub-heading tx-blue'>
            COMPUTER CENTRE
          </h2>
          <p className='computer-center-description description container'>
            This centre has two servers, 70 nodes with latest configurations
            along with necessary software and printers etc to meet the needs of
            the students from all other branches. All the computers are
            connected through LAN. There is internet facility in the centre.
          </p>
          <div className='commputer-center-images'>
            <h2 className='text-center text-uppercase tx-blue section-sub-sub-heading container'>
              Laboratories
            </h2>
            <div className='lab-image my-3 container mx-auto'>
              <img
                src={ComputerLab1}
                alt='ComputerLab1'
                className='lab-inside img-border'
              />
              <img
                src={ComputerLab2}
                alt='ComputerLab2'
                className='lab-inside img-border'
              />
              <img
                src={ComputerLab3}
                alt='ComputerLab3'
                className='lab-inside img-border'
              />
              <img
                src={matlab}
                alt='matlab'
                className='lab-inside img-border'
              />
              <img
                src={NetworkLab}
                alt='NetworkLab'
                className='lab-inside img-border'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
