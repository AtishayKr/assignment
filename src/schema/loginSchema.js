import {object, string} from 'yup';
let loginSchema = object({
  email: string().required('Please enter email address').email('Email is not valid'),
  password: string()
    .required('Please enter password')
    .min(7, ({min}) => `atleast ${min} characters are required`)
});

export default loginSchema;
