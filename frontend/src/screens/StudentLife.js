import React from 'react'
import literary from '../assets/images/clubs&councils/literary.jpeg'
import cultural from '../assets/images/clubs&councils/cultural.jpeg'
import sports from '../assets/images/clubs&councils/sports.jpeg'
import technical from '../assets/images/clubs&councils/technical.jpeg'
import finearts from '../assets/images/clubs&councils/finearts.jpeg'
const StudentLife = () => {
  return (
    <div>
      <div className='section-heading text-center'>Life at FoET</div>
      <hr className='section-underline' />
      <div className='description container'>
        The job market is one of the most competitive ones we have ever known.
        Very often, employers tell us that a degree alone is not indicative of a
        well-rounded graduate. It is ardent that during graduation, efforts
        should be to help the students develop an all-around personality. To
        achieve this goal, we should not just provide opportunities for students
        to achieve good academic results but actively promote the benefits of a
        broad curriculum to students. The Council will provide opportunities
        through which students can prepare themselves to succeed in varied roles
        they will have to undertake in the future. To recognize the importance
        and value of both academic curriculum and co-curricular activities in
        developing the range of skills and attributes is crucial for graduates.
      </div>
      <div className='section-sub-heading text-center container'>
        Student Life
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-8 description'>
            To complement their academics, students choose their extracurricular
            adventures from a spectacular array of ways to participate in music,
            dance, sports, and tech. The Council of Student Activities(CSA) is
            in place to make sure to help students navigate challenges and to
            ensure proper smoothness of them.
          </div>
          <div className='col-4'>
            <img src='#' alt='Council of Student Activities' />
          </div>
        </div>
      </div>
      <div className='section-sub-heading text-center container'>
        Clubs and Councils
      </div>
      <div className='container px-5 my-3'>
        <div className='row council-cards'>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image councilImage'>
              <img
                src={cultural}
                alt='Avatar'
                className='image councilImage '
              />
              <div className='overlay'>
                <div className='text'>
                  <strong className='council-name'> Cultural Council </strong>
                  <br />
                  <div className='council-description'>
                    Cultural Council is for students who also have a keen
                    interest in arts like Drama, Dance, Art, Singing, or
                    instrument playing. This council is an enthusiastic group of
                    individuals who organize, perform, and teach throughout the
                    year.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image councilImage'>
              <img
                src={technical}
                alt='Avatar'
                className='image councilImage '
              />
              <div className='overlay'>
                <div className='text'>
                  <strong className='council-name'>Technical Council</strong>
                  <br />
                  <div className='council-description'>
                    The Technical Council is responsible for managing, ideating
                    and supervising most things tech in the college. The
                    Technical Council works for organising TechTalks and
                    Technical Events within the campus.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image '>
              <img
                src={finearts}
                alt='Avatar'
                className='image councilImage '
              />
              <div className='overlay'>
                <div className='text'>
                  <strong className='council-name'>
                    Fine Arts and Photography Club
                  </strong>
                  <br />
                  <div className='council-description'>
                    The Council primarily focuses on letting people paint their
                    thoughts, perceptions, and imaginations, and also conduct
                    several events and competitions in every academic session.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image'>
              <img src={sports} alt='Avatar' className='image councilImage ' />
              <div className='overlay'>
                <div className='text'>
                  <strong className='council-name'>Sports Council</strong>
                  <br />
                  <div className='council-description'>
                    The Sports Council is for students who also have a keen
                    interest in Sports like Badminton, Cricket, Chess etc. This
                    council is an energetic group of individuals who organize
                    sport events throughtout the academic session.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-4 col-12 my-2'>
            <div className='card-image councilImage'>
              <img
                src={literary}
                alt='Avatar'
                className='image councilImage '
              />
              <div className='overlay'>
                <div className='text'>
                  <strong className='council-name'>Literary Council</strong>
                  <br />
                  <div className='council-description'>
                    The council aims to promote literature, creativity and
                    awareness among the students by organizing and conducting
                    several events, competitions and other literary functions
                    every academic session.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLife
