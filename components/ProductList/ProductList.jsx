
"use client";

import { ProductItem } from "../ProductItem/Productitem";

import './ProductList.css'

export const ProductList=({list})=>( <ul className="list">
                {list.map((item, index) => {
                  return (
                    <ProductItem key={index}item={item} index={index} />
                  );
                })}
            </ul>)