import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddProductForm } from '../../components/AddProductForm';

const theme = createTheme();

export const ProductAddPage: React.FC = React.memo(() => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1>Product add form</h1>

          <AddProductForm />
        </Box>
      </Container>
    </ThemeProvider>
  );
});