import { memo } from 'react';

import { Option, SelectItem } from '@/components/Select/styled';

interface ISelectProps {
  label: string;
  inputsName: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: string[] | number[];
}

export const Select = memo((options: ISelectProps) => {
  const { inputsName, handleChange, data, label } = options;

  return (
    <SelectItem
      data-testid={`signup-select-${inputsName}`}
      required
      name={inputsName}
      onChange={handleChange}
    >
      <Option
        label={label}
        hidden
      />
      {data.map((item, index) => (
        <Option
          data-testid={`signup-select-${inputsName}-${item}`}
          key={item}
          value={inputsName === 'month' ? index : Number(item)}
        >
          {item}
        </Option>
      ))}
    </SelectItem>
  );
});
