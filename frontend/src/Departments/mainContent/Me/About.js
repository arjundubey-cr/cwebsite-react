import React from "react";
import "../../commondesign.css";
import Image1 from "../../images/me/image1.jpg";
import { ReactComponent as Youtube } from "../../../assets/logo/youtube.svg";

const About = (props) => {
  const lab = [
    {
      id: "2",
      lab: "Strength of Materials lab",
      description:
        "Euipments: 6(Buckling Testing Machine, Universal testing machine, torsion testing machine, hardness, impact testing, bending )",
    },
    {
      id: "3",
      lab: "Thermodynamics lab",
      description:
        "Equipments:11 (Separating And Throttling Calorimeter Apparatus, Bomb Calorimeter, CochranBoiler, Cornish Boiler,Steam Engine, Velocity compounded steam turbine. Pressure compounded steam turbine, Impulse and Reaction turbine, Gas Turbine, Window AC, Refrigerator)",
    },
    {
      id: "4",
      lab: "Material Science & Testing lab",
      description:
        "Equipments:9 (Spring Testing Machine, Plastic Moulding Machine, Injection/Press alongwith Plastic Granules (Thermo Plastic and Thermosetting Resin), Abrasive cut-off Wheel Machine with cooling arrangement, Hand Polisher (sanders board ),  Polishing Machine, Muffle Furnace,  Metallurgical Microscope, Faraday’s Law of electrolysis apparatus, Single Pan Electronic Balance)",
    },
    {
      id: "5",
      lab: "Manufacturing Science lab",
      description:
        "Equipments: 17  (Lathe machine, Milling machine, shaper, surface grinder, grinding wheel, drilling machine, power hacksaw,, electric welding machine, 3D printing machine appratus, Power Hammer, Sieve Shaker,  Tube Bending,  Hydraulic Press complete setup,  Wire Drawing Set up,  Sand Mixer Muller )",
    },
    {
      id: "6",
      lab: "Measurement & Metrology lab",
      description:
        "Equipments:15 (Verniercaliper, Micrometer, Tachometer, Sine bar, Slip Gauges, Dial Indicator, Feeler Guage, Bevel Protector, Themocouple Calibration Test Rig, Tool Makers Microscope, LVDT trainer kit, Pressure Calibrator with Master Pressure Gauge (Analog), Optical Stroboscope, Plug gauge, Plug & ring taper gauge)",
    },
    {
      id: "7",
      lab: "Heat & Mass Transfer lab",
      description:
        "Equipments:5 (Heat Transfer Through Composite Cylinder Apparatus.,Heat Transfer Through Composite Wall Apparatus,Heat Transfer Through a Pin-Fin (Natural and Forced) appratus, Parallel and Counter Flow Heat Exchanger Apparatus, Heat Pipe Apparatus.",
    },
    {
      id: "8",
      lab: "Fluid Machinery lab",
      description:
        "Equipments:3 (Reciprocating Pump Test Ring, Models of Different Impellers Of Pumps (Forward, Backward and Radial), Closed Circuit Hydraulic Ram Test Rig Hydraulic Ram)",
    },
    {
      id: "9",
      lab: "C. Engines lab",
      description:
        "Equipments:5 (Four Stroke Four Cylinder Petrol Engine Test Rig With Morse Test and with (Electrical/Eddy current Dynamometer), Single Cylinder Four Stroke Diesel Engine Test Rig with (Electrical/Eddy current Dynamometer), Two Stage Reciprocating Air Compressor Test rig, Exhaust Gas Analyser (5 Gas – CO CO2 HC NOx O2) setup, Cut section model of four stroke diesel engine)",
    },
    {
      id: "10",
      lab: "Theory of Machines lab",
      description:
        "Equipments:9 (Simple Linkage models/mechanisms, Four Bar Linkage, Slider Crank Mechanisms, Gear Tooth form/profile apparatus, Gear Train, Dead Weight type Governor,Spring Controlled Governor, Gyroscope, Free and Forced Vibration Apparatus)",
    },
    {
      id: "11",
      lab: "Machine Design lab",
      description:
        "Equipments:4 (muff coupling, flexible coupling, rivet joints, bolted joints)",
    },
  ];
  return (
    <div className="about pl-2 pr-3 py-1">
      <div className="social-handle mb-2 p-2 pl-1">
        <div className="youtube">
          <a
            className="a-text-none"
            href="https://www.youtube.com/channel/UC09Z_JT1jVTs1_nsXP5UKPQ"
            alt="Computer Science youtube Channel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube />
            <span className="ml-2 text-danger" style={{ fontSize: "1rem" }}>
              Youtube Channel
            </span>
          </a>
        </div>
      </div>
      <div className="introduction">
        <div className="intro text-uppercase tx-blue container-fluid text-center section-heading">
          DEPARTMENT OF Mechanical Engineering
        </div>
        <hr className="section-underline" />
        <p className="pl-3">
          The Department of Mechanical Engineering offers 4 years undergraduate
          B.Tech programme & it has an intake of 66----- students The Department has
          a well qualified well experienced faculty and technical supporting
          staff. All the laboratories of the department are well equipped with
          modern equipments.
        </p>
      </div>
      <div className="course-offered">
        <h2 className="intro text-uppercase tx-blue">Course offered</h2>
        <ul className="course-list">
          <li>
            <strong>
              Bachelor of Technology Mechanical Engineering (Duration- 4 year)
            </strong>
          </li>
          <li>
            <strong>
              B.Tech in Mechanical Engineering -Lateral (Duration-3 years)
            </strong>
          </li>
        </ul>
      </div>

      <div className="deparment">
        <h2 className="intro text-uppercase tx-blue">
          CONSULTANCY AREAS OF Mechanical ENGINEERING
        </h2>

        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>1. Tesile Testing</strong>
            </li>
            <li>
              <strong>2. Compression Testing</strong>
            </li>
            <li>
              <strong>3. Impact Testing</strong>
            </li>
            <li>
              <strong>4. Adhesion Testing</strong>
            </li>
            <li>
              <strong>5. Pullout Testing</strong>
            </li>
            <li>
              <strong>6. Bending Testing</strong>
            </li>
            <li>
              <strong>7. Hysteresis Testing</strong>
            </li>
            <li>
              <strong>8. Torsion Testing</strong>
            </li>
            <li>
              <strong>9. Hardness Testing</strong>
            </li>
            <li>
              <strong>10. Microstructure</strong>
            </li>
            <li>
              <strong>11. Spring Testing</strong>
            </li>
            <li>
              <strong>12. Calorific Values Testing</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="deparment">
        <h2 className="intro text-uppercase tx-blue">
          CONSULTANCY AREAS OF Central Workshop
        </h2>

        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>1. Lathe Machining Works </strong>
            </li>
            <li>
              <strong>2. Milling Machining Works</strong>
            </li>
            <li>
              <strong>3. Welding Works</strong>
            </li>
            <li>
              <strong>4. Carpentry Works</strong>
            </li>
            <li>
              <strong>5. Sheet Metal Works</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="deparment">
        <h2 className="intro text-uppercase tx-blue">Central Workshop</h2>
        <p className="pl-3">
          The workshop has been developed as a central facility for imparting
          training to B.Tech. students of Mechanical, Electrical, Civil,
          Computer Science & Engineering and Electronics & Communication
          Engineering in various shops. Training will also be imparted to
          Mechanical Engineering students in the subject of Manufacturing
          Process . Facility of workshop being utilized by students of all the
          departments for fabrications of their jobs. Workshop facility is being
          extended to the students beyond working hours on Saturday and Sunday
          for fabrication of their technical needs. Shops are well equipped with
          latest tools, equipments and machineries. A very senior and
          experienced faculty member is looking after the workshop as workshop
          superintendent.
        </p>
        <p className="pl-3">
          Central Workshop comprises of following shops which are well equipped
          with latest tools and equipments:
        </p>
        <strong>
          <ul className="workshop-list">
            <li>Fitting Shop</li>
            <li>Welding Shop</li>
            <li>Sheet Metal Shop</li>
            <li>Carpentry Shop</li>
            <li>Pattern Making Shop</li>
            <li>Smithy Shop</li>
            <li>Foundry Shop</li>
            <li>Machine Shop</li>
          </ul>
        </strong>
      </div>
      <div className="computer-center">
        <div className="commputer-center-images">
          <h2 className="intro text-uppercase tx-blue">
            Laboratories in Department of Mechanical ENGINEERING
          </h2>
          <div dir="auto" className="mx-3 me-labs">
            <h4 className="laboratory font-weight-bold" dir="auto">
              1.Workshop Lab
            </h4>
            <p className="ml-2 pl-2">
              Workshop comprises of following shops which are well equipped with
              latest tools and equipments:
            </p>
            <ul className="workshop-list">
              <li>Fitting Shop</li>
              <li>Welding Shop</li>
              <li>Sheet Metal Shop</li>
              <li>Carpentry Shop</li>
              <li>Pattern Making Shop</li>
              <li>Smithy Shop</li>
              <li>Foundry Shop</li>
              <li>Machine Shop</li>
            </ul>
            {lab.map((lab, index) => (
              <div className="me-lab">
                <h4 className="laboratory font-weight-bold" dir="auto">
                  {`${lab.id}`}.{`${lab.lab}`}
                </h4>
                <p className="ml-2 pl-2">{`${lab.description}`}</p>
              </div>
            ))}
          </div>
          <div className="lab-image my-2">
            <img
              src={Image1}
              alt="Electronics lab"
              className="lab-inside img-border mr-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
