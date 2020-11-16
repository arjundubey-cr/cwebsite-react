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
                <th className='text-white text-center' >Description</th>
                <th className='text-white text-center' >View</th>
              </tr>
            </thead>
            <tbody id="tblTimeTable">
              <tr>
                <td class="text-center">1</td>
                <td>
                  B.Tech First Year Syllabus (Common for All Branches )
                  Effective from Session 2017-18
                </td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_c2e593a5-2146-4d95-bdfa-57538d9a9816_72.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>
                  B.Tech Second Year Syllabus (Environment &amp; Ecology and
                  Human Values &amp; Ethics)
                </td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_fb9bc468-67df-4e32-a108-42f478e96733_72.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>Open Elective Syllabus</td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_9c354651-5d8b-47b1-a1d6-2092c8309db2_72.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td class="text-center">4</td>
                <td>
                  POs-PSOs-COs of B.Tech (Applied Science &amp; Humanities)
                </td>
                <td class="text-center">
                  <a
                    className='text-dark'
                    href="http://udrc.lkouniv.ac.in//Content/DepartmentContent/SY_9c8aaedd-7022-4b71-ae9f-a1c0e39b3d29_72.pdf"
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
