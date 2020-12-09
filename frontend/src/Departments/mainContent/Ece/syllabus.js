import React from 'react'
import '../../commondesign.css'

const CourseSyllabus = (props) => {
  return (
    <div className='syllabus container '>
      <h2 className='intro text-center text-uppercase tx-blue underline'>
        COURSE CONTENTS OR COURSE OUTLINES
      </h2>
      <hr className='hr1 mx-2' />
      <div className='table-content pr-2 mx-2'>
        <div className='table-responsive table-shadow mt-2 p-3 mt-4'>
          <table className='table description table-condensed table-bordered pub table-striped'>
            <thead>
              <tr className='bg-dark'>
                <th className='text-white text-center' width='3%'>
                  S.No.
                </th>
                <th className='text-white mx-auto text-center'>Description</th>
                <th className='text-white mx-auto text-center'>View</th>
              </tr>
            </thead>
            <tbody id='tblTimeTable'>
              <tr>
                <td className='text-center'>1</td>
                <td>
                  B.Tech First Year Syllabus (Common for All Branches )
                  Effective from Session 2017-18
                </td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_58f3e1a3-74af-4893-845d-9fae7c3bddc0_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>2</td>
                <td>
                  B.Tech Third Year Syllabus Electronics and Communication
                  Engineering{' '}
                </td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_5b17eeeb-ebbb-45fa-bec5-51fe00905818_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>3</td>
                <td>Ordinance Rules &amp; Regulations for B.Tech Programme</td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_09e25b20-5fb3-461f-bbb3-2d864c0f636e_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>4</td>
                <td>
                  B.Tech Second Year Syllabus Electronics and Communication
                  Engineering
                </td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_d6015c64-8887-4ba8-9920-80bc6991d22a_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>5</td>
                <td>
                  B.Tech Fourth Year Syllabus Electronics and Communication
                  Engineering
                </td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_f1c23a3a-54f0-49f7-9f0a-fadd64f517c6_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>6</td>
                <td>Open Elective Syllabus</td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_d18776d8-da94-42ff-990e-e8cfa3bd0810_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className='text-center'>7</td>
                <td>
                  POs-PSOs-COs of B.Tech (Electronics &amp; Communication
                  Engineering)
                </td>
                <td className='text-center'>
                  <a
                    className='text-dark'
                    href='http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_547d6ecd-d94e-4579-a20c-6c55ff179e43_57.pdf'
                    target='_blank'
                    rel='noopener noreferrer'>
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CourseSyllabus
