import React from "react";
import pic from "../images/pic.png";
import { Link } from "react-router-dom";
const ContactCard = ({ contactVal, takingidfromcardhandler }) => {
  return (
    <div className="item">
      <img className="ui avatar image" src={pic} alt="" />
      <div className="content">
        <Link to={`/contact/${contactVal.id}`} state={contactVal}>
          <div className="header">{contactVal.name}</div>
          <div className="">{contactVal.email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "1px" }}
        onClick={() => takingidfromcardhandler(contactVal.id)}
      ></i>
    </div>
  );
};

export default ContactCard;
