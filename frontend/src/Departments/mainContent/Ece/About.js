import React from 'react'
import '../../commondesign.css'
import Image1 from '../../images/ece/image1.jpg'
import { ReactComponent as Youtube } from '../../../assets/logo/youtube.svg'

const About = (props) => {
  return (
    <div className='about pl-2 pr-3 py-1'>
      <div className='container social-handle mb-2 p-2 pl-1'>
        <div className='youtube'>
          <a
            className='a-text-none'
            href='https://www.youtube.com/channel/UCPW7_PsXavmSgJ-JMhMufEQ'
            alt='Computer Science youtube Channel'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube />
            <span
              className='ml-2 font-weight-bold text-danger'
              style={{ fontSize: '1rem' }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className='introduction'>
        <div className='text-uppercase container-fluid text-center department-section-heading'>
          Department of Electronics & Communication Engineering
        </div>
        <hr className='section-underline' />
        <p className='description container'>
          The Department of Electronics & Communication Engineering offers 4
          years undergraduate B.Tech. programme in Electronics & Communication
          Engineering. It has an intake of 66 students. Besides teaching
          students of Electronics & Communication Engineering, the department
          also offers basic as well as advance level courses in Electronics
          Engineering to the students of various branches of the Faculty. It has
          a well qualified faculty and technical supporting staff. All the
          laboratories of the department are well equipped with modern
          equipments.
        </p>
      </div>
      <div className='course-offered container'>
        <h2 className='text-uppercase tx-blue section-sub-heading'>
          Courses offered
        </h2>
        <ul className='course-list description'>
          <li>
            <strong>
              B.Tech. in Electronics and Communication Engineering (Duration-4
              years)
            </strong>
          </li>
          <li>
            <strong>
              B.Tech in Electronics and Communication Engineering -Lateral
              (Duration-3 years)
            </strong>
          </li>
        </ul>
      </div>

      <div className='department container'>
        <h2 className='section-sub-heading text-uppercase tx-blue'>
          CONSULTANCY AREAS
        </h2>
        <div className='description'>
          <ul>
            <li>
              <strong>1. Automation &amp; Calibration</strong>
            </li>
            <li>
              <strong>2. Analog, Digital Circuit &amp; PCB Design</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className='computer-center container'>
        <h2 className='section-sub-heading text-uppercase tx-blue'>
          Computer Center
        </h2>
        <p className='description'>
          This centre has two servers, 70 nodes with latest configurations along
          with necessary software and printers etc to meet the needs of the
          students from all other branches. All the computers are connected
          through LAN. There is internet facility in the centre.
        </p>
        <h2 className='section-sub-heading  text-uppercase tx-blue'>
          Laboratories
        </h2>
        <div dir='auto' className='description'>
          <h4 className=' font-weight-bold' dir='auto'>
            1. Solid State Devices Lab&nbsp;
          </h4>
          <h4 className=' font-weight-bold' dir='auto'>
            2. Signals &amp; Systems Lab
          </h4>
          <h4 className=' font-weight-bold' dir='auto'>
            3. Digital Circuit &amp; Logic Design Lab
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            4. Electronics Workshop &amp; PCB Design Lab
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            5. Electronics Instrumentation &amp; Measurement Lab
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            6. Numerical Technique Lab
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            7. Communication Lab-I &amp; Lab-II
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            8. Microprocessor &amp; Microcontroller Lab
          </h4>
          <h4 className='font-weight-bold' dir='auto'>
            9. Integrated circuit Lab
          </h4>
          <h4 className=' font-weight-bold' dir='auto'>
            10. Advance Electronics Design Lab
          </h4>
          <h4 className=' font-weight-bold' dir='auto'>
            11. Microwave Engineering Lab
          </h4>
        </div>
        <div className='lab-image my-2'>
          <img
            src={Image1}
            alt='Electronics lab'
            className='lab-inside img-border mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default About
