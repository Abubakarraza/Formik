import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from '../../errorMessage/ErrorText';

const Select = (props) => {
  const { name, label = [], options, ...rest } = props;
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
        as="select"
        id={name}
        {...rest}
        style={{
          width: '40vw',
          height: '30px',
          border: '2px solid #6161b9',
          borderRadius: '10px',
        }}
      >
        {options.map((item) => {
          return (
            <option value={item.value} key={item.value}>
              {item.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Select;
