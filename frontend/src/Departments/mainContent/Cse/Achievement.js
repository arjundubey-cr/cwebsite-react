import React from 'react'
import '../../commondesign.css'
import certificate from '../../images/cse/Achievements/certificate.jpg'
import certificate_distribution from '../../images/cse/Achievements/image-2.jpg'
const Achievement = (props) => {
  return (
    <div className='container pl-3 pr-3'>
      <div className='introduction'>
        <h2 className='section-sub-heading text-center text-uppercase tx-blue'>
          Achievements
        </h2>
        <ol className='pl-3 ml-3 description'>
          <li>
            Number of Patent filed:{' '}
            <strong>
              01 (Machine learning based method for optimization of mobile
              health services and medical resources in rural and remote area)
            </strong>
          </li>
          <li>CSI membership</li>
          <li>International Association of Engineers membership</li>
          <li>Indian Society for Technical Education membership</li>
          <li>
            International Association of Computer Science and Information
            Technology membership&nbsp;
          </li>
          <li>Institute of Research Engineers and Doctors membership</li>
          <li>International Society for Research and Development membership</li>
        </ol>
      </div>
      <div className='company-events mt-4'>
        <div className='table-content'>
          <div className='table-responsive table-shadow mt-2 p-3 mt-4'>
            <table
              style={{ borderCollapse: 'collapse', width: '100%' }}
              border='1'
              className='table table-bordered table-striped'>
              <thead className='mobile-thead'>
                <tr className='mobile-tr'>
                  <th className='mobile-th' style={{ textAlign: 'center' }}>
                    SN
                  </th>
                  <th className='mobile-th' style={{ textAlign: 'center' }}>
                    ORGANIZATION
                  </th>
                  <th className='mobile-th' style={{ textAlign: 'center' }}>
                    ACTIVITY
                  </th>
                  <th className='mobile-th' style={{ text: 'center' }}>
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody className='mobile-tbody'>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    1
                  </td>
                  <td className='mobile-td'>
                    Tata Consultancy Services (TCS), Lucknow
                  </td>
                  <td className='mobile-td'>
                    <p>
                      A workshop on “Communication Skills in IT Industry and
                      Agile Methodology”.
                    </p>
                    <p>
                      <strong>Target Audience:</strong>CSE and ECE students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    Mr. Vishal Seth (Academic Relationship Manager- Lucknow
                    Region, TCS)
                  </td>
                  <td className='mobile-td' style={{ text: 'center' }}>
                    07.02.2019
                  </td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    2
                  </td>
                  <td className='mobile-td'>
                    CETPA Infotech Pvt. Ltd., Lucknow
                  </td>
                  <td className='mobile-td'>
                    <p>
                      A special Lecture on “Advanced Design Softwares in
                      Mechanical and Civil Engineering”.
                    </p>
                    <p>
                      <strong>Target Audience:</strong>ME and CE Students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    Mr. Navneet Singh (CETPA Infotech Pvt. Ltd., Lucknow)
                  </td>
                  <td className='mobile-td'>09.02.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    3
                  </td>
                  <td className='mobile-td'>Analyze Infotech., Lucknow</td>
                  <td className='mobile-td'>
                    <p>An Interaction Program on “JAVA Technologies”.</p>
                    <p>
                      <strong>Target Audience:</strong>CSE, ECE and MCA students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    Analyze Infotech resources
                  </td>
                  <td className='mobile-td'>09.02.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    4
                  </td>
                  <td className='mobile-td'>
                    CETPA Infotech Pvt. Ltd., Lucknow
                  </td>
                  <td className='mobile-td'>
                    <p>A seminar on “Python Programming Language”.</p>
                    <p>
                      <strong>Target Audience:</strong>CSE students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    <p>
                      Mr. Amit Kumar Singh (CETPA Infotech Pvt. Ltd., Lucknow)
                    </p>
                  </td>
                  <td className='mobile-td'>27.03.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    5
                  </td>
                  <td className='mobile-td'>
                    Softpro India Computer Technologies Pvt. Ltd.
                  </td>
                  <td className='mobile-td'>
                    <p>
                      A one day workshop on “Advance Java with a Mini Project”.
                    </p>
                    <p>
                      <strong>Target Audience:</strong>CSE students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    <ol>
                      <li>
                        Brijesh Mishra (Softpro India Computer Technologies Pvt.
                        Ltd.)
                      </li>
                      <li>
                        Mr. Rohit Kumar (Softpro India Computer Technologies
                        Pvt. Ltd.)
                      </li>
                    </ol>
                  </td>
                  <td className='mobile-td'>06.04.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    6
                  </td>
                  <td className='mobile-td'>Google AI Explore Academy</td>
                  <td className='mobile-td'>
                    <p>
                      A one day workshop on “Google AI Explore Machine
                      Learning”.
                    </p>
                    <p>
                      <strong>Target Audience:</strong> CSE, MCA and BCA
                      students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    Er. Naman Mishra (Official representative of Google
                    Crowdsource community, India and Facilitator of Google AI
                    Academy and Co-founder of DefCon Delhi)
                  </td>
                  <td className='mobile-td'>21.09.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    7
                  </td>
                  <td className='mobile-td'>ETL Labs</td>
                  <td className='mobile-td'>
                    <p>
                      A workshop on “Data Science-Machine Learning and Python”.
                    </p>
                    <p>
                      <strong>Target Audience:</strong> CSE, MCA and BCA
                      students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    <ol>
                      <li>Vinod tripathi (President,ETL Labs)</li>
                      <li>Amit Singh (IIM Ahmedabad)</li>
                      <li>Mr. M. Qais (PMP)</li>
                    </ol>
                  </td>
                  <td className='mobile-td'>28.09.2019</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    8
                  </td>
                  <td className='mobile-td'>
                    Digipodium Computer Consultancy Pvt. Ltd.
                  </td>
                  <td className='mobile-td'>
                    <p>A two day workshop on “Android App Development”.</p>
                    <p>
                      <strong>Target Audience:</strong>CSE, MCAand BCA students
                    </p>
                    <p>
                      <strong>Resource Person:</strong>
                    </p>
                    <p>
                      Zaid bin Kamiland Team (Digipodium Computer Consultancy
                      Pvt. Ltd.)
                    </p>
                  </td>
                  <td className='mobile-td'>
                    <p>12.10.2019</p>
                    <p>and</p>
                    13.10.2019
                  </td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    9
                  </td>
                  <td className='mobile-td'>TPC FoET</td>
                  <td className='mobile-td'>
                    <p>Prize distribution ceremony of TPC FoET Logo Contest.</p>
                    <p>
                      Winner: Sachin Singh Dosad (BCA 2<sup>nd</sup> Year,
                      2019-20)
                    </p>
                    <ol>
                      <li>1000 Cash prize money</li>
                    </ol>
                    Appreciation certificate
                  </td>
                  <td className='mobile-td'>12.02.2020</td>
                </tr>
                <tr className='mobile-tr'>
                  <td className='mobile-td' style={{ textAlign: 'center' }}>
                    10
                  </td>
                  <td className='mobile-td'>LIVEWIRE, India</td>
                  <td className='mobile-td'>
                    <p>Aptitude examination – CBAT.</p>
                    <p>
                      <strong>Target Audience:</strong> 1<sup>st</sup>, 2
                      <sup>nd</sup> and 3<sup>rd</sup> year students of
                      B.Tech./B.C.A./M.C.A. except B.Tech. first year students
                      of CE/EE/ME.
                    </p>
                    <p>739 students participated.</p>
                  </td>
                  <td className='mobile-td'>15.02.2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='computer-society'>
        <h2 className='section-sub-heading text-uppercase tx-blue mt-4 bold'>
          Computer Society of India Membership
        </h2>
        <p className='description'>
          Since April 1, 2019, Faculty of Engineering and Technology, University
          of Lucknow has associated with CSI.
        </p>
        <h4 className='section-sub-sub-heading text-uppercase mt-4 bold'>
          Teacher Members of CSI:
        </h4>
        <ol className='description'>
          <li>Er. Chandrabhan Singh</li>
          <li>Er. Rohit Yadav</li>
          <li>Er. Zeeshan Ali Siddiqui</li>
        </ol>
        <p className='description'>
          <strong>Student benefits:</strong> The activities conducted for the
          students associated with the Society include lecture meetings,
          seminars, conferences, training programmes, programming contests and
          practical visits to installations.
        </p>
        <ul className='description'>
          <li>
            02.2019, Interaction program on JAVA technology by Analyze Infotech.
          </li>
          <li>04.2019, ‘C’ programming Contest.</li>
          <li>
            09.2019, Mac Ecosystem Awareness &amp; Coding Workshop by Apple
            Team.
          </li>
          <li>
            09.2019, A workshop on ‘Software Development using Emerging
            Technology’ by Analyze Infotech.
          </li>
          <li>
            10.2019, Round 1(Written Test) Quiz competition on Data Structure
            using C.
          </li>
          <li>
            11.2019, Round 2(System Test) Quiz competition on Data Structure
            using C.
          </li>
        </ul>
      </div>
      <div className='csi-image'>
        <img src={certificate} alt='certificate' />
        <img src={certificate_distribution} alt='certificate distribution' />
      </div>
    </div>
  )
}

export default Achievement
