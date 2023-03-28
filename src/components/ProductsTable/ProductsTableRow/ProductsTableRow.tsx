import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { deleteOne } from '../../../features/productsSlice';
import { Product } from '../../../types/Product';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { EditingForm } from '../EditingForm';

interface Props {
  product: Product;
}

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

export const ProductsTableRow: React.FC<Props> = React.memo(({ product }) => {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const [isPriceEditing, setIsPriceEditing] = useState(false);
  const [isStockEditing, setIsStockEditing] = useState(false);
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <StyledTableRow key={product.id}>
      <StyledTableCell scope="row">
        {product.id}
      </StyledTableCell>

      <StyledTableCell
        onDoubleClick={() => setIsTitleEditing(true)}
      >
        {isTitleEditing ? (
          <EditingForm
            id={product.id}
            property={'title'}
            value={product.title}
            isEditing={isTitleEditing}
            onSetIsEditing={setIsTitleEditing}
          />
        ) : product.title}
      </StyledTableCell>

      <StyledTableCell
        onDoubleClick={() => setIsDescriptionEditing(true)}
      >
        {isDescriptionEditing ? (
          <EditingForm
            id={product.id}
            property={'description'}
            value={product.description}
            isEditing={isDescriptionEditing}
            onSetIsEditing={setIsDescriptionEditing}
          />
        ) : product.description}
      </StyledTableCell>

      <StyledTableCell
        align="center"
        onDoubleClick={() => setIsPriceEditing(true)}
      >
        {isPriceEditing ? (
          <EditingForm
            id={product.id}
            property={'price'}
            value={product.price}
            isEditing={isPriceEditing}
            onSetIsEditing={setIsPriceEditing}
          />
        ) : product.price}
      </StyledTableCell>

      <StyledTableCell align="center">
        {product.thumbnail
          ? (
            <a href={product.thumbnail} target="_blank" rel="noreferrer" >
              <img src={product.thumbnail} alt="product" height="24px" />
            </a>
          ) : 'No photo'}
      </StyledTableCell>

      <StyledTableCell align="center">
        {product.rating}
      </StyledTableCell>

      <StyledTableCell
        align="center"
        onDoubleClick={() => setIsStockEditing(true)}
      >
        {isStockEditing ? (
          <EditingForm
            id={product.id}
            property={'stock'}
            value={product.stock}
            isEditing={isStockEditing}
            onSetIsEditing={setIsStockEditing}
          />
        ) : product.stock}
      </StyledTableCell>

      <StyledTableCell
        align="center"
        onDoubleClick={() => setIsCategoryEditing(true)}
      >
        {isCategoryEditing ? (
          <EditingForm
            id={product.id}
            property={'category'}
            value={product.category}
            isEditing={isCategoryEditing}
            onSetIsEditing={setIsCategoryEditing}
          />
        ) : product.category}
      </StyledTableCell>

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
          onClick={() => dispatch(deleteOne(product.id))}
        />
      </StyledTableCell>
    </StyledTableRow>
  );
});
