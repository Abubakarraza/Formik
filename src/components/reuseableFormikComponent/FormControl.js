import React from 'react';
import Input from '../fields/input/Input';
import RadionButton from '../fields/radionButton/RadionButton';
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
    case 'radio':
      return <RadionButton {...rest} />;
    case 'date':
    case 'switch':
      break;

    default:
      return null;
  }
};

export default FormControl;
