import { YouMayAlsoLikeSlider } from '@/components/organisms/YouMayAlsoLike/YouMayAlsoLike';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import { ItemCardAnimation } from '@/components/atoms/Animation/Animation';
import { useTranslation } from 'react-i18next';
import { useItemCardData } from '@/hooks/useItemCardData';
import { useItemCardActions } from '@/hooks/useItemCardActions';
import { CategoryType } from '@/types/CategoryType';
import { ImageGallery } from '@/components/molecules/ImageGallery/ImageGallery';
import { ColorSelector } from '@/components/molecules/ColorSelector/ColorSelector';
import { CapacitySelector } from '@/components/molecules/CapacitySelector/CapacitySelector';
import { PriceBlock } from '@/components/molecules/PriceBlock/PriceBlock';
import { CartFavouriteButtons } from '@/components/molecules/CartFavouriteButtons/CartFavouriteButtons';
import { TechSpecs } from '@/components/molecules/TechSpecs/TechSpecs';

export const ItemCard = () => {
  const { product, isLoading, productId } = useItemCardData();
  const {
    handleColorClick,
    handleMemoryClick,
    toggleFavourite,
    toggleCart,
    isFavourite,
    isInCart,
  } = useItemCardActions(product, productId);

  const { t } = useTranslation();

  return (
    <section id="itemPageContent" className="bg-[#0F1121] text-[#F1F2F9]">
      {isLoading ? (
        <ItemCardAnimation />
      ) : (
        <div className="grid grid-cols-4 gap-4 min-[640px]:grid-cols-12 min-[1200px]:grid-cols-24 px-4 min-[640px]:px-8 min-[1200px]:px-0 min-[1200px]:max-w-[1136px] mx-auto pt-14 pb-4 min-[640px]:pt-18 min-[640px]:pb-6 min-[1200px]:pt-18 min-[1200px]:pb-10 gap-y-0">
          <div className="col-span-full mb-8 min-[640px]:mb-10 font-[montBold] leading-tight text-[22px] min-[640px]:text-[32px]">
            <h1>{product?.name}</h1>
          </div>

          <div className="col-span-full grid grid-cols-4 min-[640px]:grid-cols-12 min-[1200px]:grid-cols-24 gap-4 mb-14 min-[640px]:mb-16 min-[1200px]:mb-20">
            {/* Gallery */}
            <div className="col-span-full min-[640px]:col-span-7 min-[1200px]:col-span-12 mb-10">
              <ImageGallery
                images={product?.images || []}
                activeImageIndex={0}
                handleThumbnailClick={() => {}}
              />
            </div>

            {/* Product info */}
            <div className="col-span-full min-[640px]:col-span-5 min-[1200px]:col-span-7 min-[1200px]:col-start-14">
              <div className="grid grid-cols-4 min-[640px]:grid-cols-5 min-[1200px]:grid-cols-7 gap-4">
                <div className="col-span-full">
                  {/* Colors */}
                  <div className="mb-6 border-b border-[#3B3E4A] pb-6">
                    <p className="text-sm text-[#89939A] mb-2">
                      {t('itemCardTemplate.availableColors')}
                    </p>
                    <ColorSelector
                      colorsAvailable={product?.colorsAvailable || []}
                      selectedColor={product?.color || ''}
                      onColorClick={handleColorClick}
                    />
                  </div>

                  {/* Capacity */}
                  <div className="mb-8 border-b border-[#3B3E4A] pb-6">
                    <p className="text-sm text-[#89939A] mb-2">
                      {t('itemCardTemplate.selectCapacity')}
                    </p>
                    <CapacitySelector
                      capacityAvailable={product?.capacityAvailable || []}
                      selectedCapacity={product?.capacity || ''}
                      onMemoryClick={handleMemoryClick}
                    />
                  </div>

                  {/* Price */}
                  <PriceBlock
                    priceDiscount={product?.priceDiscount ?? 0}
                    priceRegular={product?.priceRegular ?? 0}
                  />

                  {/* Buttons */}
                  <div className="mb-8">
                    <div className="flex gap-2 mb-8">
                      <CartFavouriteButtons
                        isInCart={isInCart}
                        isFavourite={isFavourite}
                        toggleCart={toggleCart}
                        toggleFavourite={toggleFavourite}
                        buttonText={isInCart ? 'In cart' : 'Add to cart'}
                      />
                    </div>
                    
                  {/* Short tech specs */}
                  <div className="flex flex-col gap-1 text-xs sm:text-sm text-[#89939A] border-t border-[#3B3E4A] pt-4 mt-4">
                    <div className="flex justify-between gap-2">
                      <span className="min-w-[80px]">
                        {t('itemCardTemplate.specs.screen')}:
                      </span>

                      <span className="text-white text-right break-words">
                        {product?.screen}
                      </span>
                    </div>

                    <div className="flex justify-between gap-2">
                      <span className="min-w-[80px]">
                        {t('itemCardTemplate.specs.resolution')}:
                      </span>

                      <span className="text-white text-right break-words">
                        {product?.resolution}
                      </span>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      <span className="min-w-[80px]">
                        {t('itemCardTemplate.specs.processor')}:
                      </span>
                      
                      <span className="text-white text-right break-words">
                        {product?.processor}
                      </span>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      <span className="min-w-[80px]">
                        {t('itemCardTemplate.specs.ram')}:
                      </span>
                      
                      <span className="text-white text-right break-words">
                        {product?.ram}
                      </span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About and Tech specs */}
          <div className="col-span-full grid grid-cols-4  min-[1200px]:grid-cols-24 gap-4 mb-20">
            {/* About */}
            <div className="col-span-full min-[640px]:col-span-7 min-[1200px]:col-span-12">
              <p
                id="itemPageCapacity"
                className="col-span-full text-[22px] font-semibold border-b border-[#3B3E4A] pb-4 mb-8"
              >
                {t('itemCardTemplate.aboutProduct')}
              </p>
              <div className="col-span-full text-sm text-[#89939A] leading-relaxed">
                {product?.description.map((desc, i) => (
                  <div key={i} className="mb-8">
                    <h4 className="text-white text-base font-semibold text-[20px] mb-4">
                      {desc.title}
                    </h4>
                    <p className="text-[14px]">{desc.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Specs */}
            <div className="col-span-full min-[640px]:col-span-5 min-[1200px]:col-span-11 min-[1200px]:col-start-14">
              <TechSpecs
                screen={product?.screen}
                resolution={product?.resolution}
                processor={product?.processor}
                ram={product?.ram}
                capacity={product?.capacity}
                camera={product?.camera}
                zoom={product?.zoom}
                cell={product?.cell}
              />
            </div>
          </div>
          {/* You may also like */}
          <div id="itemPageContent" className="col-span-full">
            <YouMayAlsoLikeSlider category={CategoryType.phones} />
          </div>
        </div>
      )}
    </section>
  );
};
