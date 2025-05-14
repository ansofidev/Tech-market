import Button from '@/components/atoms/button/Button';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ButtonTypes } from '@/types/ButtonTypes';
import { Minus, Plus, X } from 'lucide-react';
import {
  removeFromCart,
  removeQuantity,
  addQuantity,
} from '@/features/cartSlice';

type Props = {
  id: number;
  img: string;
  name: string;
  price: number;
};

export const CartItem: React.FC<Props> = ({ id, img, name, price }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.items);
  const productInCart = products[id];
  const quantity = productInCart?.quantity || 1;

  const handleDecrease = () => {
    dispatch(removeQuantity({ productId: id }));
  };

  const handleIncrease = () => {
    dispatch(addQuantity({ productId: id }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ productId: id }));
  };

  return (
    <div className="bg-[#161827] text-[#F1F2F9] justify-between max-w-screen min-w-[288px] p-4 sm:p-6 flex flex-col cursor-pointer gap-4 mb-4 sm:flex-row sm:h-32 sm:items-center">
      <div className="flex flex-row items-center gap-6">
        <Button
          variant={ButtonTypes.numbered}
          width={16}
          height={16}
          icon={X}
          iconSize={15}
          color="#4A4D58"
          onClick={handleRemoveItem}
        />
        <img className="h-16 w-16 object-contain" src={img} alt={name} />
        <h2 className="font-[Mont] text-left text-sm leading-5">{name}</h2>
      </div>

      <div className="flex justify-between sm:justify-start">
        <div className="pr-6">
          <div className="flex flex-row items-center gap-[14px]">
            <Button
              variant={ButtonTypes.arrow}
              icon={Minus}
              iconSize={16}
              disabled={quantity === 1}
              onClick={handleDecrease}
            />
            <span>{quantity}</span>
            <Button
              variant={ButtonTypes.arrow}
              icon={Plus}
              iconSize={16}
              onClick={handleIncrease}
            />
          </div>
        </div>
        <div className="w-20 flex justify-end">
          <h2 className="font-[montBold] text-2xl leading-tight">${price}</h2>
        </div>
      </div>
    </div>
  );
};
