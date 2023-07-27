import React from 'react'
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
export const Login = () => {
    let history = useNavigate()
    return (
        <>

            <div className="login-wrap">
                <div className="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">ورود به پنل</label>
                    <input id="tab-2" type="radio" name="tab" className="for-pwd" /><label for="tab-2" className="tab">فراموشی رمز</label>
                    <div className="login-form">

                        <div className="sign-in-htm">

                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {

                                    if (values.email == "leila.kf69@gmail.com" || values.password == "1234") {

                                        const user = {
                                            userId: "uudid",
                                            userName: "kefayati",
                                            fullName: "لیلا کفایتی ",
                                            thumbnail: 'https://img.icons8.com/?size=1x&id=108652&format=png',
                                            token: 'gchchghtfy778ujb8iok,nj879i00oljljnk'
                                        }

                                        localStorage.setItem("user", JSON.stringify(user))
                                        history('/')
                                    }
                                    setSubmitting(false);

                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form>

                                        <div className="group">
                                            <label for="email" className="label">ایمیل یا نام کاربری</label>
                                            <Field type="email" name="email" id="user" className="input" />
                                            <ErrorMessage name="email" component="div" />
                                        </div>
                                        <div className="group">
                                            <label for="password" className="label">پسورد</label>
                                            <Field type="password" name="password" id="pass" className="input" />
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                        <div className="group">
                                            <button type="submit" disabled={isSubmitting} className="button">
                                                ورود
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>




                            <div className="hr"></div>
                        </div>
                        <div className="for-pwd-htm">
                            <div className="group">
                                <label for="user" className="label">ایمیل یا نام کاربری</label>
                                <input id="user" type="text" className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" value="پاک کردن پسورد" />
                            </div>
                            <div className="hr"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
