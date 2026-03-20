'use client';

import { useCartStore } from '@/app/zustand/cartState/cartState';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Button from '../Button/Button';

import './ProductItem.css';

export const ProductItem = ({ item, index }) => {
  const addProductToCart = useCartStore((state) => state.addProduct);

  const handleClick = (item) => {
    addProductToCart(item);
    toast.success('Додано до кошика');
  };

  return (
    <li key={index} className="itemCatalog">
      <div className="imgCatalog">
        <Image src={item.image} width={item.width} height={item.height} alt={item.name} />
      </div>
      <div className="itemDescription">
        <p className="itemTitle">{item.name}</p>
        {item.volume && <p className="itemTitle">{item.volume}л </p>}
      </div>
      <div className="itemDescriptionSub">
        <p className="itemSubTitle">{item.description} </p>
      </div>

      <div className="itemDescripPrice">
        <p className="itemPriceUnit">{item.price} ₴</p>
      </div>
      <div className="wrapperButton">
        <Button id="order" onClick={() => handleClick(item)} text="Замовити" className="button" />
      </div>
    </li>
  );
};
