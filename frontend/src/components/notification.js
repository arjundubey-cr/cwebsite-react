import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import noticss from "./noticss.css";
const Notification = () => {
  return (
    <div className="notification-tab">
      <div className="title">
        <p className='glow'>News and Alerts</p>
      </div>
      <div className="notifications">
        <marquee behavior="scroll" direction="left" scrolldelay="10">
          <ul type="" className="notice">
            <a href="#">
              <li>fsjkvkefjbkgdbjgnbngbtrgiuobtrhu;ttrhtgutgtr</li>
            </a>
            <a href="#">
              <li>fsjkvkejgfiuguyghoooooooooooooooooooooooooooooof</li>
            </a>
            <a href="#">
              <li>fsjkvkemfjtuppppppppppppppppppppppppppppppppppppf</li>
            </a>
            <a href="#">
              <li>fsjetjiphjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkvkef</li>
            </a>
          </ul>
        </marquee>
      </div>
      <div className="show">
        <a href="">View all</a>
      </div>
    </div>
  );
};

export default Notification;
