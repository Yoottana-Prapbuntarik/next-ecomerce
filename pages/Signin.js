import React, { useEffect } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import FieldEmail from '../components/FieldComponents/FieldEmail'
import FieldPassword from '../components/FieldComponents/FieldPassword'
import ButtonSubmit from '../components/FieldComponents/ButtonSubmit'
import MainLayout from '../components/MainLayout/MainLayout';
import validate from '../Validate/SigninValidator';
import { service, serviceSetToken } from '../api/BaseApi';
import Swal from 'sweetalert2'

const Signin = (props) => {
    let { handleSubmit } = props;
    const singinSubmit = async (data) => {
        if (data) {
            await service({
                method: 'post',
                url: 'auth/login',
                data: {
                    username: data.email,
                    password: data.password,
                }
            })
                .then((response) => {
                    if (response) {
                        localStorage.setItem('access-token', response.data.token);                        
                    }
                })
                .catch((error) => {
                    if (error.response.data.non_field_errors[0])
                        Swal.fire({
                            text: 'คุณกรอกรหัสไม่ถูกต้อง',
                            icon: 'error',
                            confirmButtonText: 'รับทราบ',
                        })
                })

            await serviceSetToken({
                method: 'get',
                url: 'auth/user',
            })
                .then((response) => {
                    localStorage.setItem('username', response.data.first_name + " " + response.data.last_name);
                    localStorage.setItem('uuid', response.data.id);
                    Swal.fire({
                        text: 'เข้าสู่ระบบสำเร็จ',
                        icon: 'success',
                        confirmButtonText: 'รับทราบ',
                    })
                    Router.push('/');
                })
        }
    }
    useEffect(() => {
        if (localStorage.getItem('access-token')) {
            Swal.fire({
                text: 'คุณเข้าสู่ระบบอยู่เเล้ว',
                icon: 'error',
                confirmButtonText: 'รับทราบ',
            })
            setTimeout(() => {
                Router.replace('/')
            }, 1500);
        }
    }, []);
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-5">
                        <img src="signin.jpg" className="w-100" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <h5 className="mt-5">
                            เข้าสู่ระบบ
                        </h5>
                        <form onSubmit={handleSubmit(singinSubmit)} className="text-left row ">
                            <div className="col-12">
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

                            <div className="col-12">
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

                            <div className="col-12 text-right">
                                <Field
                                    label="เข้าสู่ระบบ"
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

const SigninConnectStore = Signin;
export default reduxForm({ form: 'Signin', validate })(SigninConnectStore);