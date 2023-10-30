import React, { useContext } from "react"
import { BsBag } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import "./Cart.css"
import productsContext from "../../contexts/productsContext"

export default function Cart() {
  const contextData = useContext(productsContext)
  return (
    <aside className={`bag-sidebar ${contextData.isShowCart && "active"}`}>
      <h3 className="bag-title position-sticky top-0 z-2 bg-white">
        <span>
          <BsBag />
          Bag
        </span>
        <span>
          <AiOutlineClose
            className="close-icon"
            onClick={() => contextData.setIsShowCart(false)}
          />
        </span>
      </h3>
      <div className="row bag-wrapper">
        {contextData.userCart.map((cart) => (
          <div className="col-12 mt-5" key={cart.id}>
            <div className="card py-3 px-3">
              <div className="col-12 text-center">
                <img
                  src={cart.img}
                  alt="Product Image"
                  className="cart-img-top w-75"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <p className="card-text">{cart.title}</p>
                <p className="price">{cart.price}$</p>
                <br />
                <a href="#" className="btn btn-danger">
                  Buy
                </a>
                <a
                  href="#"
                  className="btn btn-outline-dark mt-3 text-capitalize"
                >
                  More Information
                </a>
                <p className="number">{cart.count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
