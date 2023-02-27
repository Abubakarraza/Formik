import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from '../../errorMessage/ErrorText';

const CheckBoxGroup = (props) => {
  const { label, name, options, ...rest } = props;
  // console.log('Name', name);
  const string = '';
  string.includes();
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
          console.log('fieldCheckbox', field);
          return (
            <div style={{ display: 'flex' }}>
              {options.map((option, index) => {
                // console.log('options', options);
                const checked = field.value.includes(option.value);
                return (
                  <div key={option.value}>
                    <input
                      type={'checkbox'}
                      id={option.key}
                      value={option.value}
                      checked={checked}
                      {...field}
                      name={`${name}[${index}]`}
                      onChange={() => {
                        const newValue = checked
                          ? field.value.filter((val) => val !== option.value)
                          : [...field.value, option.value];
                        form.setFieldValue(name, newValue);
                      }}
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

export default CheckBoxGroup;
