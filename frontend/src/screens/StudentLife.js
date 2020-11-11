import React from 'react'

const StudentLife = () => {
  return (
    <div>
      <div className='section-heading text-center'>Student Life at FOET</div>
      <hr className='section-underline' />
      <div className='section-sub-heading container-fluid text-center my-3'>
        Council of Student Activities
      </div>
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
      <br />
      <div className='description container'>
        The introduction of a new course structure in 2017 has provided an
        opportunity for undergraduate students to build a career to suit their
        interests and aspirations. The curriculum enables students to develop
        their subject knowledge, academic literacy, and a range of complementary
        capabilities. Apart from the academic curriculum, there are
        co-curricular and extra-curricular activities, which means any activity
        that falls outside the academic curriculum is part of the Engineering
        curriculum. To keep the program functional, various councils are in
        place.
      </div>
      <div className='description container'>
        These councils are as under:
        <ul className='council-list'>
          <li>Technical Council</li>
          <li>Sports Council</li>
          <li>Fine Arts and Photography Council</li>
          <li>Literary Council</li>
          <li>Cultural Council</li>
        </ul>
      </div>
    </div>
  )
}

export default StudentLife
