import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import Cookies from 'js-cookie';
import { connect } from 'react-redux';
import Router from 'next/router';
const Order = (props) => {
    useEffect(() => {
        if (!localStorage.getItem('access-token')) {
            alert('โปรดทำการเข้าสู่ระบบอีกครั้ง');
            Router.push('/signin');
        }
    }, [])
    return (
        <MainLayout>
            <style jsx>
                {`
                     .underline{
                        border-bottom:1.5px solid #c0c0c0;
                    } 
                    .wrapper-status-bar{
                        background: #e6e6e6b8;
                        width:100%;
                        height:2px;
                        conent:''
                        z-index: -10;
                        position:relative;
                        margin-top:75px;
                        margin-bottom:75px;
                    }
                    .container-status{
                        top:-15px;
                        position:relative;
                    }
                   .container-status .status{
                        background:#fff;
                        border:.5px solid #707070;
                        border-radius:100%;
                        content:"";
                        width:30px;
                        height:30px;
                        z-index:1
                    }
                `}
            </style>
            <div className="container my-5 mx-auto">
                <div className="container my-5 mx-auto">
                    <div className="row">
                        {userReducer.userData.order.length > 0 ?
                            userReducer.userData.order.map((listOrder, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="col-12">
                                            <h5 className="text-left font-weight-bold mb-5">
                                                Order  {listOrder.id}
                                            </h5>
                                            <h5 className="text-right text-danger">
                                                {parseInt(listOrder.total_cost)}
                                            </h5>
                                        </div>
                                        <div className="col-12 my-2">
                                            <div className="container pb-3 underline">
                                                <div className="row">
                                                    {listOrder.cart.map((cartlist, idx) => {
                                                        return (
                                                            <React.Fragment key={idx}>
                                                                <div className="col-md-4 col-12">
                                                                    <div className="w-100">
                                                                        <img className="w-50" src={cartlist.images[0]} alt={cartlist.name} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4 col-12 text-left  text-muted">
                                                                    <h3 className="pb-2">{cartlist.type}</h3>
                                                                    {cartlist.type === "Bags" && cartlist.size !== undefined &&
                                                                        <h3 className="pb-2">{cartlist.size}}</h3>
                                                                    }
                                                                    <p className="pb-2">{cartlist.name}</p>
                                                                    <p className="pb-2"><b>{`Quantity: ${cartlist.quantity}`}</b></p>
                                                                </div>
                                                                <div className="col-md-4 col-12 text-left">
                                                                    <h5 className="price-product"><b>{`${cartlist.price} บาท`}</b></h5>
                                                                </div>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>:
                                    </React.Fragment>
                                )
                            })
                        :<div className="text-danger text-center font-weight-bold">ตอนนี้คุณไม่มี Ooder สินค้ากรุณารอการอัพเดท</div>}
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        <div className="wrapper-status-bar">
                            <div className="container-status">
                                <div className="d-flex justify-content-between">
                                    <div className="status bg-dark"></div>
                                    <div className="status bg-dark"></div>
                                    <div className="status"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default connect(state => state)(Order);