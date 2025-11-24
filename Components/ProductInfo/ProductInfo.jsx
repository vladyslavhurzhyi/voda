
"use client";

import Image from "next/image";

import './ProductInfo.css'

export const ProductInfo=({children, imageSrc, imageAlt})=>{
    return( <div className="wrapperInfo">
          <div className="itemInfo">
            {children}
          </div>
          <div className="wrapperImg">
            <Image
              className="img"
              src={imageSrc}
              width={640}
              height={408}
              alt={imageAlt}
            />
          </div>
        </div>)
}