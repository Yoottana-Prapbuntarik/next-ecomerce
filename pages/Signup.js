import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import MainLayout from '../components/MainLayout/MainLayout';
import FieldFirstName from '../components/FieldComponents/FieldFirstName';
import FieldLastName from '../components/FieldComponents/FieldLastName';
import FieldEmail from '../components/FieldComponents/FieldEmail';
import FieldConfirmEmail from '../components/FieldComponents/FieldConfirmEmail';
import FieldPassword from '../components/FieldComponents/FieldPassword';
import FieldConfirmPassword from '../components/FieldComponents/FieldConfirmPassword';
import FieldTel from '../components/FieldComponents/FieldTel';
import ButtonSubmit from '../components/FieldComponents/ButtonSubmit';
import validate from '../Validate/SignupValidator';
import { service } from '../api/BaseApi';
import Router from 'next/router';
import Swal from 'sweetalert2'
const Signup = (props) => {
    const dispatch = useDispatch();
    let { handleSubmit } = props;
    const singinSubmit = (data) => {
        if (data) {
            service({
                method: 'post',
                url: 'auth/register',
                data: {
                    username: data.email,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    password: data.password,
                }
            })
                .then((response) => {
                    if (response) {
                        Swal.fire({
                            text: 'สมัครสมาชิกเสร็จสิ้น',
                            icon: 'success',
                            confirmButtonText: 'รับทราบ',
                        })
                        Router.push('/signin');
                    }
                }).catch(err => {
                    if (err) {
                        Swal.fire({
                            text: 'กรุณาตรวจสอบความถูกต้องอีกครั้ง',
                            icon: 'error',
                            confirmButtonText: 'รับทราบ',
                        })
                    }
                })
        }
        dispatch(reset('Signup'));
    }

    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <img src="signup.jpg" className="w-100" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-5">
                            สมัครสมาชิก
                        </h5>
                        <form onSubmit={handleSubmit(singinSubmit)} className="text-left row my-5">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="firstName">ชื่อจริง</label>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        component={FieldFirstName}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกชื่อจริง"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="lastName">นามสกุล</label>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        component={FieldLastName}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกนามสกุล"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="email">อีเมลล์</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        component={FieldEmail}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกอีเมลล์"
                                    />

                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="confirmEmail">ยืนยันอีเมลล์</label>
                                    <Field
                                        name="ConfirmEmail"
                                        type="email"
                                        component={FieldConfirmEmail}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกอีเมลล์อีกครั้ง"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="password">รหัสผ่าน</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        component={FieldPassword}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกรหัสผ่าน"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        component={FieldConfirmPassword}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกรหัสผ่านอีกครั้ง"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="tel">หมายเลขโทรศัพท์</label>
                                    <Field
                                        name="tel"
                                        type="tel"
                                        component={FieldTel}
                                        styleTextError="text-danger"
                                        placeholder="โปรดกรอกหมายเลขโทรศัพท์"
                                    />
                                </div>
                            </div>
                            <div className="col-12 text-right">
                                <Field
                                    label="สมัครสมาชิก"
                                    name="submit"
                                    type="submit"
                                    style="btn btn-primary btn-block"
                                    component={ButtonSubmit}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default reduxForm({ form: 'Signup', validate })(Signup);