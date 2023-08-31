import { ErrorMessage, Field } from 'formik';
import { InputBoxStyled, InputLabelStyled } from '../Input/Input.styles';
import { ErrorStyled, TextArea } from './TextAreaInput.styles';

function TextAreaInput({ label, name, isError}) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      <Field name={name} id={label} error={isError} as={TextArea} />

      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
}
export default TextAreaInput;
