import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export const FilterInput: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <FormControl sx={{ mb: 3, width: '100%' }} variant="outlined">
      <OutlinedInput
        placeholder='Enter title or category'
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          query && (
            <InputAdornment position="end">
              <IconButton onClick={() => setQuery('')}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};
