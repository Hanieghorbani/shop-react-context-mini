import React from "react";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";
import { useContext } from "react";
import productsContext from "../../contexts/productsContext";

export default function Navbar() {
  const contextData= useContext(productsContext)
  let count = 0
  contextData.userCart.forEach(prod => {
    count += prod.count
  })
  return (
    <nav class="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a href="#" className="navbar-brand">
          SabzLearn Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag" onClick={()=>contextData.setIsShowCart(true)}>
            <BsBag className="text-white" />
            <span className="bag-products-counter">{count}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
