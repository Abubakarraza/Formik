import { ErrorMessage, Field } from 'formik';
import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ErrorText from '../../errorMessage/ErrorText';
const DatePicker = (props) => {
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
      <Field name={name} {...rest}>
        {(fields) => {
          const { field, form } = fields;
          return (
            <DateView
              selected={field.value}
              onChange={(value) => {
                form.setFieldValue(name, value);
              }}
              {...rest}
              id={name}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default DatePicker;
