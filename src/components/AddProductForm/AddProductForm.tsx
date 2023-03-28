import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addProduct } from '../../features/productsSlice';

const primaryColor = '#313237';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: primaryColor,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: primaryColor,
    },
  },
});

export const AddProductForm: React.FC = () => {
  const [isProductAdded, setIsProductAdded] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: 0,
      rating: 0,
      stock: 0,
      category: '',
    },
    validationSchema,
    onSubmit: (data, { setSubmitting, resetForm }) => {
      dispatch(addProduct(data));
      setSubmitting(false);
      setIsProductAdded(true);
      resetForm();
      setTimeout(() => {
        navigate('/');
      }, 1500);
    },
  });

  return (
    <>
      {isProductAdded
        ? (
          <Alert severity="success" sx={{ mt: 1 }}>
            <AlertTitle>Success</AlertTitle>
            <strong>New product is added</strong>
          </Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <CustomTextField
              error={touched.title && !!errors.title}
              margin="normal"
              fullWidth
              id="title"
              name="title"
              type="text"
              label="Title"
              autoComplete="off"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.title && errors.title
                  ? `${errors.title}`
                  : ''
              )}
            />

            <CustomTextField
              error={touched.description && !!errors.description}
              margin="normal"
              fullWidth
              id="description"
              name="description"
              type="text"
              label="Description"
              autoComplete="off"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.description && errors.description
                  ? `${errors.description}`
                  : ''
              )}
            />

            <CustomTextField
              error={touched.price && !!errors.price}
              margin="normal"
              fullWidth
              id="price"
              name="price"
              type="number"
              label="Price"
              autoComplete="off"
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.price && errors.price
                  ? `${errors.price}`
                  : ''
              )}
            />

            <CustomTextField
              error={touched.rating && !!errors.rating}
              margin="normal"
              fullWidth
              id="rating"
              name="rating"
              type="number"
              label="Rating"
              autoComplete="off"
              value={values.rating}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.rating && errors.rating
                  ? `${errors.rating}`
                  : ''
              )}
            />

            <CustomTextField
              error={touched.stock && !!errors.stock}
              margin="normal"
              fullWidth
              id="stock"
              name="stock"
              type="number"
              label="stock"
              autoComplete="off"
              value={values.stock}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.stock && errors.stock
                  ? `${errors.stock}`
                  : ''
              )}
            />

            <CustomTextField
              error={touched.category && !!errors.category}
              margin="normal"
              fullWidth
              id="category"
              name="category"
              type="text"
              label="Category"
              autoComplete="off"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(
                touched.category && errors.category
                  ? `${errors.category}`
                  : ''
              )}
            />

            <LoadingButton
              loading={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={[
                { mt: 3, mb: 2, backgroundColor: primaryColor },
                {
                  '&:hover': {
                    backgroundColor: primaryColor,
                    boxShadow: "0px 3px 13px rgba(23, 32, 49, 0.4)",
                  },
                }
              ]}
            >
              Add Product
            </LoadingButton>
          </Box>
        )
      }
    </>
  );
};
