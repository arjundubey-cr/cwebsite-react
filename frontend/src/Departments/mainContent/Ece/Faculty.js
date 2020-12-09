import React from 'react'
import '../../commondesign.css'
import imgmkj from '../../images/ece/faculty/ManojKumarJain.jpg'
import imgss from '../../images/ece/faculty/SiddharthSingh.jpg'
import imgakj from '../../images/ece/faculty/AvinashKumarJayank.jpg'
import imgps from '../../images/ece/faculty/PriyankaSingh.jpg'
import imgskg from '../../images/ece/faculty/SushilKumarGupta.jpg'
import { ReactComponent as Briefcase } from '../../../assets/logo/briefcase.svg'
import { ReactComponent as Email } from '../../../assets/logo/email.svg'
import { ReactComponent as Phone } from '../../../assets/logo/phone.svg'

const Faculty = () => {
  const data = [
    {
      id: 1,
      name: 'Dr. Manoj Kumar Jain',
      image: imgmkj,
      post: 'Assistant Professor',
      phoneNum: '8707689006',
      email: 'mkjain71@gmail.com',
    },
    {
      name: 'Dr. Siddharth Singh',
      image: imgss,
      post: 'Assistant Professor',
      phoneNum: '9559958600',
      email: 'siddharthjnp@gmail.com',
    },
    {
      name: 'Er. Avinash Kumar Jayank',
      image: imgakj,
      post: 'Assistant Professor',
      phoneNum: '9455280306',
      email: 'a.kjayank@gmail.com',
    },

    {
      name: 'Er. Priyanka Singh',
      image: imgps,
      post: 'Assistant Professor',
      phoneNum: '7906935636',
      email: 'spriyanka2030@gmail.com',
    },

    {
      name: 'Er. Sushil Kumar Gupta',
      image: imgskg,
      post: 'Assistant Professor',
      phoneNum: '9452234325',
      email: 'sushil.mpec@gmail.com',
    },
  ]
  return (
    <div className='Faculty'>
      <div className='container marketing'>
        <div className='row faculty-data justify-content-right ml-1'>
          {data.map((data, index) => (
            <div className='m-4 p-3 margin-faculty-left rounded faculty-detail'>
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
                      <Briefcase />
                    </td>
                    <td className='p-2'>{data.post}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Phone />
                    </td>
                    <td className='p-2'>{data.phoneNum}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Email />
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
