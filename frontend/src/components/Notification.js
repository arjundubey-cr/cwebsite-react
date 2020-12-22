import React, { useState } from 'react'
const Notification = () => {
  return (
    <div className='notification-tab'>
      <div className='title'>
        <p className='glow'>News and Alerts</p>
      </div>
      <div className='notifications'>
        <marquee behavior='scroll' direction='left' scrolldelay='10'>
          <ul type='' className='notice'>
            <li>
              <a href='https://lkouniv.ac.in/site/writereaddata/UploadNews/pdf/C_202012221818040532.pdf'>
                Online Faculty Development Programme on Entrepreneurial Research
                to be organized from 5-18 January 2021.
              </a>
            </li>
            <li>
              <a href='https://lkouniv.ac.in/site/writereaddata/UploadNews/pdf/C_202012191117199279.pdf'>
                Regarding invitation of webinar to be held at 4:00 P.M. on 20
                December, 2020 (under Mission Shakti) on “creating awareness of
                safety and security of children in the society”
              </a>
            </li>
          </ul>
        </marquee>
      </div>
      <div className='show'>
        <a href='https://bit.ly/3nHlWiZ'>View all</a>
      </div>
    </div>
  )
}

export default Notification
