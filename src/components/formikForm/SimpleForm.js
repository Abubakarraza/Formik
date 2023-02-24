import { useFormik } from 'formik';
import '.././index.css';
import React from 'react';
import * as yup from 'yup';
const SimpleForm = () => {
  // initial Values for Formik Form
  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };
  // on Submit form Handler
  const onSubmit = (values) => {
    console.log(values);
  };
  // Form Validation Handler using our function
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'name is Required';
    }
    if (!values.phone) {
      errors.phone = 'Phone Number is Required';
    }
    if (!values.email) {
      errors.email = 'Email is Required';
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = 'Invalid Email';
    }
    return errors;
  };
  // Form validation using Yup
  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid Email Format').required('!Required'),
    phone: yup.number().required('Required'),
  });
  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      onSubmit,
      // validate,
      validationSchema,
    });
  console.log('touched', touched);
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Formik Form Using UseFormik Hook </h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id={'inputT'}
        />
        <div style={{ textAlign: 'left', color: 'red' }}>
          {errors.name && touched.name ? errors.name : null}
        </div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div style={{ textAlign: 'left', color: 'red' }}>
          {errors.email && touched.email ? errors.email : null}
        </div>
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div style={{ textAlign: 'left', color: 'red' }}>
          {errors.phone && touched.phone ? errors.phone : null}
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleForm;
