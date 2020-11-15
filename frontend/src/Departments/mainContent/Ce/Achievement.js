import React from "react";
import "../../commondesign.css";
import image1 from "../../images/ce/Achievement/achieve1.png";
import image2 from "../../images/ce/Achievement/achieve2.png";
import image3 from "../../images/ce/Achievement/achieve3.png";
import image4 from "../../images/ce/Achievement/achieve4.png";
import image5 from "../../images/ce/Achievement/achieve5.png";
import image6 from "../../images/ce/Achievement/achieve6.png";
import image7 from "../../images/ce/Achievement/achieve7.png";
import image8 from "../../images/ce/Achievement/achieve8.png";
import image9 from "../../images/ce/Achievement/achieve9.png";

const Achievement = (props) => {
  return (
    <div className="container-fluid pl-1 pr-2">
      <div className="introduction">
        <h2 className="intro text-uppercase tx-blue">Achievement</h2>
      </div>
      <div className="civil-achievement">
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            1. Workshop by CADD Centre:
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>18 October 2019, Lucknow</strong>: A workshop on{" "}
            <strong>
              ‘STADD pro. - Structural Analysis And Designing Program’
            </strong>{" "}
            was successfully conducted on 18 October 2019 in Faculty of
            Engineering and Technology, University of Lucknow, New Campus, by
            CADD Centre Training Services Pvt. Ltd. The workshop was organized
            by Training and Placement Cell, for the students of B.Tech, Third
            Year, Civil Engineering. <br></br>
            <br></br>
            The Objective of the workshop was to provide the students with an
            insight of Structure Modeling, Designing and Analysis, Integrated
            Design and Finite Element Analysis. The workshop consisted of
            Introduction about the software, types of Structures and their
            idealization, workflow of STADD Pro, structural geometry, node and
            beam creation, wind and seismic load on structure etc. Along with
            STADD Pro, the students were also introduced with some other
            software like AutoCAD, Revit Architecture, 3D Max, Etabs etc. which
            are equally helpful for the students for the better understanding of
            structural analysis .The Softwares were discussed by Er. Mohd. Faraz
            and Civil CADD Expert, Siddhant Singh, from CADD Centre, Lucknow.
          </p>
          <div className="civil-achieve-flex">
            <div className="civil-achieve-img pl-3">
              <img src={image1} alt="image1" />
              <img src={image2} alt="image2" />
            </div>
          </div>
          <p className="civil-achieve-description pl-3">
            At the end of the workshop, students were amazed to see how software
            eliminates the countless man-hours required to properly load a
            structure by automating all kind of forces & solving a typical
            structural analysis problem with just a few clicks. The workshop
            started with excitement and went well with enthusiastic interaction
            throughout. All the students were rewarded with the Certificate of
            learning at the end of the workshop.
          </p>
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            2. Technical Lecture by Ultratech Cement Pvt. Ltd.
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>Lucknow, 6th November, 2019:</strong> A workshop on Lucknow,
            6th November, 2019: A technical lecture on
            <strong>“Cement and its manufacturing processes”</strong> was
            successfully conducted by Ultratech Cement Pvt. Ltd. on 6th
            November, 2019 in Faculty of Engineering & Technology, University Of
            Lucknow, New Campus for the students of B.Tech-3rd year, Civil
            Engineering Department.<br></br>
            <br></br>
            The lecture was arranged by Training & Placement Cell in the seminar
            hall on second floor, Block 1. This lecture was attended by all 57
            students of third year. It began at 12:10 p.m. with an objective to
            familiarize the students with on field working conditions faced by
            engineers at a Cement Plant. Mr. Pradip Kumar Jha, Regional Head,
            Technical Services, Ultratech cement discussed about cement
            manufacturing process, cement hydration, types of cement, its
            application, its properties and blended cement by showing related
            videos to the students in between the lecture. The water repellent
            nature of hydrophobic cement was demonstrated by Mr. Abhay Pratap
            Singh, Territory Technical Services Manager, Ultratech Cement,
            Lucknow. All students were taught how to read “test certificate” for
            Portland Pozzolana Cement by providing a hard copy to each of them.
          </p>
          <div className="civil-achieve-img pl-3">
            <img src={image3} alt="image1" className="single-image" />
          </div>
          <p className="civil-achieve-description pl-3">
            Throughout the lecture, students gained knowledge about technical
            facts related to cement & its production from a practical point of
            view. The lecture was enthusiastic & full of insight. Ultratech
            Cement Pvt. Ltd. assured full support for the overall development of
            the students. In the end, the guests were presented with a memento
            by Respected Jitendra Sir, Departmental Incharge.
          </p>
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            3. Technical Lecture by XPLOCC Technologies
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>Lucknow, 24th February, 2020:</strong> A technical lecture
            on was successfully conducted by XPLOCC Technologies on 24th Februar{" "}
            <strong>“Application of MATLAB in Civil Engineering”</strong>, 2020
            in Faculty of Engineering & Technology, University Of Lucknow, New
            Campus for the students of B.Tech - 2nd year & 3rd year, Civil
            Engineering Department.<br></br>
            <br></br>
            The lecture was organized in the seminar hall on second floor, Block
            1. This lecture was attended by 85 students of B. Tech. second and
            third year. Er. Ashish Saroj, CEO, XPLOCC Technologies, delivered
            the lecture with the following objectives:
            <ul>
              <li>
                The main objective of this lecture was to familiarize the
                students with utilities of MATLAB in the life of a Civil
                Engineer.
              </li>
              <li>
                Analysis of super structure on the basis of Aerodynamics on a
                multi degree of freedom of building.
              </li>
              <li>
                Use of Laplace’s Equation in MATLAB for Civil Engineering
                Problem like; resonances in structure; bridges.
              </li>
              <li>
                Importance of providing graphical solution to numerical problem.
                Computing and visualizing the deflection of a propped cantilever
              </li>
            </ul>
            The lecture also provided an insight into various interesting
            engineering aspects of high rise building, technical drawings,
            industrial problems, urgent need to reduce the environmental
            degradation. The lecture turned out to be a very interactive session
            encompassing huge student participation and response. We look
            forward to more of such insightful sessions with XPLOCC
            Technologies.
          </p>
          <div className="civil-achieve-flex">
            <div className="civil-achieve-img pl-3">
              <img src={image4} alt="image1" />
              <img src={image5} alt="image2" />
            </div>
          </div>
          <br />
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            4. Triangulation Camp
          </h5>
          <div className="civil-achieve-flex">
            <div className="civil-achieve-img pl-3">
              <img src={image6} alt="image1" />
              <img src={image7} alt="image2" />
              <img src={image8} alt="image3" />
              <img src={image9} alt="image4" />
            </div>
          </div>
          <br />
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            5. Webinar on “Entrepreneurship Development Programme in Solar
            Energy”
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>Lucknow, 14thApril, 2020:</strong> Amidst nationwide
            lockdown due to Covid-19 when most of the things came to standstill,
            with restrictions on travel & gathering, we had to ensure that
            learning does not get hindered for the students of{" "}
            <strong>Faculty of Engineering & Technology, LU</strong>. A webinar
            on{" "}
            <strong>
              <u>“Entrepreneurship Development Programme in Solar Energy”</u>
            </strong>{" "}
            was organised on 14th April 2020 at 12:00 pm for B. Tech. 3rd year
            students, Civil Engineering Department on “Cisco WebEx App.” Mr.
            Rohit Mehrotra, Project Head of Enterprise for Industrial and
            Corporate Training (EICT) shared his knowledge and years of
            experience with students and answered their queries.<br></br>
            <br></br>
            The objective of this webinar was to familiarise the students with,
            <ol>
              <li>
                Importance of Solar Energy as an alternate source of energy.
              </li>
              <li>
                Classification of methods for solar energy utilisation (Direct
                and Indirect Methods).
              </li>
              <li>
                Availability of solar energy at global level and in India
                through maps depicting solar belt data.
              </li>
              <li>Various solar heating devices and their components.</li>
              <li>Physics of Photovoltaic generation.</li>
              <li>Solar Panel manufacturing technologies being used.</li>
              <li>
                Comparison between various renewable and non-renewable sources
                of energy and advantages of solar energy over them.
              </li>
              <li>
                Solar steam cooking systems employed across nation and serving
                mankind with their performance.
              </li>
            </ol>
            Around 40 students attended the webinar with keen interest &
            enthusiasm throughout. This came out to be a different learning
            experience altogether for the students as they gained
            knowledge(without being in same physical space as the speaker)about
            prioritising Green Construction & environment protection as the need
            of the hour and how to incorporate solar energy as a sustainable,
            affordable and cleaner source with rapid urbanisation and
            industrialisation in developing countries. We thrive for more such
            sessions during these challenging times.
          </p>
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            6. Webinar on Building Design by CADD Centre, Hazratganj
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>Lucknow, 25thApril, 2020:</strong> A webinar on{" "}
            <strong>
              <u>“Building Design & Emerging Trends in Civil Engineering”</u>
            </strong>{" "}
            was organized in Department of{" "}
            <strong>
              Civil Engineering, Faculty of Engineering & Technology, University
              of Lucknow
            </strong>{" "}
            on 25th April, 2020 for the students of B. Tech, Civil Engineering.
            <br />
            This webinar, held in 2 sessions, aimed at providing the students
            with the knowledge of various trends emerging in the field of
            building design along with providing a new positive perspective &
            learning approach during this global pandemic.
            <br />
            <br />
            <h6>
              <strong>
                Session 1: ‘Pandemic Crisis’ Or ‘A Great Opportunity’
              </strong>
            </h6>
            Webinar was presided over by{" "}
            <strong>Prof. R.S Gupta, Coordinator/Incharge</strong>, FOET,
            University of Lucknow who inaugurated the webinar. Introduction of
            the programme was given by <strong>Er. Nidhi Srivastava</strong>.
            <br />
            <strong>Mr. Rajendra Kumar</strong>, a motivational speaker, started
            the session with great energy & enthusiasm. He came as a guiding
            light for the students, encouraging them to perceive this global
            lockdown situation as a great opportunity to learn & enhance their
            skills in various fields related to Civil Engineering & Building
            design. His positive approach helped the students to overcome the
            stress & anxiety regarding the future uncertainties due to Covid-19.
            <br />
            <br />
            <h6>
              <strong>Session 2: Building Design & Emerging Trends</strong>
            </h6>
            The session was taken over by <strong>Mr. Ali Ansari</strong>, a
            software expert in Building Design. He started the session with the
            introduction of various softwares involved in building design &
            their wide range of applications in different aspects of drafting &
            drawing. Initially, the students learned about the drawing &
            drafting concepts with the help of AUTOCAD followed by the
            structural design of a building. This involved the use of STAAD Pro
            for structural analysis of individual components of a building like
            beams & columns. The students understood these concepts with the
            help live demo of the analysis showcased in the software.
            <br />
            Further, he emphasized on the architectural importance of a
            building, moving on to another software i.e. Revit Architecture.
            Live models of buildings designed with Revit were shown to the
            students with a new trending concept of ‘Walkthrough’ which is used
            in live projects nowadays. Finally, the session moved on to another
            important aspect of Construction projects, i.e. Project Management &
            Project Planning.
            <br />
            At the end of webinar students raised several queries and expert
            answered their all questions satisfactorily. The webinar was
            successfully concluded with a formal vote of thanks to all the
            participants and the dignitaries present during the webinar.
          </p>
        </div>
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            7. Webinar on Concrete Technology and Design Standards by IS:456
          </h5>
          <p className="civil-achieve-description pl-3">
            <strong>Lucknow, 1stMay, 2020:</strong> A webinar on{" "}
            <strong>
              <u>
                “Concrete Technology and Design Standards by IS:456 (Code for
                Plain and Reinforced Concrete)”
              </u>
            </strong>{" "}
            was organized in Department of Civil Engineering,{" "}
            <strong>
              Faculty of Engineering & Technology, University of Lucknow
            </strong>{" "}
            on 1stMay 2020 for the students of B. Tech, Civil Engineering.
            <br />
            The objective of the webinar was to share the new developments in
            the field of concrete and to enhance the knowledge of students in
            the area of Reinforced Cement Concrete. It also aimed at
            understanding the design procedures of Indian standard code and to
            inculcate its practical uses in Construction Projects. Webinar was
            presided over by{" "}
            <strong>Prof. R.S Gupta, Coordinator/Incharge</strong>, FOET,
            University of Lucknow who inaugurated the webinar. Introduction of
            the programme was given by{" "}
            <strong>Er. Jitendra Pratap Singh</strong>.
            <br />
            <strong>Prof. Veerendra Kumar</strong>, Civil Engineering
            Department, <strong>IIT-BHU</strong> talked about the new advances
            in the field of concrete technology. He shared his views on the
            various technical aspects related to cement & concrete. Various new
            alternatives of conventional cement such as Portland Pozzolana
            Cement (PPC), Lime Calcined Clay Cement (LC3) etc were also
            discussed with an emphasis on Low Carbon Content generated during
            their production. He also emphasized on the various technicalities
            involved in the curing of concrete during different seasons.
            Discussion went through a wide range of topics like ‘the properties
            of freshly prepared concrete’ to ‘an alternative of conventional
            concrete such as Self Compacting Concrete’. Further, the design
            mixes for various constituents were given a thorough explanation in
            the context of IS456.
            <br />
            At the end of webinar students raised several queries and expert
            answered their all questions satisfactorily. The webinar was
            successfully concluded with a formal vote of thanks to all the
            participants and the dignitaries present during the webinar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
