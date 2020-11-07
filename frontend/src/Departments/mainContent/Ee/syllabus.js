import React from "react";
import "../../commondesign.css";

const CourseSyllabus = (props) => {
  return (
    <div className="syllabus pl-2 pr-2">
      <h2 className="intro text-uppercase tx-blue underline">
        COURSE CONTENTS OR COURSE OUTLINES
      </h2>
      <hr className="hr1 mx-2" />
      <div className="table-content pr-2 mx-2">
        <div className="table-responsive table-shadow mt-2 p-3 mt-4">
          <table className="table table-condensed table-bordered pub table-striped">
            <thead>
              <tr className="bg-dark">
                <th className="text-white" width="3%">
                  S.No.
                </th>
                <th className="text-white">Description</th>
                <th className="text-white">View</th>
              </tr>
            </thead>
            <tbody id="tblTimeTable">
              <tr>
                <td className="text-center">1</td>
                <td>B.Tech Third Year Syllabus Electrical Engineering </td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_bf8f03fb-9350-4376-83f1-c91c1c103d56_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td>Ordinance Rules &amp; Regulations for B.Tech Programme</td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_bd31fb5c-7a06-491a-9340-e67958a8d77d_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td>
                  B.Tech First Year Syllabus (Common for All Branches )
                  Effective from Session 2017-18
                </td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_370753fd-898a-44c7-9266-82fc671149a5_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">4</td>
                <td>B.Tech Second Year Syllabus Electrical Engineering</td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_44368896-4273-4380-bd8e-0d4929c591a3_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">5</td>
                <td>B.Tech Fourth Year Syllabus Electrical Engineering</td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_b8ebc529-2e8d-41b1-a39b-4fe89d66a485_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">6</td>
                <td>Open Elective Syllabus</td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_9e114ad3-37eb-4023-aeaf-4ed36fed963f_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">7</td>
                <td>POs-PSOs-COs of B.Tech (Electrical Engineering)</td>
                <td className="text-center">
                  <a
                    className="text-dark"
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_42bdb38a-e1c3-4ad0-afe8-e18e57ce70f4_56.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseSyllabus;
