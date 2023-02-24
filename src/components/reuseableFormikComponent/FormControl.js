import React from 'react';
import Input from '../fields/input/Input';
import Select from '../fields/select/Select';
import TextArea from '../fields/textarea/TextArea';

const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'date':
    case 'switch':
    case 'radio':
      break;

    default:
      return null;
  }
};

export default FormControl;
