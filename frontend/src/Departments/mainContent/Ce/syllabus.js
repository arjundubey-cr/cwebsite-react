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
                <th className='text-white text-center' width="3%">S.No.</th>
                <th className='text-white mx-auto text-center' >Description</th>
                <th className='text-white mx-auto text-center' >View</th>
              </tr>
            </thead>
            <tbody id="tblTimeTable">
              <tr>
                <td class="text-center">1</td>
                <td>Ordinance Rules &amp; Regulation for B.Tech Programme </td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_a273ad60-fbba-42a1-afe5-4f83f015e52b_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>B.Tech Second Year Syllabus Civil Engineering</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_9410810b-16b8-427a-8ed3-8f902fbf885c_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>B.Tech Third Year Syllabus Civil Engineering</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_afee0b1f-1aa1-406a-af8d-4d2f69979a13_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td>B.Tech Fourth Year Syllabus Civil Engineering</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_58b9b94a-f4ea-4a2c-8e2b-93d3d62eabcc_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">5</td>
                <td>Open Elective Syllabus</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_40a64617-2698-4ac0-9184-408bfd3d9927_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">6</td>
                <td>
                  B.Tech First Year Syllabus (Common For All Branches) Effective
                  from session 2017-18
                </td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_e4f5f041-3089-4716-b4a5-f98f86d347f0_59.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">7</td>
                <td>POs-PSOs-COs of B.Tech (Civil Engineering)</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_41c7214c-bf70-4ce9-89a0-aa37872bf6f8_59.pdf"
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
