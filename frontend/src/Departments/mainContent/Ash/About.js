import React from 'react'
import '../../commondesign.css'
import eclab from '../../images/ash/eng-chem-lab.jpg'
import eplab from '../../images/ash/eng-physics-lab1.jpg'
import eplabdr from '../../images/ash/eng-physics-lab-darkroom.jpg'
import pclabimg1 from '../../images/ash/proff-comm-lab-image1.jpg'
import pclabimg2 from '../../images/ash/proff-comm-lab-image2.jpg'
import { ReactComponent as Youtube } from '../../../assets/logo/youtube.svg'
const About = (props) => {
  return (
    <div className='about pl-2 pr-1 py-1'>
      <div className='social-handle mb-2 p-2 pl-1'>
        <div className='youtube'>
          <a
            className='a-text-none d-flex align-items-center'
            href='https://www.youtube.com/channel/UCUFsyx5aNTTTS9fl7ZxIYFQ/videos'
            alt='Computer Science youtube Channel'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube />
            <span className='ml-2 text-danger' style={{ fontSize: '1rem' }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className='introduction'>
        <h2 className='intro text-uppercase tx-blue container-fluid text-center section-heading'>
          DEPARTMENT OF APPLIED SCIENCE & HUMANITIES
        </h2>
        <p className='pl-3'>
          The Department of Applied Sciences and Humanities functions with the
          mission of expanding human knowledge and benefit society through
          education and research on fundamental and applied aspects of science
          and humanities in a singularly collegial, interdisciplinary
          atmosphere.
          <br />
          The Department comprises of multi-disciplinary faculty members at
          present mainly related to Physics, Chemistry, Mathematics and English
          literature to cater the need of multi-disciplinary students at the
          Faculty. Our teachers and students provide a home to the most
          promising research with an access to state of art educational/research
          laboratory and central library facilities for both Basic/Applied and
          Engineering research.
          <br />
          The Applied Sciences & Humanities Department (ASH) is second largest
          Department of Faculty of Engineering & Technology. Department
          participate in B.Tech, BCA & MCA programmes by offering courses in
          Applied Chemistry, Applied Mathematics, Applied Physics, Professional
          Communication & Humanities. The Department has a well qualified
          faculty and supporting staff. All the laboratories of the department
          are well equipped with modern equipments.
        </p>
        <h5 className='font-weight-bold pl-3'>DEPARTMENT OBJECTIVES</h5>
        <ul>
          <li>
            To strengthen the fundamentals in Applied Sciences (Chemistry,
            Physics &amp; Mathematics).
          </li>
          <li>
            To develop the ability to communicate effectively as technical
            professionals be able to appraise the learning.
          </li>
          <li>To provide an environment for working effectively in groups.</li>
          <li>To sensitize students to environmental and ethical issues.</li>
        </ul>
      </div>
      <div className='course-offered'>
        <h2 className='intro text-uppercase tx-blue'>Course offered</h2>
        <ul className='course-list'>
          <strong>
            <li>Engineering Chemistry</li>
            <li>Engineering Physics</li>
            <li>Engineering Mathematics</li>
            <li>English (Professional Communication)</li>
            <li>Environment &amp; Ecology</li>
            <li>Human Values &amp; Ethics</li>
          </strong>
        </ul>
      </div>
      <div className='deparment'>
        <h2 className='intro text-uppercase tx-blue'>
          CONSULTANCY AREAS IN APPLIED SCIENCE & HUMANITIES
        </h2>
        <div>
          <ol>
            <li>
              <strong>Waste Water Treatment</strong>
            </li>
            <li>
              <strong>Solid Waste Management</strong>
            </li>
            <li>
              <strong>Rain Water Harvesting</strong>
            </li>
            <li>
              <strong>Corporate Communication</strong>
            </li>
            <li>
              <strong>Corporate Training </strong>
            </li>
            <li>
              <strong>Life Skill Training </strong>
            </li>
            <li>
              <strong>Voice & Accent Training </strong>
            </li>
            <li>
              <strong>Behavioral Training </strong>
            </li>
            <li>
              <strong>Leadership Training </strong>
            </li>
            <li>
              <strong>Building Corporate Negotiation Framework</strong>
            </li>
          </ol>
        </div>
      </div>
      <div className='applied-science-department'>
        <div className='department mb-3'>
          <h2 className='intro text-uppercase tx-blue'>Chemistry</h2>
          <p className='pl-3'>
            Chemistry Department at Faculty of Engineering and Technology
            providing a basic knowledge of Applied Chemistry and Environment &
            Ecology in B.Tech first and second year respectively. Through our
            course in Chemistry our central goal is teaching students how to
            conduct innovative research and communicate the results that
            satisfies all the established norms of environment and industry. At
            the Chemistry department, students enjoy personal experiences in
            scholarship and independent inquiry, in which they play an active
            role in formulating the research to be undertaken, implementing the
            work, and carrying it to completion. We focus on careful fundamental
            study with recognition of the practical and technological importance
            of the engineering education.
          </p>
          <h5 className='font-weight-bold pl-3'>Engineering Chemistry Lab</h5>
          <p className='pl-3'>
            <strong>Number of equipments:</strong> pH meter, Colorimeter, Hot
            plate, Oven, digital weighing, Water Distillation Unit, Water bath,
            titration equipments, glass ware.
          </p>
          <div className='ash-image'>
            <img
              src={eclab}
              alt='engineering chemistry lab'
              className='ash-image pl-3'
            />
          </div>
        </div>
        <br />
        <div className='department mb-3'>
          <h2 className='intro text-uppercase tx-blue'>physics</h2>
          <p className='pl-3'>
            The Physics Department at Faculty of Engineering and Technology is
            one of the premier places in the state, providing world-class
            undergraduate education encouraging research in diverse areas of
            fundamental and applied physics. The objective of the department is
            to create future generations of skilled Engineers and Scientists by
            providing quality education through cutting edge technologies and
            innovative teaching techniques so as to make them well equipped to
            face present and future challenges and their overall sustainable
            professional growth. Establishment of state-of-the art experimental
            and computational facilities have opened to us venture into emergent
            interdisciplinary areas like nanotechnology, quantum information
            processing, nonlinear dynamics, and biophysics. With vibrant and
            active students, FoET Physics thrives to be one of the leading
            research departments in the state.
          </p>
          <h5 className='font-weight-bold pl-3'>Engineering Physics Lab</h5>
          <p className='pl-3'>
            <strong>Number of equipments:</strong> Newton's ring, Polerimeter,
            Diffrection grating, Nodal slide, Fresnel Biprism, Potentiometer,
            Energy band gap, Stefan's law, Variation of magnetic field, Carey
            foster bridge, Viscosity
          </p>
          <div className='ash-image'>
            <img src={eplab} alt='engineering-physics-lab' className='pl-3' />
            <img
              src={eplabdr}
              alt='engineering-physics-lab-dark-room'
              className='pl-3'
            />
          </div>
        </div>
        <br />
        <div className='department mb-3'>
          <h2 className='intro text-uppercase tx-blue'>MATHEMATICS</h2>
          <p className='pl-3'>
            Department of Mathematics offers courses to undergraduate and
            post-graduate students of various engineering and computer science
            disciplines like BCA, MCA and B.Tech. The syllabi have been designed
            in the areas of Applied Mathematics, Computational Techniques and
            Statistical testing to impart the sound knowledge of the some
            mathematical software used and their applications in the engineering
            and other disciplines. The Objective is to create students with
            strong mathematical background, creative thinking, and problem
            solving skills through systematic training and to help student
            understand the significance of application and logical thinking. The
            department has highly motivated and experienced team of faculty
            members. Teachers of the department have two books to their credit.
          </p>
        </div>
        <br></br>
        <div className='department mb-3'>
          <h2 className='intro text-uppercase tx-blue'>english</h2>
          <p className='pl-3'>
            In the wake of a new era, when there is a growing demand for humane
            and environment sensitive engineers, the English Department at
            Faculty of Engineering and Technology has taken a lead in the field
            of humanistic and communication studies by offering a specially
            curated curriculum that integrates discourses on humanities and
            social sciences along with the standard engineering education, at
            both undergraduate and postgraduate levels. The study of human
            sciences plays an important role in the education of scientists and
            engineers by making their education holistic, going beyond
            specialized training in a particular area of technology and enabling
            them to think critically and sensitively for themselves and the
            society. Often, students are genuinely surprised to find that
            humanities and social sciences provide alternative modes of
            cognition and that not all problems of society have a technical
            solution. Technology, after all, does not exist in a vacuum. It is
            developed and deployed in a milieu that has both socio‐cultural and
            economic needs and constraints.
          </p>
          <h5 className='font-weight-bold pl-3'>
            Professional Communication Lab (Language Lab)
          </h5>
          <p className='pl-3'>
            <strong>Equipments used in PC lab:</strong> Computers, Microphones,
            PC software, Projectors, Sound system
          </p>
          <div className='ash-image'>
            <img src={pclabimg1} alt='PClab-image1' className='pl-3' />
            <img src={pclabimg2} alt='PClab-image2' className='pl-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
