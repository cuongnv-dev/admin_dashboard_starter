import { useEffect, useState } from 'react';

interface CheckBoxProps {
  value?: string;
  onClick?: (event: any) => void;
  checked?: boolean;
}

export const CheckBox = ({ value, checked, onClick }: CheckBoxProps) => {
  const [status, setStatus] = useState(checked);
  useEffect(() => {
    setStatus(checked);
  }, [checked]);
  return (
    <input
      type="checkbox"
      className=" transition duration-100 ease-in-out cursor-pointer rounded-xl relative w-5 h-5 border checked:bg-red-400 checked:border-transparent border-gray-100 outline-none"
      // defaultChecked={false}
      checked={status}
      value={value}
      onClick={onClick}
      onChange={(event) => {
        setStatus(event.target.checked);
      }}
    />
  );
};
