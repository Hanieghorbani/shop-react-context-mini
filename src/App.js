import React, { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import ProductsSection from "./Components/ProductsSection/ProductsSection"
import "./App.css"
import products from "./data/products"
import Cart from "./Components/Cart/Cart"
import Toast from "./Components/Toast/Toast"
import productsContext from "./contexts/productsContext"

export default function App() {
  const [allProducts, setAllProducts] = useState(products)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <productsContext.Provider
      value={{
        allProducts,
        userCart,
        setUserCart,
        isShowToast,
        setIsShowToast,
        isShowCart,
        setIsShowCart,
      }}
    >
      <Navbar />
      <main className="pb-5">
        <div className="container">
          <h1 className="text-center main-title">All Products</h1>
          <ProductsSection />
        </div>
      </main>
      <Toast />

      <Cart />
    </productsContext.Provider>
  )
}
