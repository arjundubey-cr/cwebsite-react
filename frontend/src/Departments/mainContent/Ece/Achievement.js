import React from 'react'
import '../../commondesign.css'
import softpro from '../../images/ece/Achievements/softpro.jpg'

const Achievement = (props) => {
  return (
    <div className='container pl-3 pr-3'>
      <div className='introduction'>
        <h2 className='section-sub-heading text-center text-uppercase tx-blue'>
          Achievements
        </h2>
      </div>
      <div className='achievement-list'>
        <div className='achievement pl-3'>
          <p className='mb-1 section-sub-sub-heading'>
            Workshop on Embedded Systems & IOT
          </p>
          <div className='achieve-img'>
            <img src={softpro} alt='' className='' />
          </div>
          <p className='ml-1 pt-1 pl-2'>
            <strong>Duration:</strong>&nbsp;3-4&nbsp;Hours
          </p>
          <div className='content description'>
            <h4 className='font-weight-bolder'>Content:</h4>
            <h5>
              <strong>Introduction to Embedded Systems</strong>
            </h5>
            <ol className='pl-4'>
              <li>What is Internet of Things?</li>
              <li>Background &amp; Significance</li>
              <li>Developing &amp; Implementing IoT Technologies</li>
              <li>IoT for Weather Monitoring</li>
              <li>Scope of IoT in Machine Learning</li>
              <li>Scope of IoT in Artificial Intelligence</li>
              <li>Distributed Computing for IoT</li>
            </ol>
            <h5>
              <strong>Introduction to the Internet of Things</strong>
            </h5>
            <ol className='pl-4'>
              <li>What is Internet of Things?</li>
              <li>Background &amp; Significance</li>
              <li>Developing &amp; Implementing IoT Technologies</li>
              <li>IoT for Weather Monitoring</li>
              <li>Scope of IoT in Machine Learning</li>
              <li>Scope of IoT in Artificial Intelligence</li>
              <li>Distributed Computing for IoT</li>
            </ol>
            <h5>
              <strong>Architecture of IoT</strong>
            </h5>
            <ol className='pl-4'>
              <li>Introduction</li>
              <li>Network Architecture of IoT</li>
              <li>Protocols</li>
            </ol>
            <h5>
              <strong>Introduction to Sensors</strong>
            </h5>
            <ol className='pl-4'>
              <li>Introduction</li>
              <li>Sensor Calibration</li>
              <li>Sensor Maintenance</li>
              <li>Sensor Deployment</li>
              <li>Powering options for Sensors</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
