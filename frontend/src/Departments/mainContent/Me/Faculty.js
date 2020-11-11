import React from 'react'
import '../../commondesign.css'
import imgrb from '../../images/me/faculty/RajendraBahadur.jpg'
import imgkt from '../../images/me/faculty/KamleshTiwari.jpg'
import imgpks from '../../images/me/faculty/PrashantKumarSingh.jpg'
import imgskg from '../../images/me/faculty/SandeepKumarGupta.jpg'

const Faculty = () => {
  const data = [
    {
      name: 'Dr. Rajendra Bahadur',
      image: imgrb,
      post: 'Assistant Professor',
      phoneNum: '7524816659',
      email: 'rajendramech@gmail.com',
    },
    {
      name: 'Er. Kamlesh Tiwari',
      image: imgkt,
      post: 'Assistant Professor',
      phoneNum: '9721049117',
      email: 'tiwari.kamlesh@yahoo.com',
    },
    {
      name: 'Er.Prashant Kumar Singh',
      image: imgpks,
      post: 'Assistant Professor',
      phoneNum: '9406987292',
      email: 'pavanrajawat038@gmail.com',
    },

    {
      name: 'Er. Sandeep Kumar Gupta',
      image: imgskg,
      post: 'Assistant Professor',
      phoneNum: '8299502617',
      email: 'sandeep.gupta791@gmail.com',
    },

  ]
  return (
    <div className='Faculty'>
      <div className='container-fluid marketing'>
        <div className='row facuty-data justify-content-right ml-1'>
          {data.map((data, index) => (
            <div className='col-lg-3 m-4 p-3 margin-faculty-left rounded'>
              <img
                src={data.image}
                className='bd-placeholder-img img-shadow rounded-circle mb-2'
                width='140'
                height='140'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
                aria-label='Placeholder: 140x140'
                alt={`${data.name}`}></img>
              <h2 className='font-weight-bold'>{data.name}</h2>
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
