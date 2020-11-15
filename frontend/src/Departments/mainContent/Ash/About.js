import React from "react";
import "../../commondesign.css";
// import BMAClab1 from "../../images/ce/BMAClab1.jpg";


const About = (props) => {
  const lab = [
    
  ];

  return (
    <div className="about pl-2 pr-1 py-1">
      <div className="social-handle mb-2 p-2 ">
        <div className="youtube">
          <a
            className="a-text-none"
            href="https://www.youtube.com/channel/UCYYdzJx1d_Ktjg9HHpuhJuQ/videos"
            alt="Computer Science youtube Channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-danger font-awsome"></i>
            <span className="ml-2 text-danger" style={{ fontSize: "1rem" }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className="introduction">
        <h2 className="intro text-uppercase tx-blue ">
          DEPARTMENT OF civil engineering
        </h2>
        <p className="pl-3">
          The Department of Civil Engineering offers 4 years B.Tech in Civil
          Engineering and it has an intake of 66 students. The department has a
          well qualified faculty and technical supporting staff. All the
          laboratories of the department are well equipped with modern
          equipments.
        </p>
      </div>
      <div className="course-offered">
        <h2 className="intro text-uppercase tx-blue">Course offered</h2>
        <ul className="course-list">
          <li>
            <strong>
              Bachelor of Technology in Civil Engineering (Duration-4 years)
            </strong>
          </li>
          <li>
            <strong>
              Bachelor of Technology in Civil Engineering- Lateral (Duration-3
              years)
            </strong>
          </li>
        </ul>
      </div>
      <div className="deparment">
        <h2 className="intro text-uppercase tx-blue">
          CONSULTANCY AREAS OF Civil ENGINEERING
        </h2>
        <div>
          <ol>
            <li>
              <strong>Water Treatment</strong>
            </li>
            <li>
              <strong>Waste Water Treatment</strong>
            </li>
            <li>
              <strong>Solid Waste Management</strong>
            </li>
            <li>
              <strong>E-waste Management</strong>
            </li>
            <li>
              <strong>Rain Water Harvesting</strong>
            </li>
            <li>
              <strong>Aggregate Testing </strong>
            </li>
            <li>
              <strong>Concrete Testing </strong>
            </li>
            <li>
              <strong>Cement Testing </strong>
            </li>
            <li>
              <strong>Bitumen Testing </strong>
            </li>
            <li>
              <strong>Brick Testing</strong>
            </li>
            <li>
              <strong>Soil Testing</strong>
            </li>
          </ol>
        </div>
      </div>
      <div className="computer-center">
        <h2 className="intro text-uppercase tx-blue">
          Laboratories in Department of Civil ENGINEERING
        </h2>
        <div dir="auto" className="mx-3">
          {lab.map((lab, index) => (
            <div className="laboratory">
              <h4 className="laboratory font-weight-bold" dir="auto">
                {`${lab.id}`}.{`${lab.lab}`}
              </h4>
              <p>
                <strong>{`${lab.description.substring(0, 24)}`}</strong>{" "}
                {`${lab.description.substring(24)}`}
              </p>
              <div className="civil-labs">
                <div className="civil-lab-image">
                  {lab.images.map((image, index) => (
                    <img src={image} alt={`${lab.alt[index]}`} />
                  ))}
                </div>
                <div className="civil-lab-label">
                  <p>
                    <strong>{`${lab.lab}`}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
