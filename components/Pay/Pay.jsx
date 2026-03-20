'use client';

import { useCartStore } from '@/app/zustand/cartState/cartState';
import { useEffect } from 'react';
import { ModalThankYou } from '../ModalThankYou/ModalThankYou';
import { SectionWrapper } from '../SectionWrapper/SectionWrapper';

const Pay = () => {
  const cart = useCartStore((state) => state.waterItems);
  const otherProducts = useCartStore((state) => state.otherProducts);

  const resetWaterItems = useCartStore((state) => state.resetWaterItems);
  const resetOtherProducts = useCartStore((state) => state.resetOtherProducts);

  useEffect(() => {
    if (cart.length !== 0 || otherProducts.length !== 0) {
      resetWaterItems();
      resetOtherProducts();
    }
  }, [resetWaterItems, resetOtherProducts, cart, otherProducts]);

  return (
    <SectionWrapper>
      <div className="flex items-center md:mt-[80px] ">
        <ModalThankYou />
      </div>
    </SectionWrapper>
  );
};

export default Pay;
