import React, { useState,useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import MainLayout from '../components/MainLayout/MainLayout';
import FieldDate from '../components/FieldComponents/FieldDate';
import FieldTotalPrice from '../components/FieldComponents/FieldTotalPrice';
import FieldSlip from '../components/FieldComponents/FieldSlip';
import ButtonSubmit from '../components/FieldComponents/ButtonSubmit';
import validate from '../Validate/PaymentValidate';
import FieldTime from '../components/FieldComponents/FieldTime';
import Router from 'next/router';
import Cookies from 'js-cookie';

const Payment = (props) => {
    let { handleSubmit } = props;
    useEffect(() => {
        if (!Cookies.get('verify_secure')) {
            alert('คุณยังไม่ได้ทำการเข้าสู่ระบบ');
            Router.push('/signin');
        }
    }, [])
    const methods = [
        { imageMethod: "KBANK.png", methodName: "ธนาคารกสิกรไทย", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "KBANK" },
        { imageMethod: "BBL.png", methodName: "ธนาคารกรุงเทพ", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "BBL" },
        { imageMethod: "SCB.png", methodName: "ธนาคารไทยพาณิชย์", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "SCB" },
        { imageMethod: "KTB.png", methodName: "ธนาคารกรุงไทย", methodnumber: "เลขที่บัญชี 0123-456-789", valueMethod: "KTB" }
    ]
    const [paymentMethod, setMethod] = useState('');

    const submitPaymentBill = (data) =>{
        if(data){
            Router.push('/order');
        }
    }
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-secondary text-center my-4">
                            PAYMENT METHOD
                        </h5>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 font-weight-bold text-dark my-2 text-left">
                                    Bank
                                </div>
                                {methods.map(index => {
                                    return (
                                        <React.Fragment>
                                            <div className="col-md-2  text-left my-3">
                                                <img src={`${index.imageMethod}`} alt={`${index.imageMethod}`} />
                                            </div>
                                            <div className="col-md-3  text-left my-3">
                                                <span>{`${index.methodName}`}</span>
                                            </div>

                                            <div className="col-md-3  text-left my-3">
                                                <span className=" text-left">{`${index.methodnumber}`}</span>
                                            </div>
                                            <div className="col-md-3  text-left my-3">
                                                <input value={`${index.valueMethod}`} checked={paymentMethod === `${index.valueMethod}` && true} onChange={e => setMethod(e.target.value)} type="radio" /> <span className={paymentMethod === '' ? "text-danger font-weight-bold" : "d-none"}>*</span>
                                            </div>
                                        </React.Fragment>
                                    )
                                })
                                }
                                <form onSubmit={handleSubmit(submitPaymentBill)}>
                                    <div className="col-12 mt-5 mb-3 text-left">
                                        <label className="font-weight-bold" htmlFor="date">วันที่โอนเงิน</label>
                                        <br />
                                        <Field type="date" value="0000-00-00" style="form-payment" component={FieldDate} />
                                    </div>
                                    <div className="col-12 text-left">
                                        <label className="font-weight-bold" htmlFor="time">เวลาที่โอน</label>
                                        <br />
                                        <Field
                                            type="time"
                                            name="time"
                                            style="form-payment"
                                            component={FieldTime}
                                        />
                                    </div>
                                    <div className="col-12 text-left">
                                        <label className="font-weight-bold" htmlFor="price">จำนวนเงิน</label>
                                        <br />
                                        <Field
                                            type="text"
                                            name="price"
                                            style="mb-3 form-payment pl-1"
                                            component={FieldTotalPrice}
                                        />
                                    </div>
                                    <div className="col-12 text-left">
                                        <label className="font-weight-bold" htmlFor="slip">อัพโหลดหลักฐาน</label>
                                        <br />
                                        <Field
                                            name="slip"
                                            type="file"
                                            style="mb-3"
                                            component={FieldSlip}
                                        />
                                    </div>
                                    <div className="col-12 text-left">
                                        <p className="font-weight-bold" htmlFor="time">ยืนยันแจ้งชำระเงิน</p>
                                        <Field
                                            style="btn-black mb-5"
                                            name="submit"
                                            type="submit"
                                            component={ButtonSubmit}
                                            label="ยืนยันแจ้งชำระเงิน"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default reduxForm({ form: 'Payment', validate })(Payment);
