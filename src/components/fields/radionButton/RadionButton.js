import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from '../../errorMessage/ErrorText';

const RadionButton = (props) => {
  const { label, name, options, ...rest } = props;
  console.log('Name', name);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field, form }) => {
          console.log('field', field);
          return (
            <div style={{ display: 'flex' }}>
              {options.map((option, index) => {
                console.log('options', options);
                return (
                  <div key={option.value}>
                    <input
                      type={'radio'}
                      id={option.key}
                      value={option.value}
                      checked={field.value === option.value}
                      {...field}
                      name={option.value}
                      onChange={() => form.setFieldValue(name, option.value)}
                    />
                    <label htmlFor={option.key}>{option.key}</label>
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default RadionButton;
