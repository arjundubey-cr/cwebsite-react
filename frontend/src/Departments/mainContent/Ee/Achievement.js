import React from 'react'
import '../../commondesign.css'
import image1 from '../../images/ee/Achievements/image1.jpg'
import image2 from '../../images/ee/Achievements/image2.jpg'

const Achievement = (props) => {
  return (
    <div className='container '>
      <div className='introduction'>
        <h2 className='section-sub-heading text-center text-uppercase'>
          Achievements
        </h2>
        <hr className='section-underline' />
      </div>
      <div className='achievement description mt-3'>
        <p className='mb-1'>
          <strong>
            1. Brief Report On Workshop Conducted On PLC and SCADA
          </strong>
        </p>
        <p className='ml-1 pl-2'>
          A workshop was organized on{' '}
          <strong>Programmable Logic Control (PLC)</strong> and
          <strong>
            Supervisory Control and Data Acquisition (SCADA)
          </strong> by{' '}
          <strong>
            Electrical Engineering department of FOET, Lucknow university
          </strong>{' '}
          on 18/10/2019. This workshop was done by{' '}
          <strong>SOFCON India Pvt. Ltd</strong>. The aim of the workshop was to
          introduce students with the practical knowledge of industrial
          automation and how they work. PLC is a digital computer which is used
          to control different electrical processes in industries. In this
          workshop students were made familiar with the working of different
          <strong>SOFCON PLC’s and SCADA software</strong> which are used in
          different processes of industries. This workshop was very beneficial
          for the students. We strive to organize many such workshops in near
          future, for the benefit of students.
        </p>
        <div className='achieve-img'>
          <img
            src={image1}
            alt='jan express news cutting'
            className='mb-3 electrical-achieve-img'
          />
          <img
            src={image2}
            alt='Dainik jaagran news cutting'
            className='mb-3 electrical-achieve-img'
          />
        </div>
      </div>
    </div>
  )
}

export default Achievement
