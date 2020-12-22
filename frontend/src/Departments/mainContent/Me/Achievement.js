import React from 'react'
import '../../commondesign.css'
import image1 from '../../images/me/Achievement/image1.jpg'
import image2 from '../../images/me/Achievement/image2.jpg'
import image3 from '../../images/me/Achievement/image3.jpg'
import image4 from '../../images/me/Achievement/image4.jpg'

const Achievement = (props) => {
  return (
    <div>
      <div className='introduction'>
        <h2 className='section-sub-heading text-uppercase text-center'>
          Achievements
        </h2>
      </div>
      <div className='me_achievement'>
        <div className='achievement mb-4'>
          <p className='description'>
            <strong>1.</strong> Hon'ble Vice Chancellor Prof. Alok Kumar Rai,
            University of Lucknow inaugurated "Sanitizing Chamber COVID-19" in
            old campus, designed by Er. Abhijeet Maurya & Team at Central
            Workshop, Faculty of Engineering & Technology.
          </p>
          <div className='me-achieve-img px-2'>
            <img src={image1} alt='' />
            <img src={image2} alt='' />
          </div>
        </div>
        <div className='achievement mb-4'>
          <h2 className='section-sub-heading'>Central Workshop</h2>
          <p className='description '>
            The workshop has been developed as a central facility for imparting
            training to B.Tech. students of Mechanical, Electrical, Civil,
            Computer Science & Engineering and Electronics & Communication
            Engineering in various shops. Training will also be imparted to
            Mechanical Engineering students in the subject of Manufacturing
            Process . Facility of workshop being utilized by students of all the
            departments for fabrications of their jobs. Workshop facility is
            being extended to the students beyond working hours on Saturday and
            Sunday for fabrication of their technical needs. Shops are well
            equipped with latest tools, equipments and machineries. A very
            senior and experienced faculty member is looking after the workshop
            as workshop superintendent. Central Workshop comprises of following
            shops which are well equipped with latest tools and equipments:
          </p>
          <strong>
            <ul className='description'>
              <li>Fitting Shop</li>
              <li>Welding Shop</li>
              <li>Sheet Metal Shop</li>
              <li>Carpentry Shop</li>
              <li>Pattern Making Shop</li>
              <li>Smithy Shop</li>
              <li>Foundry Shop</li>
              <li>Machine Shop</li>
            </ul>
          </strong>
          <div className='me-achieve-img px-2 me-workshop-img'>
            <img src={image3} alt='' />
            <img src={image4} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
