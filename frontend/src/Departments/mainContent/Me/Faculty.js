import React from 'react'
import '../../commondesign.css'
import imgrb from '../../images/me/faculty/RajendraBahadur.jpg'
import imgkt from '../../images/me/faculty/KamleshTiwari.jpg'
import imgpks from '../../images/me/faculty/PrashantKumarSingh.jpg'
import imgskg from '../../images/me/faculty/SandeepKumarGupta.jpg'
import { ReactComponent as Briefcase } from "../../../assets/logo/briefcase.svg";
import { ReactComponent as Email } from "../../../assets/logo/email.svg";
import { ReactComponent as Phone } from "../../../assets/logo/phone.svg";

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
                      <Briefcase/>
                    </td>
                    <td className='p-2'>{data.post}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Phone/>
                    </td>
                    <td className='p-2'>{data.phoneNum}</td>
                  </tr>
                  <tr>
                    <td className='p-2'>
                      <Email/>
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
