import React, { useEffect, useRef, useState } from 'react';
import { updateProduct } from '../../../features/productsSlice';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { Product } from '../../../types/Product';

interface Props {
  id: number;
  property: keyof Product;
  value: number | string;
  isEditing: boolean;
  onSetIsEditing: (isEditing: boolean) => void;
}

export const EditingForm: React.FC<Props> = React.memo(({
  id,
  property,
  value,
  isEditing,
  onSetIsEditing,
}) => {
  const [updatedValue, setUpdatedValue] = useState(value);
  const dispatch = useAppDispatch();

  const productValueField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (productValueField.current) {
      productValueField.current.focus();
    }
  }, [isEditing]);

  const isNumberInput = property === 'price'
    || property === 'stock';

  const handleChangeUpdatedValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (isNumberInput) {
      setUpdatedValue(+event.target.value);
    } else {
      setUpdatedValue(event.target.value);
    }
  };

  const handleEscKeyDownCancelEditing = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Escape') {
      onSetIsEditing(false);
      setUpdatedValue(value);
    }
  };

  const saveUpdatedProduct = () => {
    if (value === updatedValue) {
      onSetIsEditing(false);

      return;
    }

    const dataToUpdate = {
      [property]: updatedValue,
    };

    dispatch(updateProduct([id, dataToUpdate]));
    onSetIsEditing(false);
  };

  const handleSubmitUpdateProduct = (event: React.FormEvent) => {
    event.preventDefault();

    saveUpdatedProduct();
  };

  return (
    <form onSubmit={handleSubmitUpdateProduct}>
      <input
        style={{ width: '100%' }}
        ref={productValueField}
        type={isNumberInput ? "number" : "text"}
        value={updatedValue}
        onChange={handleChangeUpdatedValue}
        onBlur={saveUpdatedProduct}
        onKeyDown={handleEscKeyDownCancelEditing}
      />
    </form>
  );
});
