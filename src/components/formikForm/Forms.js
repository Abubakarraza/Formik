import {
  Field,
  Formik,
  Form,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import ErrorText from '../errorMessage/ErrorText';
import '.././index.css';
const Forms = () => {
  // initial Values for Formik Form
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    comment: '',
    address: '',
    social: {
      facebook: '',
      twitter: '',
    },
    phoneNumber: ['', ''],
    education: [''],
  };
  const savedData = {
    name: 'Abubakar Raza',
    email: 'abubakarraza@gmail.com',
    phone: '032828282828',
    comment: 'Hurry! it is comment',
    address: 'Faisalabad,pakistan',
    social: {
      facebook: 'facebook',
      twitter: 'twitter',
    },
    phoneNumber: ['', ''],
    education: [''],
  };
  // on Submit form Handler
  const onSubmit = (values, submittingProps) => {
    console.log(values);
    console.log('submittingProps', submittingProps);
    // when we click on submit button isSubmitting is true then we update it with setSubmitting from second props of onSubmit
    submittingProps.setSubmitting(false);
  };
  // Form validation using Yup
  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid Email Format').required('!Required'),
    phone: yup.number().required('Required'),
    comment: yup.string().required('Comment is Required'),
    address: yup.string().required('Address is Required'),
  });
  const facebookValidation = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  };
  const [data, setData] = useState(null);
  return (
    <Formik
      initialValues={data || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // it will allow you to reinitialized InitialState
      // use loadSaveData function to trigger
      enableReinitialize
      // Validate on mount is work when page is load and validate all fields
      // validateOnMount

      // form validation trigger  in 3 form using Formik
      // 1: onChange ,
      // 2: onBlur,
      // 3: onSubmit
      // you can handle first two as follow
      // validateOnBlur={false}
      // validateOnChange={false}
      // as your project Demand
    >
      {(formik) => {
        console.log('FormikProps', formik);
        const {
          setTouched,
          setFieldTouched,
          validateField,
          validateForm,
          isValid,
          isValidating,
        } = formik;
        // You can handle form level form validation using form level rendering
        return (
          <Form>
            <div className="container">
              <h1>Formik Form Using Formik Component </h1>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" id="input" />
              {/* You can also display Error Message with component */}
              <ErrorMessage name="name" component={ErrorText} />
              <label htmlFor="email">E-mail</label>
              <Field type="email" name="email" id="input" />
              {/* You can also display Error Message with render */}
              <ErrorMessage name="email">
                {(props) => {
                  return <div className="error">{props}</div>;
                }}
              </ErrorMessage>
              <label htmlFor="phone">Phone</label>
              <Field type="number" name="phone" id="input" />
              {/* You can also display Error Message with using Error Message Component */}
              <ErrorMessage name="phone" />
              <label htmlFor="comment">Comment</label>
              {/* here you specify field as textarea  */}
              <Field type="text" name="comment" as="textarea" id="textarea" />
              {/* You can also display Error Message with using Error Message Component where you can specify error message tag */}
              <ErrorMessage name="comment" component="h5" />
              <label htmlFor="address">Address</label>
              {/* FastField is optimized version of Field if you look at field when i update one field all field re render.To Stop it we use FastField */}
              <FastField name="address" type="text">
                {(props) => {
                  console.log('inAddress Field');
                  const { field, meta, form } = props;
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <input {...field} id="address" />
                      {/* Display Error Message */}
                      {meta.error && meta.error}
                    </div>
                  );
                }}
              </FastField>
              {/* Nested Form  Object */}
              <label htmlFor="facebook">Facebook</label>
              {/* If you want to add custom validation in your field you can pass
            validate prop function to you field where you receive value of
            filed.then you validate it example below*/}
              <Field
                type="text"
                name="social.facebook"
                id="input"
                validate={facebookValidation}
              />
              <ErrorMessage name="social.facebook" component={ErrorText} />
              <label htmlFor="twitter">Twitter</label>
              <Field type="text" name="social.twitter" id="input" />
              <ErrorMessage name="social.twitter" component={ErrorText} />
              <label htmlFor="instagram">Instagram</label>
              <Field type="text" name="social.instagram" id="input" />
              <ErrorMessage name="social.instagram" component={ErrorText} />
              {/* Form Dealing with Array */}
              <label htmlFor="primaryPhoneNumber">Primary Phone Number</label>
              <Field type="number" name="phoneNumber[0]" id="input" />
              <ErrorMessage name="phoneNumber[0]" component={ErrorText} />
              <label htmlFor="Secondary Phone Number">
                Secondary Phone Number
              </label>
              <Field type="number" name="phoneNumber[1]" id="input" />
              <ErrorMessage name="phoneNumber[1]" component={ErrorText} />
              {/* Form Dealing with Dynamic Array  */}
              <label htmlFor="Education">Education</label>
              <FieldArray name="education">
                {(props) => {
                  const { form, push, remove } = props;
                  const { education } = form.values;
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {education.map((item, index) => (
                        <div
                          style={{ display: 'flex', flexDirection: 'row' }}
                          key={index}
                        >
                          <Field
                            name={`education${index}`}
                            id="input"
                            style={{ width: '30vw' }}
                          />
                          <div style={{ marginTop: '-22px' }}>
                            {index !== 0 && (
                              <button onClick={() => remove(index)}>-</button>
                            )}
                            <button onClick={() => push('')}>+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
              {/* you can validate all field depend on your project demand setTouched validate all field and setFieldTouched validate specific filed */}
              <button
                style={{ width: '200px' }}
                onClick={() => {
                  setTouched({
                    name: true,
                    email: true,
                    // address: true,
                  });
                  validateForm();
                }}
              >
                visitAllField
              </button>
              <button
                onClick={() => {
                  setFieldTouched('comment');
                  validateField('comment');
                }}
                style={{ width: '200px' }}
              >
                Visit Comment Field
              </button>
              <button
                style={{ width: '200px' }}
                onClick={() => setData(savedData)}
              >
                Load Saved Data
              </button>
              <button style={{ width: '200px' }} onClick={() => setData(null)}>
                Reset Saved Data
              </button>
              {/* formik.dirty is true when one of all field is changed then its value is true it value is true
              isValid initial value is true because it change only when form change  */}
              <button
                type="submit"
                disabled={!(isValid && formik.dirty) || formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Forms;
