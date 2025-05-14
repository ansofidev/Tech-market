interface Props {
  priceDiscount: number;
  priceRegular: number;
}

export const PriceBlock = ({ priceDiscount, priceRegular }: Props) => (
  <div className="inline-grid grid-cols-2 gap-2 items-center text-lg mb-4">
    <div className="col-span-1">
      <span className="text-white font-[montBold]">{priceDiscount} $</span>
    </div>
    <div className="col-span-1">
      <span className="text-[#75767F] line-through text-base">
        {priceRegular} $
      </span>
    </div>
  </div>
);
