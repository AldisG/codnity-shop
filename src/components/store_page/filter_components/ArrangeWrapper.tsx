import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
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

const ArrangeWrapper: FC<P> = ({
  changeOrder,
  arangeByOptions,
  setchangeOrder,
}) => {

  const handleChange = (event: SelectChangeEvent) => {
    setchangeOrder(event.target.value);
    // fire rearrange items event from store (create it)
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
              <option value={convertSelectValueToString(type, a)}>{a}</option>
              <option value={convertSelectValueToString(type, b)}>{b}</option>
            </optgroup>
          ))}
        </Select>
      </>
    </CustomFilterForm>
  );
};

export default ArrangeWrapper;
