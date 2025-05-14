import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';

interface Props {
  colorsAvailable: string[];
  selectedColor: string;
  onColorClick: (color: string) => void;
}

export const ColorSelector = ({
  colorsAvailable,
  selectedColor,
  onColorClick,
}: Props) => {
  return (
    <div className="inline-grid grid-cols-6 gap-2">
      {colorsAvailable.map((color) => (
        <div key={color} className="col-span-1">
          <Button
            variant={ButtonTypes.selector}
            bgColor={color}
            className={`transition-all duration-200 ${
              selectedColor === color
                ? '!border-2 !border-[#F1F2F9]'
                : 'border-2 border-[#3B3E4A]'
            } hover:ring-2 hover:ring-white/40 hover:scale-105`}
            onClick={() => onColorClick(color)}
          />
        </div>
      ))}
    </div>
  );
};
