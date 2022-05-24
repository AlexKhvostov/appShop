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
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (

        <React.Fragment>
            <h2>SIGNUP</h2>
            <hr/>

            <form className="row g-3" onSubmit={formik.handleSubmit}>

                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">F</span>
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
                            required
                        />
                            {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="LastName" className="form-label">Last Name</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">L</span>
                        <input type="text" className="form-control" id="LastName" name="LastName" required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="EmailAddress" className="form-label">Email address</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">e</span>
                        <input type="text" className="form-control" id="EmailAddress" name="EmailAddress" required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">p</span>
                        <input type="text" className="form-control" id="Password" name="Password" required/>
                    </div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend3">cp</span>
                        <input type="text" className="form-control" id="ConfirmPassword" name="ConfirmPassword"
                               required/>
                    </div>
                </div>


                <div className="col-12">
                    <button className="btn btn-primary" type="submit">SIGN-UP</button>
                </div>

                {/*is-invalid
                   is-valid*/}
            </form>

        </React.Fragment>
    )

}


