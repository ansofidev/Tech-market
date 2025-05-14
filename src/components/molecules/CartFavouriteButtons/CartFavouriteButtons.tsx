import { Heart } from 'lucide-react';
import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';

interface Props {
  isInCart: boolean;
  isFavourite: boolean;
  toggleCart: (e: React.MouseEvent<HTMLButtonElement>) => void;
  toggleFavourite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
}

export const CartFavouriteButtons = ({
  isInCart,
  isFavourite,
  toggleCart,
  toggleFavourite,
}: Props) => (
  <div className="flex gap-2 mb-8">
    <Button
      content={isInCart ? 'In cart' : 'Add to cart'}
      variant={ButtonTypes.primary}
      iconSize={18}
      height={48}
      onClick={toggleCart}
      isInCart={isInCart}
      className="flex-1"
    />
    <Button
      variant={ButtonTypes.favourite}
      icon={Heart}
      iconSize={16}
      height={48}
      width={48}
      onClick={toggleFavourite}
      className={`${isFavourite ? 'active' : ''}`}
    />
  </div>
);
