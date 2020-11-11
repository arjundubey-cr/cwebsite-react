import React from "react";
import "../../commondesign.css";
import imgcsl from "../../images/ee/ControlSystemLab.png";
import imgeml1 from "../../images/ee/ElectricalMachineLab1.png";
import imgeml2 from "../../images/ee/ElectricalMachineLab2.png";
import imgemmil from "../../images/ee/EmmiLab.png";
import imgpsl1 from "../../images/ee/PowerSystemLab1.png";
import imgpsl2 from "../../images/ee/PowerSystemLab1.2.png";
import imgpsl3 from "../../images/ee/PowerSystemLab2.png";
import imgpsl4 from "../../images/ee/PowerSystemLab2.2.png";
import BMAClab1 from "../../images/ce/BMAClab1.png";
import BMAClab2 from "../../images/ce/BMAClab2.png";


const About = (props) => {
  const data = [
    {
      labName: "",
      description: "",
      src: imgcsl,
      alt: "Control system lab",
    },
    {
      src: imgeml1,
      alt: "Electrical machine lab 1",
    },
    {
      src: imgeml2,
      alt: "Electrical machine lab 2",
    },
    {
      src: imgemmil,
      alt: "Emmi lab",
    },
    {
      src: imgpsl1,
      alt: "Power system lab 1",
    },
    {
      src: imgpsl2,
      alt: "Power system lab 1.2",
    },
    {
      src: imgpsl3,
      alt: "Power system lab 2",
    },
    {
      src: imgpsl4,
      alt: "Power system lab 2.2",
    },
  ];
  return (
    <div className="about pl-2 pr-3 py-1">
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
        <h2 className="intro text-uppercase tx-blue">
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
          <div className="laboratory">
            <h4 className="laboratory font-weight-bold" dir="auto">
              1.Basic Electrical Engineering lab
            </h4>
            <p>
              <strong>Number of Equipments: 08</strong> (Vicat’s Apparatus,
              Compression Testing Machine, Le-Chatelier’s Apparatus, Flexure
              Testing Machine, Sieve Shaker & I.S. Sieves (coarse &fine both),
              Silt Content & Bulking of sand, Oven, Cube Vibrator)
            </p>
            <div className="civil-labs">
              <div className="civil-lab-image">
                <img src={BMAClab1} alt=""/>
                <img src={BMAClab2} alt=""/>
              </div>
              <div className="civil-lab-label">
                <p>
                  <strong>
                  Building Materials & Construction Lab
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <h4 className="laboratory font-weight-bold" dir="auto">
            2.Electrical Machines Lab - I
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            3.Electrical Machines Lab- II
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            4.Network Analysis and Synthesis Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            5.Electrical Measurement and Measuring Instruments Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            6.Power System Lab - I
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            7.Power System Lab - II
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            8 Control System Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            9.Electrical Design and Fabrication Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            10.Power Electronics Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            11. Switchgear and Protection Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            12. Electric Drives Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            13. Simulation Lab
          </h4>
          <h4 className="laboratory font-weight-bold" dir="auto">
            14. Instrumentation and Process control Lab
          </h4>
        </div>
        <div className="computer-center-images">
          <h2 className="intro text-uppercase tx-blue font-weight-bold">
            Laboratories in Department of Computer Science & Engineering
          </h2>
          <div className="lab-image my-3">
            {data.map((data, index) => (
              <img
                src={data.src}
                alt={`${data.alt}`}
                className="lab-inside img-border"
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
