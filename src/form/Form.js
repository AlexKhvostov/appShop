import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {useFormik} from 'formik';
import * as Yup from 'yup';


export default function Form() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
            message: ''
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, "Имя должно быть более 2 букв")
                .max(10, 'Имя должно быть менее 10 букв')
                .test('mit','Не должно быть цифир! ) ', (value)=>{

                    return   value;
                })
                .required('Обязательное поле'),
            lastName: Yup.string()
                .min(3, "Должно быть более 2 букв")
                .max(10, 'Должно быть менее 10 букв')
                .required('Обязательное поле'),
            email: Yup.string()
                .email('Введите верный email')
                .required('Обязательное поле'),
            password: Yup.string()
                .min(5, 'Должно быть более 5 симвалов')
                .required('Обязательное поле'),
            passwordConfirm: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
            message: Yup.string()
                .min(10, "Сообщение должно быть более 10 симвалов")
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <React.Fragment>
            <div className="formHeader">
                <h4> Bootstrap 4 Form Validation Demo</h4>
            </div>


            <div className="formBody">
                <form className="row g-3" onSubmit={formik.handleSubmit}>

                    <div className="col-md-12">
                        <label htmlFor="firstName" className="form-label">Name</label>
                        <div className="input-group has-validation">

                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                                className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid"
                                    : formik.touched.firstName
                                        ? "form-control is-valid" : "form-control"}

                            />

                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="errors">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="lastName" className="form-label">Username</label>
                        <div className="input-group has-validation">

                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                                className={formik.touched.lastName && formik.errors.lastName ? "form-control is-invalid"
                                    : formik.touched.lastName
                                        ? "form-control is-valid" : "form-control"}
                            />


                        </div>
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="errors">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <div className="input-group has-validation">

                            <input id="email"
                                   name="email"
                                   type="text"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.email}
                                   className={formik.touched.email && formik.errors.email ? "form-control is-invalid"
                                       : formik.touched.email
                                           ? "form-control is-valid" : "form-control"}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="errors">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group has-validation">

                            <input id="password"
                                   name="password"
                                   type="text"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.password}
                                   className={formik.touched.password && formik.errors.password ? "form-control is-invalid"
                                       : formik.touched.password
                                           ? "form-control is-valid" : "form-control"}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <div className="errors">{formik.errors.password}</div>
                        ) : null}

                    </div>

                    <div className="col-md-12">
                        <label htmlFor="passwordConfirm" className="form-label">Confirm Password</label>
                        <div className="input-group has-validation">

                            <input id="passwordConfirm"
                                   name="passwordConfirm"
                                   type="text"
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                                   value={formik.values.passwordConfirm}
                                   className={formik.touched.passwordConfirm && formik.errors.passwordConfirm ? "form-control is-invalid"
                                       : formik.touched.passwordConfirm
                                           ? "form-control is-valid" : "form-control"}
                            />
                        </div>
                        {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                            <div className="errors">{formik.errors.passwordConfirm}</div>
                        ) : null}
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <div className="input-group has-validation">

                            <textarea
                                id="message"
                                name="message"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className={formik.touched.message && formik.errors.message ? "form-control is-invalid"
                                    : formik.touched.message
                                        ? "form-control is-valid" : "form-control"}
                                rows="3" />

                        </div>
                        {formik.touched.message && formik.errors.message ? (
                            <div className="errors">{formik.errors.message}</div>
                        ) : null}
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">SIGN-UP</button>
                    </div>

                    {/*is-invalid
                   is-valid*/}
                </form>
            </div>

        </React.Fragment>
    )

}


