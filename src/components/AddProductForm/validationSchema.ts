import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  description: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Required'),
  price: Yup.number()
    .min(1, 'Must be minimum 1')
    .required('Required'),
  rating: Yup.number()
    .min(1, 'Must be minimum 1')
    .max(5, 'Must be maximum 5')
    .required('Required'),
  stock: Yup.number()
    .min(1, 'Must be minimum 1')
    .required('Required'),
  category: Yup.string()
    .required('Required'),
});
