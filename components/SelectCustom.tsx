import Select from 'react-select';
import customSelectStyles from '@/lib/customSelectStyles';

interface SelectProps {
  options: {
    value: string;
    label: string;
  }[];
  value: {
    value: string;
    label: string;
  };
  onChange: (arg0: any) => void;
}

export default function SelectCustom({
  options,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className="mb-10">
      <label>Filter</label>
      <Select
        styles={customSelectStyles}
        onChange={onChange}
        options={options}
        value={value}
      />
    </div>
  );
}
