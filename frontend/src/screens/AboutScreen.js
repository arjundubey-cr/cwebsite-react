import React from 'react'
import { Image } from 'react-bootstrap'
import vcphoto from '../assets/images/vc_photo.jpg'
import rsguptaphoto from '../assets/images/rs-gupta.jpg'
const AboutScreen = () => {
  return (
    <div>
      <div className='section-heading text-center'>About FoET</div>
      <hr className='section-underline' />
      <div className='description container text-justify'>
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
        <div className='row message-about'>
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
          <div className='col col-sm-12 col-md-3'>
            <Image src={vcphoto} className='about-auth-image  d-block m-auto' />
          </div>
        </div>
      </div>
      <div className='section-sub-heading container text-center mt-4'>
        Coordinator's Message
      </div>
      <div className='container'>
        <div className='row message-about'>
          <div className='description col-12 col-md-8'>
            As a part of the distinguished University of Lucknow, the Faculty of
            Engineering and Technology has upheld high standards since its
            inception in 2017. The Faculty of Engineering and Technology has
            qualified faculty as well as equipped laboratories at our disposal.
            Our goal of comprehensive and holistic technical education ensures
            that our students equipped with both competence and character. We
            provide our students with a solid foundation in different areas of
            Engineering as well as Applied Science and Humanities and also
            prepare them to meet the dynamic challenges of today's competitive
            environment.
          </div>
          <div className='col col-sm-12 col-md-3'>
            <Image
              src={rsguptaphoto}
              className='about-auth-image d-block m-auto '
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen
