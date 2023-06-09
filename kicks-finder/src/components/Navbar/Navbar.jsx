import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import "./Navbar.css";
import { Cart } from "../Cart/Cart";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/flag.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="home-link" to="/">
            {" "}
            KICKS AVENUE
          </Link>
        </div>
        <div className="right">
          <div className="center">
            <Link className="link" to="/">
              {" "}
              Home
            </Link>
          </div>
          <div className="center">
            <Link className="link" to="/">
              {" "}
              About
            </Link>
          </div>
          <div className="center">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="center">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>

        {/* Hamburger selector */}
        <div
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link className="link" to="/" onClick={closeMobileMenu}>
              {" "}
              Home
            </Link>

            <Link className="link" to="/products/1" onClick={closeMobileMenu}>
              Men
            </Link>
            <Link className="link" to="/products/1" onClick={closeMobileMenu}>
              Women
            </Link>
            <Link className="link" to="/products/1" onClick={closeMobileMenu}>
              Children
            </Link>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        )}
      </div>
      {open && <Cart />}
    </div>
  );
};
