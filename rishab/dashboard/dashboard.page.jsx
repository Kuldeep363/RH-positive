import React from "react";

import "./dashboard.styles.css";

import { Link } from "react-router-dom";

import { AiOutlineSetting, AiOutlineRight } from "react-icons/ai";

import { FiCreditCard } from "react-icons/fi";

import { HiDownload } from "react-icons/hi";

import Donor from "../../assets/donor.jpeg";

import Card1 from "../../assets/card1.jpeg";

import Card2 from "../../assets/card2.jpeg";

import Navbar from "../../components/navbar/navbar.component";

import DonationHistory from "../../components/donationhistory/donationhistory.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

class Dashboard extends React.Component {
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
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-details">
          <div className="left-content">
            <h2 className="name">Welcome Olive Max</h2>
            <div className="history">
              <DonationHistory />
            </div>
          </div>
          <div className="right-content">
            <div className="donor-info">
              <div className="edit-details">
                <div className="donor-links">
                  <Link className="link">
                    <AiOutlineSetting />
                  </Link>
                  <Link className="link">
                    <FiCreditCard />
                  </Link>
                </div>
                <div className="donor-bg">
                  <p>A+</p>
                </div>
              </div>
              <div className="donor-details">
                <img src={Donor} alt="" />
                <h2 className="name">Olive Max(23 Years)</h2>
              </div>
            </div>
            <div className="donation-details">
              <div className="units-donated">
                <h2>12 Units</h2>
                <p>Blood Donated</p>
              </div>
              <div className="life-saved">
                <h2>36</h2>
                <p>Lifes Save</p>
              </div>
            </div>
            <div className="card-details">
              <img src={imageName} alt="" />
              <div className="card-links">
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

export default Dashboard;
