import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from '../../errorMessage/ErrorText';

const TextArea = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
      }}
    >
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        id={name}
        {...rest}
        as="textarea"
        style={{
          width: '40vw',
          //   height: '30px',
          border: '2px solid #6161b9',
          borderRadius: '10px',
        }}
      />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default TextArea;
