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
            <div className="container-fluid marketing">

                <div className="row facuty-data justify-content-space-between ml-1">
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/HimanshuPandey.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Dr. Himanshu Pandey</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

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
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/AkanshaYadav.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Akansha Yadav</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">7524086772</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:itsakanksha9@gmail.com" className="text-danger">itsakanksha9@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/AnshuSingh.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er.Anshu Singh</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">7376252768</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:anshu.singh6225@gmail.com" className="text-danger">anshu.singh6225@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/ChandrabhanSingh.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Chandrabhan Singh</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">7275711509</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:chandrabhan98@gmail.com" className="text-danger">chandrabhan98@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/Pankajkumar.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Pankaj kumar</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">9452462043</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:lotus_28js@yahoo.com" className="text-danger">lotus_28js@yahoo.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/PriyankaTripathi.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2 " width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Priyanka Tripathi</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">9305595936</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:priyankatripathiknp@gmail.com" className="text-danger">priyankatripathiknp@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/Rohit.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Rohit</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">7007987502</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:rohitatknit@gmail.com" className="text-danger">rohitatknit@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/ShrutiSaxenaDas.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Shruti Saxena Das</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">8707524957</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:shipra.shruti@gmail.com" className="text-danger">shipra.shruti@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-3 m-4 p-3 rounded">
                        <img src={require('../../images/cse/faculty/ZeeshanAliSiddiqui.jpg')} className="bd-placeholder-img img-shadow rounded-circle mb-2" width="140" height="140" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140" alt="Himanshu Pandey"></img>
                        <h2 className="font-weight-bold">Er. Zeeshan Ali Siddiqui</h2>
                        {/* <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p> */}
                        <table className='mobile-table'>
                            <tbody className='mobile-tbody'>

                                <tr>
                                    <td className="p-2"><i className="fas fa-briefcase"></i></td>
                                    <td className="p-2">Assistant Professor</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-phone"></i></td>
                                    <td className="p-2">9810513463</td>
                                </tr>
                                <tr>
                                    <td className="p-2"><i className="fas fa-envelope"></i></td>
                                    <td className="p-2"><a href="mailto:zeealis@gmail.com" className="text-danger">zeealis@gmail.com</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Faculty;