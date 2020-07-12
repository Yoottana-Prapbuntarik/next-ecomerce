import React from 'react';
import Router from 'next/router';
import MainLayout from '../components/MainLayout/MainLayout';
import { mapDispatchToProps } from '../components/ProductDetailComponent/AddToCartContainer';
import { connect } from 'react-redux';

const Cart = (props) => {
    let { addedItems, handleRemove, total } = props;

    const handleDeleteItem = (items) => {
        let updatePrice = parseInt(items.product_cost * items.quantity);
        handleRemove({ items: items, updatePrice: updatePrice });
    }
    return (
        <MainLayout>
            <style jsx>
                {`
                .underline{
                    border-bottom:1.5px solid #c0c0c0;
                }
                button{
                    background:none;
                    border:none;
                    outline:none;
                }
                .button-to-checkout{
                    margin-top:41px;
                    width: 100% ;
                    height: 55px;
                    border: solid 1px #707070;
                    color:#fff;
                    font-weight:bold;
                    background-color: #000000;
                }
                .price-product{
                    font-family: Kanit;
                    font-size: 15px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.53;
                    letter-spacing: normal;
                    text-align: left;
                    color: #4268b3;
                }
                .type-product{
                    font-family: Kanit;
                    font-size: 20px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    text-align: left;
                    color: #707070;
                    text-transform:uppercase;
                }
                .remove-product u{
                    font-family: Kanit;
                    font-size: 15px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.53;
                    letter-spacing: normal
                    color#000;
                }
            `}
            </style>
            <div className="container my-5">
                <div className="row">
                    <div className="col-7">
                        <div className="container">
                            <h5 className="text-left pb-5 text-muted">
                                CART
                            </h5>
                            <div className="row">
                                {addedItems.map((item, index) => {
                                    return (
                                        <div key={index} className="col-12 my-2">
                                            <div className="container underline pb-3">
                                                <div className="row">
                                                    <div className="col-md-3 col-12">
                                                        <div className="w-100">
                                                            <img className="w-100" src={item.image.medium_square_crop} alt={'image product'} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 col-12 text-left text-muted">
                                                        <h3 className="type-product">{item.product_type}</h3>
                                                        <p>{item.name}</p>
                                                        {item.Size && item.type !== "Bags" &&
                                                            <p><b>SIZE: {item.Size}</b></p>
                                                        }
                                                        <p><b>Quantity: {item.quantity}</b></p>
                                                        <button className="text-left remove-product" onClick={() => handleDeleteItem(item)}>
                                                            <u>
                                                                ลบ
                                                            </u>
                                                        </button>
                                                    </div>
                                                    <div className="col-md-4 col-12">
                                                        <h5 className="price-product"><b>{parseInt(item.product_cost).toLocaleString()} BATH</b></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="text-muted">
                            <h5>
                                TOTAL
                            </h5>
                        </div>
                        <div className="text-muted text-center">
                            SUBTOTAL :<span className="pl-4">{parseInt(total).toLocaleString()} BATH </span>
                        </div>
                        <div className="underline my-4 w-50 mx-auto"></div>
                        <div className="text-muted text-center">
                            TOTAL :<span className="pl-5">{parseInt(total).toLocaleString()} BATH </span>
                        </div>
                        <button className="button-to-checkout" disabled={total === 0 ? true : false} onClick={() => Router.push('/checkout')}>
                            PROCESS TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default connect(state => state.cartreducer, mapDispatchToProps)(Cart);