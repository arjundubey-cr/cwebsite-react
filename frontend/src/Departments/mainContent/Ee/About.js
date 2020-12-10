import React from 'react'
import '../../commondesign.css'
import imgcsl from '../../images/ee/ControlSystemLab.jpg'
import imgeml1 from '../../images/ee/ElectricalMachineLab1.jpg'
import imgeml2 from '../../images/ee/ElectricalMachineLab2.jpg'
import imgemmil from '../../images/ee/EmmiLab.jpg'
import imgpsl1 from '../../images/ee/PowerSystemLab1.jpg'
import imgpsl2 from '../../images/ee/PowerSystemLab1.2.jpg'
import imgpsl3 from '../../images/ee/PowerSystemLab2.jpg'
import imgpsl4 from '../../images/ee/PowerSystemLab2.2.jpg'
import { ReactComponent as Youtube } from '../../../assets/logo/youtube.svg'

const About = (props) => {
  const data = [
    {
      src: imgcsl,
      alt: 'Control system lab',
    },
    {
      src: imgeml1,
      alt: 'Electrical machine lab 1',
    },
    {
      src: imgeml2,
      alt: 'Electrical machine lab 2',
    },
    {
      src: imgemmil,
      alt: 'Emmi lab',
    },
    {
      src: imgpsl1,
      alt: 'Power system lab 1',
    },
    {
      src: imgpsl2,
      alt: 'Power system lab 1.2',
    },
    {
      src: imgpsl3,
      alt: 'Power system lab 2',
    },
    {
      src: imgpsl4,
      alt: 'Power system lab 2.2',
    },
  ]
  return (
    <div className='about pl-2 pr-3 py-1'>
      <div className='social-handle mb-2 p-2 pl-1'>
        <div className='youtube'>
          <a
            className='a-text-none'
            href='https://www.youtube.com/channel/UCx22x0MSF37keTJOmnXQcUQ'
            alt='Computer Science youtube Channel'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube />
            <span className='ml-2 text-danger' style={{ fontSize: '1rem' }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className='description'>
        <div className='department-section-heading text-uppercase text-center '>
          DEPARTMENT OF Electrical Engineering
        </div>
        <hr className='section-underline' />
        <p className='pl-3'>
          The Department of Electrical Engineering offers 4 years undergraduate
          B.Tech. programme in Electrical Engineering. It has an intake of 66
          students. Besides teaching students of Electrical Engineering, the
          department also offers basic as well as advance level courses in
          Electrical Engineering to the students of various branches of the
          Faculty. It has a well qualified faculty and technical supporting
          staff. All the laboratories of the department are well equipped with
          modern equipments.
        </p>
      </div>
      <div className='course-offered'>
        <h2 className='section-sub-heading text-uppercase '>Courses offered</h2>
        <ul className='course-list description'>
          <li>
            <strong>B.Tech in Electrical Engineering(Duration- 4 years)</strong>
          </li>
          <li>
            <strong>
              B.Tech in Electrical Engineering -Lateral (Duration-3 years)
            </strong>
          </li>
        </ul>
      </div>
      <div className='focus-list description'>
        <p>
          The department covers all recent trends in Electrical Technology with
          prime focuses on:
        </p>
        <ul>
          <li>
            <strong>Power Generation Technology</strong>
          </li>
          <li>
            <strong>Power system dynamics and stability</strong>
          </li>
          <li>
            <strong>HVDC and FACTS</strong>
          </li>
          <li>
            <strong>AI Techniques and Optimization in power system</strong>
          </li>
          <li>
            <strong>Smart Grid Technologies and Microgrids</strong>
          </li>
          <li>
            <strong>SCADA and Enegy Audit</strong>
          </li>
          <li>
            <strong>Electrical Machines</strong>
          </li>
          <li>
            <strong>Electrical Vehicle</strong>
          </li>
          <li>
            <strong>Power Electronics and Electrical Drives</strong>
          </li>
          <li>
            <strong>Advanced Control System</strong>
          </li>
          <li>
            <strong>Electrical Measurement Techniques</strong>
          </li>
          <li>
            <strong>Power Quality</strong>
          </li>
          <li>
            <strong>Renewable Energy Technologies</strong>
          </li>
        </ul>
        <p>
          While maintaining its ancient, traditional bonds to electrical
          engineering and mathematics, the department has gradually collaborated
          with other disciplines. The true significance of Electrical
          Engineering is best appreciated through such associations.
        </p>
      </div>
      <div className='deparment'>
        <h2 className='section-sub-heading'>CONSULTANCY AREAS</h2>
        <div>
          <ul className='description'>
            <li>
              <strong>
                Design and cost estimation for Wiring of Buildings
              </strong>
            </li>
            <li>
              <strong>Testing of Dielectric Strength of Transformer Oil</strong>
            </li>
            <li>
              <strong>Energy Audit</strong>
            </li>
            <li>
              <strong>Design &amp; Cost estimation of Solar-PV System</strong>
            </li>
            <li>
              <strong>
                Design &amp; Cost estimation of Solar water heating system,
                Solar Cooker and Solar Drier
              </strong>
            </li>
            <li>
              <strong>Calibration of Ammeter &amp; Voltmeter </strong>
            </li>
          </ul>
        </div>
      </div>
      <div className='computer-center'>
        <h2 className='section-sub-heading text-uppercase '>Laboratories</h2>
        <div dir='auto' className='mx-3 description'>
          <div className='laboratory font-weight-bold' dir='auto'>
            1. Basic Electrical Engineering lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            2. Electrical Machines Lab - I
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            3. Electrical Machines Lab- II
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            4. Network Analysis and Synthesis Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            5. Electrical Measurement and Measuring Instruments Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            6. Power System Lab - I
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            7. Power System Lab - II
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            8. Control System Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            9. Electrical Design and Fabrication Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            10. Power Electronics Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            11. Switchgear and Protection Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            12. Electric Drives Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            13. Simulation Lab
          </div>
          <div className='laboratory font-weight-bold' dir='auto'>
            14. Instrumentation and Process control Lab
          </div>
        </div>
        <div className='computer-center-images'>
          <h2 className='intro text-uppercase tx-blue font-weight-bold'>
            Laboratories in Department of Computer Science & Engineering
          </h2>
          <div className='lab-image my-3'>
            {data.map((data, index) => (
              <img
                src={data.src}
                alt={`${data.alt}`}
                className='lab-inside img-border'
              />
            ))}{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
