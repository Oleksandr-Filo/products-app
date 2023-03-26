import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Product } from '../../types/Product';
import { tableColumns } from './ProductsTebleColumns';
import { useSetSortParams } from '../../hooks/useSetSortParams';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'lightGrey',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface Props {
  productsList: Product[];
}

export const ProductsTable: React.FC<Props> = React.memo(({ productsList }) => {
  const [sortBy, direction, setSortParams] = useSetSortParams();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableColumns.map(column => (
              <StyledTableCell key={column.id}>
                <TableSortLabel
                  active={sortBy === column.title}
                  direction={sortBy === column.title ? direction : 'asc'}
                  onClick={() => setSortParams(column.title)}
                >
                  {column.title}
                </TableSortLabel>
              </StyledTableCell>
            ))}

            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {productsList.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.id}
              </StyledTableCell>

              <StyledTableCell>{product.title}</StyledTableCell>
              <StyledTableCell>{product.description}</StyledTableCell>
              <StyledTableCell align="center">{product.price}</StyledTableCell>

              <StyledTableCell align="center">
                <a href={product.thumbnail} target="_blank" rel="noreferrer" >
                  <img src={product.thumbnail} alt="product" height="24px" />
                </a>
              </StyledTableCell>

              <StyledTableCell align="center">{product.rating}</StyledTableCell>
              <StyledTableCell align="center">{product.stock}</StyledTableCell>
              <StyledTableCell align="center">{product.category}</StyledTableCell>

              <StyledTableCell align="center">
                <DeleteForeverIcon
                  sx={[
                    {
                      transition: 'color 0.3s',
                    },
                    {
                      '&:hover': {
                        color: 'red',
                        cursor: 'pointer',
                      },
                    },
                  ]}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
