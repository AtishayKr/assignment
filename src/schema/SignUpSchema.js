import {object, ref, string} from 'yup';

let UserDetailsSchema = object({
  firstName: string().required('First name is required'),
  lastName: string(),
  address: string(),
  email: string().email('Please enter valid email').required('email is required'),
  password: string()
    .required('Password is required')
    .min(7, ({min}) => `atleast ${min} characters are required`),
  cnfPassword: string()
    .oneOf([ref('password'), null], 'Password does not matched')
    .required('cnf password is required')
});

export default UserDetailsSchema;
