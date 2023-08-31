import Input from '../UI/Input/Input';
import Submit from '../UI/Submit/Submit';
import TextAreaInput from '../UI/TextAreaInput/TextAreaInput';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';

import { Form, FormBox, FormSubtitle, FormTitle } from './FormTurn.styles';

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Este campo es requerido"),
  surname: Yup.string().trim().required("Este campo es requerido"),
  date: Yup.date().required("Este campo es requerido"),
  age: Yup.number()
    .integer("Debe ser un entero")
    .moreThan(16, "Sos menor")
    .lessThan(95, "Descansa un poco de la pala")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Este campo es requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex, "Número de celular inváldo")
    .required("Este campo es requerido"),
  comments: Yup.string()
    .max(255, "Máximo de 255 caracteres")
    .notRequired()  
})

function FormTurn() {
  // const {getFieldProps , handleSubmit, errors, touched} = useFormik({
  //   initialValues: {
  //     name: '',
  //     surname: '',
  //     date: '',
  //     age: '',
  //     email: '',
  //     cellphone: '',
  //     comments: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values, {resetForm}) => {
  //     console.log(values);
  //     resetForm();
  //   },
  // })

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{' '}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          date: '',
          age: '',
          email: '',
          cellphone: '',
          comments: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
              console.log(values);
              resetForm();
            }}
      >

          {({touched, errors}) => (
            <Form>
              <Input 
                name='name'
                label='Nombre'
                type='text'
                isError={errors.name && touched.name}
              />
              <Input
                name='surname'
                label='Apellido'
                type='text'
                isError={errors.surname && touched.surname}
              />
              <Input
                name='date'
                label='Fecha'
                type='date'
                isError={errors.date && touched.date}
              />
              <Input 
                name='age'
                label='Edad'
                type='number'
                isError={errors.age && touched.age}
              />
              <Input
                name='email'
                label='Correo Electronico'
                type='email'
                isError={errors.email && touched.email}
              />
              <Input
                name='cellphone'
                label='Telefono'
                type='tel'
                isError={errors.cellphone && touched.cellphone}
              />
              <TextAreaInput
                name='comments'
                label='¿Cómo escuchaste de nosotros?'
                isError={errors.comments && touched.comments}
              />
              <Submit />
            </Form>
            )

            }

      </Formik>
      
    </FormBox>
  );
}
export default FormTurn;
