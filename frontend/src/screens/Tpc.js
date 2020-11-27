import React from 'react'
import { Container, Table } from 'react-bootstrap'
const Tpc = () => {
  const tpcTeachers = [
    {
      name: 'Dr. Himanshu Pandey (In-charge)',
      branch: 'Computer Science and Engineering',
    },
    {
      name: 'Er. Pankaj Kumar',
      branch: 'Computer Science and Engineering',
    },
    {
      name: 'Er. Sushil Kumar Gupta',
      branch: 'Electronics and Communication Engineering',
    },
    {
      name: 'Er. Pawan Kumar Singh',
      branch: 'Electrical Engineering',
    },
    {
      name: 'Er. Gaurav Srivastava',
      branch: 'Civil Engineering',
    },
    {
      name: 'Er. Prashan Kr. Singh',
      branch: 'Mechanical Engineering',
    },
    {
      name: 'Ms. Isha Singh',
      branch: 'Applied Science and Humanities',
    },
  ]
  return (
    <div>
      <div className='section-heading text-center'>
        Training and Placement Cell
      </div>
      <hr className='section-underline' />
      <div className=' description container-fluid text-center'>
        The Training and Placement Cell of the Faculty of Engineering and
        Technology functions under the aegis of the University of Lucknow, to
        facilitate the process of placement of enrolled students. The University
        of Lucknow is a beacon of knowledge, with an illustrious past and has
        come to be synonymous with the city of Nawabs, Lucknow itself. The
        Faculty of Engineering and Technology aims to become a world-renowned
        institution in the field of technical education and continuously strives
        towards perfection. The faculty members work collaboratively to offer
        excellence in teaching and research.
      </div>
      <div className=' description container text-center mt-1'>
        The <strong>Training and Placement Cell</strong> of FoET is centred
        around employment outcomes for the final semester students. The Training
        and Placement cell organises training sessions, talks and other
        initiatives for knowledge expansion and skill development, along with
        committing towards the placement of students. TPC is a part of the
        fabric of the institution, which aims to turn the students into most
        sought-after candidates for different organizations. Dedicated student
        volunteers contribute to a cohesive working of the cell as well. The
        cell is mainly concerned with the placement of the final semester
        students, along with internships for third-year students, personality
        development and support for diverse career goals.
      </div>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Incharge and Advisory Board
      </div>
      <Container>
        <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Associated Branch</th>
            </tr>
          </thead>
          <tbody>
            {tpcTeachers.map((data, index) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.branch}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Our Objectives
      </div>
      <Container>
        <ul className='tpc-objectives-list ml-3 ml-md-2 ml-lg-2'>
          <li>
            To provide assistance in the employment process of final semester
            students and place them in organisations aligned with their career
            path
          </li>
          <li>
            To help the third-year students achieve an immersive internship
            experience that contributes towards their future employment.
          </li>
          <li>
            To train and hone the skills and knowledge of the students and turn
            them into purpose-driven candidates with a global mindset and
            innovative thinking.
          </li>
          <li>
            To advise students about diverse career pathways, functions and
            roles within industries so that they can make an informed choice
            about their career.
          </li>
          <li>
            To organise short training sessions for students to further their
            capabilities and prepare them for a competitive work environment.
          </li>
          <li>
            To enhance the personality of students and turn them into self-aware
            leaders, with a focus on ethical values and character development.
          </li>
        </ul>
      </Container>
      <div className='section-sub-heading container-fluid text-center my-3'>
        Activity Log of TPC
      </div>
    </div>
  )
}

export default Tpc
