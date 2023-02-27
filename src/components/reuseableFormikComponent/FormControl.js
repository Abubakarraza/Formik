import React from 'react';
import Input from '../fields/input/Input';
import RadionButton from '../fields/radionButton/RadionButton';
import Select from '../fields/select/Select';
import TextArea from '../fields/textarea/TextArea';
import CheckBoxGroup from '../fields/checkbox/Checkbox';
import DatePicker from '../fields/datePicker/DatePicker';

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
    case 'checkbox':
      return <CheckBoxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    case 'switch':
      break;

    default:
      return null;
  }
};

export default FormControl;
