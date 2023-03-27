import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableColumns } from './ProductsTebleColumns';
import { useSetSortParams } from '../../hooks/useSetSortParams';
import {  useAppSelector } from '../../hooks/reduxHooks';
import { sortProducts } from '../../helpers/sortProducts';
import { ProductsTableRow } from './ProductsTableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'lightGrey',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const ProductsTable: React.FC = () => {
  const [sortBy, direction, setSortParams] = useSetSortParams();

  const { products } = useAppSelector(state => state.products);

  const visibleProducts = useMemo(() => {
    return sortProducts(products, sortBy, direction);
  }, [products, sortBy, direction]);

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
          {visibleProducts.map((product) => (
            <ProductsTableRow product={product} key={product.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
