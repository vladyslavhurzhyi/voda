// import CartFinalPrice from "@/Components/CartFinalPrice/CartFinalPrice";
// import { FormForOder } from "@/Components/FormForOder/FormForOder";

// export default function orderForm() {
//   return (
//     <>
//       <div className="mx-auto">
//         <div className="mx-auto xl:px-12 pt-20 lg:mt-20  lg:ml-[72px] lg:mr-[72px] lg:mx-auto max-w-[360px] md:max-w-[1440px] ">
//           <div className="">
//             <h2 className=" uppercase font-bold text-[30px]  md:text-[50px] lg:text-[60px] text-[#F5821E] lg:mb-[60px] text-center">
//               оформлення
//             </h2>
//           </div>
//           <div className="mx-auto md:mt-6 md:flex md:flex-col xl:flex-row  xl:mx-auto max-w-[360px] md:max-w-[1440px]  gap-4">
//             <FormForOder />
//             <CartFinalPrice orderForm={true} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import CartFinalPrice from "@/Components/CartFinalPrice/CartFinalPrice";
import { FormForOder } from "@/Components/FormForOder/FormForOder";
import { SectionWrapper } from "@/Components/SectionWrapper/SectionWrapper";
import Head from "next/head";
import Script from "next/script"; // Импортируем компонент Script

export default function OrderForm() {
  // Изменено на OrderForm для соответствия стандартам именования
  return (
    <>
      {/* Добавляем теги метаданных в <head> */}
      <Head>
        <title>Форма заказа</title> {/* Вы можете изменить заголовок по своему усмотрению */}
        <meta name="description" content="Форма для оформления заказа на воду" />{" "}
        {/* Измените описание при необходимости */}
      </Head>

      {/* Вставка Google Tag Manager в head */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7PVQCNF');
        `}
      </Script>

      {/* Вставка Google Tag Manager (noscript) сразу после открытия body */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K7PVQCNF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <SectionWrapper>
        <div className="pt-[80px]">
          <h2 className="uppercase font-bold text-[30px] md:text-[50px] lg:text-[60px] text-[#F5821E] lg:mb-[20px] text-center">
            оформлення
          </h2>
        </div>
        <div className="md:mt-6 md:flex md:flex-col xl:flex-row md:max-w-[1440px] w-[100%] gap-4">
          <FormForOder />
          <CartFinalPrice orderForm={true} />
        </div>
      </SectionWrapper>
    </>
  );
}
