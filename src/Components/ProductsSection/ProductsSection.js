/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./ProductsSection.css"
import { useContext } from "react"
import productsContext from "../../contexts/productsContext"
import products from "../../data/products"
import context from "react-bootstrap/esm/AccordionContext"

export default function ProductsSection() {
  const contextData = useContext(productsContext)
  function addToCart(product) {
    contextData.setIsShowToast(true)
    setTimeout(() => {
      contextData.setIsShowToast(false)
    }, 2000)

    let isInUserCart = contextData.userCart.some(
      (prod) => prod.title == product.title
    )

    if (!isInUserCart) {
      let newCartProd = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        img:product.img,
        count: 1,
      }
      contextData.setUserCart((prev) => [...prev, newCartProd])
    } else {
      let userCart = [...contextData.userCart]
      // way 1
      // userCart.some(prod=>{
      //   if(prod.title == product.title){
      //     prod.count += 1
      //     return true
      //   }
      // })

      // contextData.setUserCart(userCart)

      // way 2
      let newProd = userCart.map((prod) => {
        if (prod.title == product.title) {
          prod.count += 1
        }
        return prod
      })

      contextData.setUserCart(newProd)
    }
  }
  return (
    <>
      {contextData.allProducts.map((productSection) => (
        <div className="row justify-content-center mt-5">
          <h3 className="text-center">{productSection.title}</h3>

          {productSection.infos.map((product) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt="Product Image"
                    className="card-img-top w-75"
                  />
                </div>

                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <a
                    href="javascript:void(0)"
                    className="btn btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    More Information
                  </a>
                  <p className="number">Number: {product.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
