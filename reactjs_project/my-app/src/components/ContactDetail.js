import React from "react";
import pic from "../images/pic.png";
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
  console.log("🚀 ~ ContactDetail ~ props:", props);

  const location = useLocation();
  console.log("🚀 ~ ContactDetail ~ location:", location);

  const { name, email } = location.state;
  //   console.log("🚀 ~ ContactDetail ~ name:", name);
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={pic} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
