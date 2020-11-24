import React from 'react'
import { Image } from 'react-bootstrap'
import vcphoto from '../assets/images/vc_photo.jpg'
const AboutScreen = () => {
  return (
    <div>
      <div className='section-heading text-center'>About FoET</div>
      <hr className='section-underline' />
      <div className='description container text-center'>
        The Faculty of Engineering and Technology was re-established as one of
        the Faculties of the University of Lucknow in 2017 with the aim of
        becoming a pioneer in the field of technical education. The Faculty has
        five branches of Engineering,i.e., Civil, Electrical, Mechanical,
        Electronics &amp; Communication, and Computer Science &amp; Engineering.
        With an intake of 90 students in Computer Science &amp; Engineering and
        60 students in each of the other four departments. The first batch of
        students took admission through UPSEE-2017, and all the seats filled on
        day one of the counseling. The classes started as scheduled and are
        being run smoothly with all the desired infrastructural and academic
        facilities in place.
        <br />
        The Faculty of Engineering and Technology spreads out over two buildings
        located in the second campus of the University at Jankipuram. The Second
        campus accommodates the Faculty of Law, Institute of Management
        Sciences, and several other professional courses in addition to the
        Faculty of Engineering and Technology. Large stretches of the campus
        engulfed by a green belt. The Eco-friendly practices are combined with
        the teaching, learning process to promote sustainable development.
        Furthermore, initiatives have also been towards energy conservation and
        tapping of solar energy in the campus.
      </div>
      <div className='section-sub-heading container text-center mt-4'>
        From the Desk of Vice Chancellor
      </div>
      <div className='container'>
        <div className='row'>
          <div className='description col-12 col-md-8'>
            The University of Lucknow has had a long tradition of excellence and
            a vibrant community of scholars, academicians, and alumni. The
            University is known for its rigorous programs and substantive
            ethical standards, which help in shaping crucible experiences in our
            students' lives. Established in 1920, the University has become an
            emulable eidolon in the field of education. Following these
            footsteps, the FoET, housed in the second campus of the University
            of Lucknow, has carved a nurturing space for students. The faculty
            started in 2017, has kept itself engaged with new educational
            pedagogy, research, and innovation. The focus has been on broadening
            the horizons of students, which has shaped them to be global leaders
            with critical thinking and creativity.
          </div>
          <div className='col-12 col-md-4'>
            <Image src={vcphoto} className=' d-block m-auto' />
          </div>
        </div>
      </div>
      <div className='section-sub-heading container text-center mt-4'>
        From the Desk of Coordinator
      </div>
    </div>
  )
}

export default AboutScreen
