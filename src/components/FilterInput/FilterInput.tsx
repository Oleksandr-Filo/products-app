import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { filterByQuery } from '../../features/productsSlice';

export const FilterInput: React.FC = () => {
  const [query, setQuery] = useState('');

  const dispatch = useAppDispatch();

  const handleChangeFilterQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(filterByQuery(event.target.value));
  };
  
  const resetFilter = () => {
    setQuery('');
    dispatch(filterByQuery(''));
  };
  
  return (
    <FormControl sx={{ mb: 3, width: '100%' }} variant="outlined">
      <OutlinedInput
        placeholder='Enter title or category'
        type="text"
        value={query}
        onChange={handleChangeFilterQuery}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          query && (
            <InputAdornment position="end">
              <IconButton onClick={resetFilter}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};
