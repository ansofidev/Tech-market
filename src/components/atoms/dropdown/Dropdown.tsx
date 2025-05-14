import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';

type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  placeholder: string;
  options: SelectOption[];
  onValueChange?: (value: string) => void;
  size: 'small' | 'medium' | 'large';
  name: string;
};

export const CustomDropdown: React.FC<Props> = ({
  placeholder,
  options,
  onValueChange,
  size,
  name,
}) => {
  return (
    <div className="inline-block w-full">
      <label className="mb-1 block whitespace-nowrap text-[12px] text-[#75767F] font-bold tracking-[0.08em]">
        {name}
      </label>
      <Select onValueChange={onValueChange}>
        <SelectTrigger
          className={clsx(
            'flex w-full items-center justify-between border text-[14px] leading-[21px] px-3 py-[10px] text-white transition-colors outline-none',
            'bg-[#323542] border-transparent',
            'focus:border-[#905BFF] data-[state=open]:border-[#905BFF]',
            // {
            //   'text-sm h-8': size === 'small',
            //   'text-base h-10': size === 'medium',
            //   'text-lg h-14': size === 'large',
            // },
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          className={clsx(
            'mt-1 max-h-72 w-full overflow-y-auto border border-[#3B3E4A] bg-[#0F1121] py-2 text-gray-400 shadow-lg',
            {
              'text-sm': size === 'small',
              'text-base': size === 'medium',
              'text-lg': size === 'large',
            },
          )}
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={clsx(
                'block w-full cursor-pointer px-3 py-1.5 transition-colors',
                'text-gray-400',
                'hover:bg-[#323542] hover:text-white',
                'focus:bg-[#323542] focus:text-white',
                'data-[state=checked]:bg-[#323542] data-[state=checked]:text-white',
              )}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
