import React from "react";

import "./donordetails.styles.css";

import Navbar from "../navbar/navbar.component";

import { Link } from "react-router-dom";

import { AiOutlineRight, AiOutlineLeft, AiOutlineCamera } from "react-icons/ai";

import { HiDownload } from "react-icons/hi";

import Donor from "../../assets/donor.jpeg";

import Card1 from "../../assets/card01.jpeg";

import Card2 from "../../assets/card02.jpeg";

import NavbarForMobile from "../navbarformobile/navbar.component";

class DonorDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }
  toggleImage = () => {
    this.setState = { open: !this.state.open };
  };
  getImageName = () => (this.state.open ? Card1 : Card2);
  render() {
    const imageName = this.getImageName();
    return (
      <div className="donordetails-container">
        <Navbar />
        <Link to="/dashboard" className="prevlink">
          <AiOutlineLeft />
        </Link>
        <div className="donordetails">
          <div className="leftcontent">
            <div className="donorinfo">
              <div className="donor-bg">
                <p>A+</p>
              </div>
              <div className="donor-image">
                <div className="wrapper">
                  <input type="file" className="my-file" />
                </div>
                <div className="camera">
                  <AiOutlineCamera />
                </div>
                <h2 className="name">Olive Max(23 Years)</h2>
              </div>
            </div>
            <div className="form">
              <div className="inputs inputs1">
                <div className="input-container">
                  <input type="text" className="inputtext" placeholder="" />
                  <span>Name</span>
                </div>
                <div className="input-container">
                  <input type="number" className="inputtext" placeholder="" />
                  <span>Phone Number</span>
                </div>
              </div>
              <div className="inputs inputs2">
                <div className="input-container">
                  <input type="number" className="inputtext" placeholder="" />
                  <span>Aadhar Id</span>
                </div>
                <div className="input-container">
                  <input type="email" className="inputtext" placeholder="" />
                  <span>Email Address</span>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  className="inputtext addressinput"
                  placeholder=""
                />
                <span className="addresslabel">Address</span>
              </div>
            </div>
            <button type="button" className="submit-button">
              Submit
            </button>
          </div>
          <div className="rightcontent">
            <div className="carddetails">
              <img src={imageName} alt="" />
              <div className="cardlinks">
                <Link className="link">
                  <AiOutlineRight />
                </Link>
                <Link className="link" onClick={this.toggleImage.bind(this)}>
                  <HiDownload />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <NavbarForMobile />
      </div>
    );
  }
}
export default DonorDetails;
