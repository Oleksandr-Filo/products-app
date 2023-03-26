import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader: React.FC = React.memo(() => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <CircularProgress />
    </Box>
  );
});
