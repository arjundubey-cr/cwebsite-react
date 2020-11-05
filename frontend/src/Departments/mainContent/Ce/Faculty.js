import React from 'react'
import '../../commondesign.css'
import imghp from '../../images/cse/faculty/HimanshuPandey.jpg'
import imgay from '../../images/cse/faculty/AkanshaYadav.jpg'
import imgas from '../../images/cse/faculty/AnshuSingh.jpg'
import imgcbs from '../../images/cse/faculty/ChandrabhanSingh.jpg'
import imgpk from '../../images/cse/faculty/Pankajkumar.jpg'
import imgpt from '../../images/cse/faculty/PriyankaTripathi.jpg'
import imgr from '../../images/cse/faculty/Rohit.jpg'
import imgssd from '../../images/cse/faculty/ShrutiSaxenaDas.jpg'
import imgzas from '../../images/cse/faculty/ZeeshanAliSiddiqui.jpg'

const Faculty = () => {
  const data = [
    {
      name: 'Dr. Himanshu Pandey',
      image: imghp,
      post: 'Assistant Professor',
      phoneNum: '7905287870',
      email: 'hpandey010@gmail.com',
    },
    {
      name: 'Er. Akansha Yadav',
      image: imgay,
      post: 'Assistant Professor',
      phoneNum: '7524086772',
      email: 'itsakanksha9@gmail.com',
    },
    {
      name: 'Er.Anshu Singh',
      image: imgas,
      post: 'Assistant Professor',
      phoneNum: '7376252768',
      email: 'anshu.singh6225@gmail.com',
    },

    {
      name: 'Er. Chandrabhan Singh',
      image: imgcbs,
      post: 'Assistant Professor',
      phoneNum: '7275711509',
      email: 'chandrabhan98@gmail.com',
    },

    {
      name: 'Er. Pankaj kumar',
      image: imgpk,
      post: 'Assistant Professor',
      phoneNum: '9452462043',
      email: 'lotus_28js@yahoo.com',
    },
    {
      name: 'Er. Priyanka Tripathi',
      image: imgpt,
      post: 'Assistant Professor',
      phoneNum: '9305595936',
      email: 'priyankatripathiknp@gmail.com',
    },
    {
      name: 'Er. Rohit',
      image: imgr,
      post: 'Assistant Professor',
      phoneNum: '7007987502',
      email: 'rohitatknit@gmail.com',
    },
    {
      name: 'Er. Shruti Saxena Das',
      image: imgssd,
      post: 'Assistant Professor',
      phoneNum: '8707524957',
      email: 'shipra.shruti@gmail.com',
    },
    {
      name: 'Er. Zeeshan Ali Siddiqui',
      image: imgzas,
      post: 'Assistant Professor',
      phoneNum: '9810513463',
      email: 'zeealis@gmail.com',
    },
  ]
  return (
    <div className='Faculty'>
      <div className='container-fluid marketing'>
        <div className='row facuty-data justify-content-space-between ml-1'>
          {data.map((data, index) => (
            <div className='col-lg-3 m-4 p-3 rounded'>
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
