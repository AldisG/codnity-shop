import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../../store/redux/hooks';
import { handleFiltering } from '../../../store/slices/storeProductsSlice';
import { convertSelectValueToString } from '../../utility/convertSelectValueToString';
import CustomFilterForm from '../../utility/CustomFilterForm';

type P = {
  changeOrder: string;
  arangeByOptions: {
    type: string;
    a: string;
    b: string;
  }[];
  setchangeOrder: (value: string) => void;
};

const OrderByWrapper: FC<P> = ({
  changeOrder,
  arangeByOptions,
  setchangeOrder,
}) => {
  const dispatch = useAppDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setchangeOrder(value);
    dispatch(handleFiltering({type: 'order', value}))
  };
  return (
    <CustomFilterForm>
      <>
        <InputLabel id="select-order-label">Order by</InputLabel>
        <Select
          native
          id="select-order-label-group"
          label="order"
          onChange={handleChange}
          value={changeOrder}
        >
          {arangeByOptions?.map(({ type, a, b }) => (
              <optgroup key={type} label={type}>
                <option value={convertSelectValueToString(type, 'high')}>{a}</option>
                <option value={convertSelectValueToString(type, 'low')}>{b}</option>
              </optgroup>
          ))}
        </Select>
      </>
    </CustomFilterForm>
  );
};

export default OrderByWrapper;
