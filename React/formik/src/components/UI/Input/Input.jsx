import { ErrorMessage, Field } from 'formik';
import {
  ErrorStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from './Input.styles';

function Input({ label, type, name, isError }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field
        type={type} 
        id={label} 
        name={name} 
        error={isError} 
        as={InputStyled}
      />
      <ErrorMessage name={name} component={ErrorStyled} />      
    </InputBoxStyled>
  );
}

export default Input;
