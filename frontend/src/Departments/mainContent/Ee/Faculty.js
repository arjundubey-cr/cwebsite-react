import React from 'react'
import '../../commondesign.css'
import imggg from '../../images/ee/faculty/GauravGupta.jpg'
import imgskb from '../../images/ee/faculty/ShailendraKumarBhasker.jpg'
import imgpks from '../../images/ee/faculty/PavanKumarSingh.jpg'
import imgrd from '../../images/ee/faculty/RamanDevesh.jpg'
import imgwa from '../../images/ee/faculty/WazidAli.jpg'

const Faculty = () => {
  const data = [
    {
      name: 'Dr. Gaurav Gupta',
      image: imggg,
      post: 'Assistant Professor',
      phoneNum: '7974985262',
      email: 'gauravmits@gmail.com',
    },
    {
      name: 'Dr. Shailendra Kumar Bhasker',
      image: imgskb,
      post: 'Assistant Professor',
      phoneNum: '8004975462',
      email: 'bhaskershailu@gmail.com',
    },
    {
      name: 'Er.Pavan Kumar Singh',
      image: imgpks,
      post: 'Assistant Professor',
      phoneNum: '9406987292',
      email: 'pavanrajawat038@gmail.com',
    },

    {
      name: 'Er. Raman Devesh',
      image: imgrd,
      post: 'Assistant Professor',
      phoneNum: '9555962616',
      email: 'ramandevesh001@gmail.com',
    },

    {
      name: 'Er. Wazid Ali',
      image: imgwa,
      post: 'Assistant Professor',
      phoneNum: '9565446269',
      email: 'wazid.ali7@gmail.com',
    },
  ]
  return (
    <div className='Faculty'>
      <div className='container-fluid marketing'>
        <div className='row faculty-data justify-content-right ml-1'>
          {data.map((data, index) => (
            <div className=' m-4 p-3 faculty-info rounded'>
              <img
                src={data.image}
                className='bd-placeholder-img img-shadow rounded-circle mb-2'
                width='140'
                height='140'
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
