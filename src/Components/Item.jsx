import React, { useContext } from "react";
import { CreateContext } from "./Cart";
import "./Cart.css";
function Item({ items }) {
  const { remove, incremunt, decrement, totalAmount } =
    useContext(CreateContext);
    const perQuantityTotal=items.quantity *items.price;
  return (
    <div>
      <div className="row d-flex justify-content-center" id="#top">
        <div className="col-sm-12 col-lg-12 ">
          <div className="card ">
            <form>
              <div className="card-header">
                <h3>{items.title}</h3>
              </div>
              <div className="card-body">
                <div></div>
                <div className="row">
                  <div className="col-6 border">
                    <img
                      className="card-image mt-3"
                      src={items.thumbnail}
                      alt="mobilePhone"
                    />
                  </div>
                  <div className="col-6 border ">
                    <div className="brand mt-3">
                      <h4>{items.brand}</h4>
                    </div>
                    <div className="description">
                      <p>{items.description}</p>
                    </div>
                    <div className="category">
                      <h4>{items.category}</h4>
                    </div>

                    <div className="contentgroup">
                      <div className="row mt-5">
                        <div className="col-6">
                          <div className="productPrice">
                            <h4 className="price">$ {items.price}</h4>
                          </div>
                        </div>
                        <div className="col-6">
                          <h4 className="stock text-primary">
                            Stock{" "}
                            <span className="productstock text-danger">
                              {items.stock}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-12">
                          <div className="d-flex justify-content-start small text-warning mb-2">
                            <div className="bi-star-fill">
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="bi-star-fill">
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="bi-star-fill">
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="bi-star-fill">
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="bi-star-fill">
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="rating">
                              <b>{items.rating}/ 5</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-5">
                    <h4 className="quantity">Quantity ➔</h4>
                  </div>
                  <div className="col-6">
                    <div className="incDec">
                      <span onClick={() => incremunt(items.id)}>+</span>
                      <input
                        type="text"
                        placeholder={items.quantity}
                        size={1}
                      ></input>
                      <span onClick={() => decrement(items.id)}>-</span>
                    </div>
                  </div>
                </div>
                <div className="per-quantity-total mt-2">
            <h5> <span className="text-warning">Total Amount for</span><span className="text-primary"> {items.title}  : $  </span><span className="text-danger">{perQuantityTotal}</span></h5>
            </div>
                <div className="btnGroup d-flex justify-content-between">
                  <button className="btn btn-primary Cart-button">Home</button>

                  <button
                    className="btn btn-danger Cart-button"
                    onClick={() => remove(items.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
