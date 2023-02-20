import { useFormik } from 'formik';
import React from 'react';
const Form = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      console.log('Form Values', values);
    },
  });
  console.log('value', values);
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Formik Form </h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          id={'inputT'}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
