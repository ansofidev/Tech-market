import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';

interface Props {
  capacityAvailable: string[];
  selectedCapacity: string;
  onMemoryClick: (capacity: string) => void;
}

export const CapacitySelector = ({
  capacityAvailable,
  selectedCapacity,
  onMemoryClick,
}: Props) => {
  return (
    <div className="inline-grid grid-cols-5 gap-2">
      {capacityAvailable.map((cap) => (
        <div key={cap} className="col-span-1">
          <Button
            content={cap}
            variant={ButtonTypes.secondary}
            color={selectedCapacity === cap ? '#0F1121' : '#F1F2F9'}
            className={`px-2 h-8 w-full text-sm font-medium border transition-all duration-200 ${
              selectedCapacity === cap
                ? 'bg-white border-white hover:border-white'
                : 'bg-transparent border-[#3B3E4A] hover:border-white hover:text-white'
            }`}
            onClick={() => onMemoryClick(cap)}
          />
        </div>
      ))}
    </div>
  );
};
