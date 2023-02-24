import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from '../../errorMessage/ErrorText';
const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        id={name}
        {...rest}
        style={{
          width: '40vw',
          height: '30px',
          border: '2px solid #6161b9',
          borderRadius: '10px',
        }}
      />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};
export default Input;
