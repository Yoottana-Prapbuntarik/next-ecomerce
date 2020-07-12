import React, { useState } from 'react';
import Router from 'next/router'
import { connect } from 'react-redux';
import { mapDispatchToProps } from './AddToCartContainer';
const AddToCart = (props) => {
    let { item, resType, addItemsInCart, addTotalPrice } = props;
    let SizeProduct = [32, 34, 36, 38, 40];
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(32);

    const addItemToCart = (items) => {
        addItemsInCart({ items, quantity, size: size });
        addTotalPrice(parseInt(quantity * items.product_cost));
        Router.push('/cart')
    }

    return (
        <div className="container">
            <style jsx>
                {`
            .btn-size:hover{
                transition:.5s;
                border:3px solid #000;
            }
            .btn-size-active{
                background:#000 !important;
                color:#fff;
            }
            .BAHT {
                font-family: Kanit;
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: normal;
                text-align: left;
                color: #4268b3;
            }
            
            .btn-size {
                background: none;
                border: none;
                width: 55px;
                height: 55px;
                margin-left: 32px;
                border-radius: 5px;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                outline: none;
                font-weight: bold;
            }
            
            .btn-subtack {
                width: 30px;
                height: 55px;
                font-weight: bold;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                outline: none;
            }
            
            .btn-addtack {
                width: 30px;
                height: 55px;
                color: #fff;
                border: solid 1px #bcbcbc;
                background-color: #707070;
            }
            
            .input-amount {
                width: 100px;
                height: 55px;
                border: solid 1px #bcbcbc;
                background-color: #ffffff;
                padding-left:42px;
                outline: none;
            }
            
            .input-amount::placeholder {
                font-size: 30px;
                font-family: Kanit;
                text-align: center;
                color: #707070;
            }
                        
            @media only screen and (max-width: 991.98px) {

                .BAHT {
                    font-family: Kanit;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: left;
                    color: #4268b3;
                }
            
                .btn-size {
                    background: none;
                    border: none;
                    width: 55px;
                    height: auto;
                    margin-left: 15px;
                    border-radius: 5px;
                    border: solid 1px #bcbcbc;
                    background-color: #ffffff;
                }
            
                .add-cart,
                .input-amount::placeholder {
                    font-size: 18px;
                }
            }
            `}
            </style>
            <div className="row">
                <div className="my-3 col-12 text-left">
                    <h5 className="BAHT">
                        {parseInt(item.product_cost).toLocaleString()} {`THB`}
                    </h5>
                </div>
                {resType !== "Bags" &&
                    <div className="mb-3 col-12 text-left">
                        <div className="d-flex flex-row">
                            <h5 className="text-secondary h-100 pt-3">
                                SIZE
                        </h5>
                            {SizeProduct.map((sizes, index) => {
                                return (
                                    <button key={index} className={`${sizes === size ? "btn-size-active" : ''}  btn-size`} onClick={() => { setSize(sizes) }}>
                                        {sizes}
                                    </button>)
                            })}
                        </div>
                    </div>
                }
                <div className="my-3 col-12 text-left">
                    <div className="d-flex flex-row">
                        <button className="btn-subtack" disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                        <input className="input-amount" disabled value={quantity} placeholder={quantity} type="number"></input>
                        <button className="btn-addtack" onClick={() => { setQuantity(quantity + 1) }}>+</button>
                    </div>
                </div>
                <div className="my-3 col-12 text-left">
                    <div className="d-flex flex-row">
                        <button className="btn-black p-2" onClick={() => { addItemToCart(item) }}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state.cartreducer, mapDispatchToProps)(AddToCart);