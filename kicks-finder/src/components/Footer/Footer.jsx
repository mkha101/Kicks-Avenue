import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Find all the best new releases at KicksAvenue, where we are
            dedicated to fulfilling all of your shoe needs
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Contact us here</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">KicksAvenue</span>
          <span className="copyright">
            © Copyright 2023. All Right Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};
