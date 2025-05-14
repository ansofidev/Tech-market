import Button from '@/components/atoms/button/Button';
import { ButtonTypes } from '@/types/ButtonTypes';
import { CartItem } from '@/components/organisms/CartItem/CartItem';
import { Link } from 'react-router';
import { useAppSelector } from '@/store/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CartPageTemplate = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const products = useAppSelector((store) => store.cart.items);
  const cartItems = Object.values(products);

  const totalItems = cartItems.length;
  const user = useAppSelector((store) => store.auth.user);

  const { t } = useTranslation();

  useEffect(() => {
    let price = cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );

    if (user) {
      price *= 0.95;
    }

    setTotalPrice(price);
  }, [user, cartItems]);

  return (
    <div
      className="grid grid-cols-4 gap-4 
      min-[640px]:grid-cols-12
      min-[1200px]:grid-cols-24 px-4
      min-[640px]:px-6
      min-[1200px]:px-0
      min-[1200px]:max-w-[1136px] mx-auto
      pt-6 pb-16
      min-[640px]:pt-10 min-[640px]:pb-16
      min-[1200px]:pt-10 min-[1200px]:pb-20 
      gap-y-0
      min-h-[70vh]"
    >
      <h1
        className="col-span-full
          font-[Mont] font-extrabold
          text-[32px] leading-[41px] tracking-[-0.01em]
          min-[639px]:text-[48px] min-[1200px]:leading-[56px]
          text-[#F1F2F9] mb-2"
      >
        {t('cartPageTemplate.title')}
      </h1>

      {cartItems.length === 0 ? (
        <div
          className="col-span-full flex flex-col items-center justify-center text-center text-[#F1F2F9]
          h-[50vh] sm:h-[60vh] lg:h-[48vh]"
        >
          <h2 className="text-[22px] sm:text-[26px] font-semibold mb-4">
            {t('cartPageTemplate.empty.title')}
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#B0B3C6]">
            {t('cartPageTemplate.empty.text')}
          </p>
          <Link to="/" className="mt-6">
            <Button
              variant={ButtonTypes.primary}
              content={t('cartPageTemplate.empty.button.goToShop')}
              width={200}
              height={40}
            />
          </Link>
        </div>
      ) : (
        <>
          {/* Cart items */}
          <div className="col-span-full min-[1200px]:col-span-16">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                img={item.product.image}
                name={item.product.name}
                price={item.product.price}
              />
            ))}
          </div>

          {/* Checkout container */}
          <div className="col-span-full min-[1200px]:col-span-8 border-1 border-[#3B3E4A] p-6 self-start rounded-2xl bg-[#1D1F2B]">
            <div className="flex flex-col items-center text-center">
              {user ? (
                <>
                  <div className="text-sm text-green-400 mb-2">
                    {t('cartPageTemplate.discount', { count: 5 })}
                  </div>
                  <div className="text-[#A0A0A8] line-through text-base mb-1">
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.product.price * item.quantity,
                        0,
                      )
                      .toFixed(2)}
                  </div>
                </>
              ) : (
                <div className="text-sm text-[#FACC15] mb-2">
                  {t('cartPageTemplate.registerForDiscount', { count: 5 })}
                </div>
              )}

              <h2 className="font-[montBold] text-2xl text-white">
                ${totalPrice.toFixed(2)}
              </h2>
              <h4 className="font-[Mont] text-sm text-[#75767F]">
                {t('cartPageTemplate.totalPrice', { count: totalItems })}
              </h4>

              <div className="h-[1px] bg-[#3B3E4A] w-full my-4"></div>

              <Link to="/checkout" className="w-full">
                <Button
                  variant={ButtonTypes.primary}
                  content={t('cartPageTemplate.button.checkout')}
                  width={'100%'}
                />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
