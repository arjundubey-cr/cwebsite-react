import React from "react";
import "../../commondesign.css";
import imgakt from "../../images/ash/faculty/ANUPAMKUMARTRIPATHI.jpg";
import imgdg from "../../images/ash/faculty/DEEPAKGUPTA.jpg";
import imgkv from "../../images/ash/faculty/KHUSHBOOVERMA.jpg";
import imgrp from "../../images/ash/faculty/RACHANAPATHAK.jpg";
import imgrps from "../../images/ash/faculty/RANVIJAYPRATAPSINGH.jpg";
import imgss from "../../images/ash/faculty/SAVYASACHI.jpg";
import imgsb from "../../images/ash/faculty/SHASHIBALA.jpg";
import imgis from "../../images/ash/faculty/ISHASINGH.jpg";
import imgks from "../../images/ash/faculty/KAUMUDISINGH.jpg";
import { ReactComponent as Briefcase } from "../../../assets/logo/briefcase.svg";
import { ReactComponent as Email } from "../../../assets/logo/email.svg";
import { ReactComponent as Phone } from "../../../assets/logo/phone.svg";
const Faculty = () => {
  const data = [
    {
      name: "Dr. ANUPAM KUMAR TRIPATHI",
      image: imgakt,
      post: "Assistant Professor",
      phoneNum: "9450358456",
      email: "tripathi198117@gmail.com",
    },
    {
      name: "Dr. DEEPAK GUPTA",
      image: imgdg,
      post: "Assistant Professor",
      phoneNum: "9415945708",
      email: "dg61279@gmail.com",
    },
    {
      name: "Dr. KHUSHBOO VERMA",
      image: imgkv,
      post: "Assistant Professor",
      phoneNum: "9473789438",
      email: "1986khushi@gmail.com",
    },

    {
      name: "Dr. RACHANA PATHAK",
      image: imgrp,
      post: "Assistant Professor",
      phoneNum: "9044375304",
      email: "rachanapathak2@gmail.com",
    },

    {
      name: "Dr. RANVIJAY PRATAP SINGH",
      image: imgrps,
      post: "Assistant Professor",
      phoneNum: "8090196096",
      email: "rsingh0777@gmail.com",
    },
    {
      name: "Dr. SAVYA SACHI",
      image: imgss,
      post: "Assistant Professor",
      phoneNum: "9891002958",
      email: "savyasachi81@gmail.com",
    },
    {
      name: "Dr. SHASHI BALA",
      image: imgsb,
      post: "Assistant Professor",
      phoneNum: "9451246670",
      email: "shashichem15@gmail.com",
    },
    {
      name: "MS. ISHA SINGH",
      image: imgis,
      post: "Assistant Professor",
      phoneNum: "8765453699",
      email: "ishasinghwriterhc@gmail.com",
    },
    {
      name: "MS. KAUMUDI SINGH",
      image: imgks,
      post: "Assistant Professor",
      phoneNum: "7753817989",
      email: "kaumudi09.lu@gmail.com",
    },
  ];
  return (
    <div className="Faculty">
      <div className="container-fluid marketing">
        <div className="row faculty-data justify-content-space-between ml-1">
          {data.map((data, index) => (
            <div className="m-4 p-3 rounded faculty-detail">
              <img
                src={data.image}
                className="bd-placeholder-img img-shadow rounded-circle mb-3"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                aria-label="Placeholder: 140x140"
                alt={`${data.name}`}
              ></img>
              <h2 className="font-weight-bold faculty-name">{data.name}</h2>
              <table className="mobile-table">
                <tbody className="mobile-tbody">
                  <tr>
                    <td className="p-2">
                      <Briefcase />
                    </td>
                    <td className="p-2">{data.post}</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <Phone />
                    </td>
                    <td className="p-2">{data.phoneNum}</td>
                  </tr>
                  <tr>
                    <td className="p-2">
                      <Email />
                    </td>
                    <td className="p-2">
                      <a href={`mailto:${data.email}`} className="text-danger">
                        {data.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
