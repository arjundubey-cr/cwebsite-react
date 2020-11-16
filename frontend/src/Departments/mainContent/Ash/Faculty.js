import React from 'react'
import '../../commondesign.css'
import imgakt from '../../images/ash/faculty/ANUPAMKUMARTRIPATHI.jpg'
import imgdg from '../../images/ash/faculty/DEEPAKGUPTA.jpg'
import imgkv from '../../images/ash/faculty/KHUSHBOOVERMA.jpg'
import imgrp from '../../images/ash/faculty/RACHANAPATHAK.jpg'
import imgrps from '../../images/ash/faculty/RANVIJAYPRATAPSINGH.jpg'
import imgss from '../../images/ash/faculty/SAVYASACHI.jpg'
import imgsb from '../../images/ash/faculty/SHASHIBALA.jpg'
import imgis from '../../images/ash/faculty/ISHASINGH.jpg'
import imgks from '../../images/ash/faculty/KAUMUDISINGH.jpg'

const Faculty = () => {
  const data = [
    {
      name: 'Dr. ANUPAM KUMAR TRIPATHI',
      image: imgakt,
      post: 'Assistant Professor',
      phoneNum: '7905287870',
      email: 'hpandey010@gmail.com',
    },
    {
      name: 'Dr. DEEPAK GUPTA',
      image: imgdg,
      post: 'Assistant Professor',
      phoneNum: '7524086772',
      email: 'itsakanksha9@gmail.com',
    },
    {
      name: 'Dr. KHUSHBOO VERMA',
      image: imgkv,
      post: 'Assistant Professor',
      phoneNum: '7376252768',
      email: 'anshu.singh6225@gmail.com',
    },

    {
      name: 'Dr. RACHANA PATHAK',
      image: imgrp,
      post: 'Assistant Professor',
      phoneNum: '7275711509',
      email: 'chandrabhan98@gmail.com',
    },

    {
      name: 'Dr. RANVIJAY PRATAP SINGH',
      image: imgrps,
      post: 'Assistant Professor',
      phoneNum: '9452462043',
      email: 'lotus_28js@yahoo.com',
    },
    {
      name: 'Dr. SAVYA SACHI',
      image: imgss,
      post: 'Assistant Professor',
      phoneNum: '9305595936',
      email: 'priyankatripathiknp@gmail.com',
    },
    {
      name: 'Dr. SHASHI BALA',
      image: imgsb,
      post: 'Assistant Professor',
      phoneNum: '7007987502',
      email: 'rohitatknit@gmail.com',
    },
    {
      name: 'MS. ISHA SINGH',
      image: imgis,
      post: 'Assistant Professor',
      phoneNum: '8707524957',
      email: 'shipra.shruti@gmail.com',
    },
    {
      name: 'MS. KAUMUDI SINGH',
      image: imgks,
      post: 'Assistant Professor',
      phoneNum: '9810513463',
      email: 'zeealis@gmail.com',
    },
  ]
  return (
    <div className='Faculty'>
      <div className='container-fluid marketing'>
        <div className='row faculty-data justify-content-space-between ml-1'>
          {data.map((data, index) => (
            <div className='m-4 p-3 rounded faculty-detail'>
              <img
                src={data.image}
                className='bd-placeholder-img img-shadow rounded-circle mb-3'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
                aria-label='Placeholder: 140x140'
                alt={`${data.name}`}></img>
              <h2 className='font-weight-bold faculty-name'>{data.name}</h2>
              <table className='mobile-table'>
                <tbody className='mobile-tbody'>
                  <tr>
                    <td className='p-2'>
                      <i className='fas fa-briefcase'></i>
                    </td>
                    <td className='p-2'>{data.post}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <i className='fas fa-phone'></i>
                    </td>
                    <td className='p-2'>{data.phoneNum}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <i className='fas fa-envelope'></i>
                    </td>
                    <td className='p-2'>
                      <a href={`mailto:${data.email}`} className='text-danger'>
                        {data.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}{' '}
        </div>
      </div>
    </div>
  )
}

export default Faculty
