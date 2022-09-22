import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email:yup
    .string()
    .email()
    .required('El email es obligatorio'),
    password:yup
    .string()
    .min(5,'Contraseña muy corta')
    .max(10,'Contraseña muy larga')
    .required('La contraseña es obligatoria'),
    countryName:yup
    .string()        
})