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
          <table class="table table-condensed table-bordered pub table-striped">
            <thead>
              <tr class="bg-dark">
                <th className='text-white' width="3%">S.No.</th>
                <th className='text-white' >Description</th>
                <th className='text-white' >View</th>
              </tr>
            </thead>
            <tbody id="tblTimeTable">
              <tr>
                <td class="text-center">1</td>
                <td>Ordinance Rules &amp; Regulations for B.Tech Programme</td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_f245b3b7-82a0-4763-abe4-998cd765f73a_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>
                  B.Tech First Year Syllabus (Common for All Branches )
                  Effective from Session 2017-18
                </td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_a5444e8f-742e-44d8-ac2f-94f339cee9aa_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>B.Tech Second Year Syllabus Mechanical Engineering</td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_86333b78-c9ea-4939-ad28-ff6c2ba51e05_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td>B.Tech Third Year Syllabus Mechanical Engineering </td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_fef827e6-8c4a-4e21-b2cf-8d5f70d2de09_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td>B.Tech Fourth Year Syllabus Mechanical Engineering</td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_15803642-8eb9-4bfb-b084-170da3850ece_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td>Open Elective Syllabus</td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_8839fc80-c024-4e05-9540-487739b5d7e5_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td>POs-PSOs-COs of B.Tech (Mechanical Engineering)</td>
                <td class="text-center">
                  <a
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_6aa56e01-fbf2-4307-8112-9c86a259140b_55.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
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
