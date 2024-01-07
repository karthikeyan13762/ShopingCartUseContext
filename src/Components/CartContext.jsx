import React, { useContext } from "react";
import Item from "./Item";
import "./Cart.css";
import { CreateContext } from "./Cart";
function CartContext() {
  const { item, clear, totalItem, totalAmount } = useContext(CreateContext);
  
  if (item.length === 0) {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand  text-white">
              Continue Shoping
            </a>
            
            <button
              className="navbar-toggler bg-light "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="navbar-collapse collapse show"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#!"
                  >
                    {/* Home */}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#!">
                    {/* About */}
                  </a>
                </li>
              </ul>
              <div className="Cart-Total me-5 text-white">
              <h4>
                Total Amount 
                <span className="text-warning"> $ {totalAmount}</span>
              </h4>
            </div>
              <form className="d-flex">
                <a
                  className="btn btn-outline-light"
                  type="submit"
                  href="#"
                >
                  <i className="fa-solid fa-cart-shopping me-2"></i>
                  Cart
                  <span className="badge bg-dark text-light ms-1 rounded-pill">
                    0
                  </span>
                </a>
              </form>
              <div className="clear">
                <button className="btn btn-warning Cart-button" onClick={clear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </nav>
        <section className="container main-cartSection">
          <h1>Shoping Cart</h1>
          <p className="totalItems">
            you have <span className="total-items-count">0</span> items in
            shoping cart
          </p>
          
        </section>
      </>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand  text-white" href="#">
            Continue Shoping
          </a>
          <button
            className="navbar-toggler bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#!"
                >
                  {/* Home */}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#!">
                  {/* About */}
                </a>
              </li>
            </ul>
            <div className="Cart-Total me-5 text-white">
              <h4>
                Total Amount
                <span className="text-warning"> $ {totalAmount}</span>
              </h4>
            </div>
            <form className="d-flex">
              <a className="btn btn-outline-light" type="submit" href="#">
                <i className="fa-solid fa-cart-shopping me-2"></i>
                Cart
                <span className="badge bg-dark text-light ms-1 rounded-pill">
                  {totalItem}
                </span>
              </a>
            </form>
            <div className="clear">
              <button className="btn btn-warning Cart-button" onClick={clear}>
                Clear
              </button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* ----------------------------------------------- */}
      <section className="main-cartSection" >
        <div className="cart-items">
          <div className="container ">
            <h1>Shoping Cart</h1>
            <p className="totalItems">
              you have <span className="total-items-count">{totalItem}</span>{" "}
              items in shoping cart
            </p>
            {item.map((items) => {
              return <Item key={items.id} items={items} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartContext;
