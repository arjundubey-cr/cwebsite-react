import React from 'react'
import '../../commondesign.css'
// import ComputerLab1 from '../../images/cse/computer_lab_1.png'
// import ComputerLab2 from '../../images/cse/computer_lab_2.png'
// import ComputerLab3 from '../../images/cse/computer-lab-3.png'
// import matlab from '../../images/cse/matlab.png'
// import NetworkLab from '../../images/cse/network-lab.png'

const Faculty = (props) => {
    return (
        <div className="Faculty">
            <div className="faculty-data">
                <div className="faculty-member card p-3">
                    <div className="faculty-image">
                        <img src={require('../../images/cse/faculty/HimanshuPandey.jpg')} alt="" className="member-image" />
                    </div>
                    <div className="faculty-detail m-2 p-2">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="p-2"><i className="fas fa-user"></i></td>
                                    <th className="p-2">Himanshu Pandey</th>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">7905287870</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:hpandey010@gmail.com" className="text-danger">hpandey010@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faculty