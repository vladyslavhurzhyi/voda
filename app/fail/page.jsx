// import Image from "next/image";
// import Link from "next/link";

// export default function fail() {
//   return (
//     <>
//       <div className=" flex items-center  flex-1 mt-[50px] md:mt-[150px]">
//         <div className="containerModal ">
//           <div className="wrapperModal">
//             <div className="wrapperImgBottle">
//               <Image
//                 className="imgBottleMod"
//                 src="/bottleForModal.png"
//                 width={332}
//                 height={272}
//                 alt="bottle with water"
//               />
//               <button type="button">
//                 <Link href={"/"}>
//                   <Image
//                     className="imgIconCloseMod"
//                     src="iconCloseModal.svg"
//                     width={24}
//                     height={24}
//                     alt="Close"
//                   />
//                 </Link>
//               </button>
//             </div>
//             <p className="titleModal">Невдала оплата</p>
//             <p className="textModal">
//               Ваше оплата не пройшла. Спробуйте ще. Якщо у вас виникли додаткові
//               питання, зателефонуйте або напишіть нам у зручному месенджері
//             </p>
//             <a href="tel:+380968836688 ">
//               <p className="phoneNumber">
//                 <u>+38 (096) 883 66 88 </u>
//               </p>
//             </a>
//             <div className="wrapperForIcons">
//               <ul className="listIcons">
//                 <Link href="viber://chat?number=+380968836688">
//                   <li className="itemIcon">
//                     <Image
//                       src="/iconViberGrey.png"
//                       width={29.89}
//                       height={31.47}
//                       alt="Viber"
//                     />
//                   </li>
//                 </Link>
//                 <Link href="tg://resolve?domain=zdorova_voda_odesa">
//                   <li className="itemIcon">
//                     <Image
//                       src="/iconTelegramgrey.png"
//                       width={30.63}
//                       height={25.5}
//                       alt="Telegram"
//                     />
//                   </li>
//                 </Link>
//                 <Link href="https://www.facebook.com/profile.php?id=100094217051258">
//                   <li className="itemIcon">
//                     <Image
//                       src="/iconMessengerGrey.png"
//                       width={30}
//                       height={29.96}
//                       alt="Facebook"
//                     />
//                   </li>
//                 </Link>
//                 <Link href="https://www.instagram.com/zdorovavoda_odesa/">
//                   <li className="itemIcon">
//                     <Image
//                       src="/iconInstaGrey.png"
//                       width={28.5}
//                       height={28.5}
//                       alt="Instagram"
//                     />
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { Fail } from '@/Components/Fail/Fail';
import { SectionWrapper } from '@/Components/SectionWrapper/SectionWrapper';

import Script from 'next/script'; // Импорт компонента Script

export default function fail() {
  return (
    <>
      {/* Вставка Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7PVQCNF');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K7PVQCNF"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* Контент страницы */}
      <Fail />
    </>
  );
}
