import React, { FC, ChangeEvent } from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div className="flex items-center justify-center w-6 h-6 border-2 border-black">
      <input
        type="checkbox"
        className="opacity-0 absolute"
        checked={checked}
        onChange={onChange}
      />
      {checked && <div className="w-4 h-4 bg-black"></div>}
    </div>
  );
};

export default Checkbox;