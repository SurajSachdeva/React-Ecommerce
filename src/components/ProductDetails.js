import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img,info,price,title,inCart} = value.detailProduct; 
                    return(
                        <div className="container py-5">
                            {/* title */}
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                    <h1>{title}</h1>
                                </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h3>Model : {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made By: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="">
                                        <strong>
                                            Price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="font-weight-bold mt-3 mb-0">
                                        Info about the Product:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/">
                                            <button className="btn btn-lg btn-outline-dark">Back to Products</button>
                                        </Link>
                                        <span></span>
                                        <button className="btn btn-lg btn-outline-primary" disabled={inCart?true:false} onClick={() => { 
                                            value.addToCart(id);
                                            value.openModal(id);    
                                        }}
                                            >
                                            {inCart ? "Added to Cart" : "Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* product info  end */}
                        </div>
                    )    
                }
                }
            </ProductConsumer>
        )
    }
}
