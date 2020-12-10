import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
const AdmissionScreen = () => {
  return (
    <div>
      <div className='section-heading text-center'>Admission</div>
      <hr className='section-underline' />
      <div className='admission-content description container text-xs-left text-md-center'>
        Admission to programs of Faculty of Engineering and Technology in the
        University of Lucknow, Lucknow is carried out through the entrance
        examination for degree level engineering institutions and other
        professional colleges (UPSEE) being carried out by Dr. A.P.J. Abdul
        Kalam Technical University Uttar Pradesh, Lucknow. Interested candidate
        have to apply and appear for UPSEE. Applicants can apply at{' '}
        <a className='external-link' href='https://upsee.nic.in/'>
          UPSEE Home
        </a>{' '}
        for their interested programs in University of Lucknow, Lucknow.
      </div>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Seat Matrix
      </div>
      <Container>
        <Table className='description' bordered hover>
          <thead>
            <tr>
              <th>Program</th>
              <th>No. of Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Computer Science and Engineering</td>
              <td>132</td>
            </tr>
            <tr>
              <td>Civil Engineering</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Electronics and Communication Engineering</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Electrical Engineering</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Mechanical Engineering</td>
              <td>66</td>
            </tr>
            <tr>
              <td>Masters in Computer Application(MCA)</td>
              <td>33</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Admission Notifications
      </div>
      <Container>
        <Table className='description' bordered hover>
          <thead>
            <tr>
              <th>Subject</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admission Guidelines 2020 - 21</td>
              <td>
                <Button block>
                  <a
                    className=' text-white font-weight-bolder'
                    href='https://www.lkouniv.ac.in/site/writereaddata/siteContent/202004022006268791BTECH_brochure1_2020.pdf'>
                    View
                  </a>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                Press Release regarding MBA, B.Tech. and MCA Admissions being
                done through UPSEE 2020 counselling
              </td>
              <td>
                <Button block>
                  <a
                    className='text-white'
                    href='https://www.lkouniv.ac.in/site/writereaddata/UploadNews/pdf/C_202010221357017524.pdf'>
                    View
                  </a>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Help Desk
      </div>
      <Container className='mb-3 description '>
        For, any query reach out to us at <br />
        Phone Num:{' '}
        <a className='external-link' href='tel:+917991200653'>
          +91-799120 0653
        </a>{' '}
        <br />
        Email:{' '}
        <a className='external-link' href='mailto:profrsgupta@rediffmail.com'>
          profrsgupta@rediffmail.com
        </a>
      </Container>
    </div>
  )
}

export default AdmissionScreen
