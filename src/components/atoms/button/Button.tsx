import React, { useState } from 'react';
import { ButtonTypes } from '../../../types/ButtonTypes';
import { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type Props = {
  id?: string;
  content?: string | number;
  color?: string;
  variant: ButtonTypes;
  disabled?: boolean;
  className?: string;
  width?: number | string;
  height?: number;
  icon?: LucideIcon;
  iconSize?: number;
  bgColor?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isInCart?: boolean;
};

const Button: React.FC<Props> = ({
  content,
  color,
  variant = ButtonTypes.primary,
  disabled = false,
  className = '',
  width,
  height,
  icon: IconComponent,
  iconSize = 20,
  bgColor,
  onClick,
  isInCart = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const baseClasses =
    'inline-flex items-center justify-center font-semibold cursor-pointer text-sm leading-none transition-colors';

  const variantClasses = {
    [ButtonTypes.primary]: clsx(
      'text-white w-[176px] h-[40px]',
      isInCart
        ? 'bg-[#323542] hover:bg-[#323542]'
        : 'bg-[#905BFF] hover:bg-[#A378FF] active:bg-[#323542]',
    ),
    [ButtonTypes.numbered]:
      'bg-[#161827] text-[#F1F2F9] w-8 h-8 hover:bg-[#323542] active:bg-[#905BFF] active:text-white',
    [ButtonTypes.arrow]:
      'bg-[#323542] w-8 h-8 hover:bg-[#75767F] disabled:hover:bg-[#323542]',
    [ButtonTypes.selector]:
      'bg-[#905BFF] w-8 h-8 rounded-full border-2 border-[#333333] shadow-[inset_0_0_0_2px_#000000] hover:border-[#A6A6C2] active:border-white',
    [ButtonTypes.favourite]: clsx(
      'w-10 h-10 flex items-center justify-center transition-colors',
      isActive
        ? 'bg-transparent border border-[#3B3E4A] text-[#EB5757]'
        : 'bg-[#323542] hover:bg-[#4A4D58] border border-transparent text-white',
    ),
    [ButtonTypes.back]: 'bg-transparent hover:text-[#905BFF]',
    [ButtonTypes.cart]: 'bg-blue-600 text-white hover:bg-blue-700',
    [ButtonTypes.ghost]:
      'border border-gray-400 text-gray-200 hover:bg-gray-800',
    [ButtonTypes.secondary]: 'bg-[#666] text-white hover:bg-[#888]',
  };

  const disabledClasses = disabled
    ? 'text-[#666666] bg-[#333333] cursor-not-allowed'
    : '';

  const style = {
    backgroundColor: bgColor,
    width,
    height,
    color,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === ButtonTypes.favourite && !disabled) {
      setIsActive((prev) => !prev);
    }
    onClick?.(e);
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        disabledClasses,
        className,
      )}
      disabled={disabled}
      style={style}
      onClick={handleClick}
    >
      {IconComponent && (
        <IconComponent
          size={iconSize}
          className={clsx(
            'transition-all duration-200',
            variant === ButtonTypes.favourite && isActive
              ? 'text-[#EB5757] fill-[#EB5757]'
              : '',
          )}
        />
      )}
      {content}
    </button>
  );
};

export default Button;
