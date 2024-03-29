import Image from "next/image";
import Link from "next/link";

const GoogleMaps = () => {
  return (
    <div className="flex justify-center  h-[700px] relative ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.949262209893!2d30.787185677534282!3d46.56846867111345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63ad3042e7fa1%3A0xaf247f09f9f75816!2sSemena%20Paliia%20St%2C%2072%2C%20Odesa%2C%20Odes&#39;ka%20oblast%2C%20Ukraine%2C%2065000!5e0!3m2!1sen!2sch!4v1711109842262!5m2!1sen!2sch"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className=" w-[450px] h-full absolute bg-white right-10 ">
        <div className="mx-[40px] mt-[70px] flex gap-5 mb-[40px]">
          <Image
            src={"/photo-consultant.png"}
            alt="photo"
            width={115}
            height={115}
          ></Image>
          <div>
            <p className=" uppercase text-[20px] font-semibold text-[#00AFF0]">
              Ірина
            </p>
            <p className="text-[14px]">Менеджер з прийому замовлень</p>
          </div>
        </div>
        <div className="mx-[40px]">
          <p className="text-[#B3CBDB] text-[14px]">Адреса</p>

          <a
            href="https://maps.app.goo.gl/bPo7WMGwg7hzW6ei8"
            className="text[#5A5F69] text-[20px]"
            target="_blank"
          >
            Одеса, вул. Семена Палія, 72{" "}
          </a>
        </div>
        <div className="mx-[40px] mt-[34px]">
          <p className="text-[#B3CBDB] text-[14px]">Телефон</p>
          <a href="tel:+380968836688" className="text[#5A5F69] text-[20px]">
            +38 (096) 883 66 88
          </a>
        </div>

        <div className="mx-[40px] mt-[34px]">
          <p className="text-[#B3CBDB] text-[14px]">Email</p>
          <a
            href="mailto:zdorovavodaodesa@gmail.com "
            className="text[#5A5F69] text-[20px]"
            target="_blank"
          >
            zdorovavodaodesa@gmail.com
          </a>
        </div>

        <div className="flex justify-between ">
          <div className="mx-[40px] mt-[34px]">
            <p className="text-[#B3CBDB] text-[14px]">Час роботи в будні</p>
            <p className="text[#5A5F69] text-[20px]">09:00-20:00</p>
          </div>

          <div className="mx-[40px] mt-[34px]">
            <p className="text-[#B3CBDB] text-[14px]">Час роботи у вихідні</p>
            <p className="text[#5A5F69] text-[20px]">09:00-15:00</p>
          </div>
        </div>

        <div className="flex justify-start gap-4 mx-[40px] mt-[34px] ">
          <Link
            className=" hover:animate-pulse hover:scale-105 transition-all"
            href={"https://t.me/Irinkakolesova"}
          >
            <Image
              width={32}
              height={32}
              src={"/telegram.svg"}
              alt="telegram"
            ></Image>
          </Link>

          <Link
            className=" hover:animate-pulse hover:scale-105 transition-all"
            href={"https://t.me/Irinkakolesova"}
          >
            <Image
              width={32}
              height={32}
              src={"/whatsapp.svg"}
              alt="whatsapp"
            ></Image>
          </Link>

          <Link
            className=" hover:animate-pulse hover:scale-105 transition-all"
            href={"https://t.me/Irinkakolesova"}
          >
            <Image
              width={32}
              height={32}
              src={"/inst.svg"}
              alt="instagram"
            ></Image>
          </Link>

          <Link
            href={"https://t.me/Irinkakolesova"}
            className=" hover:animate-pulse hover:scale-105 transition-all"
          >
            <Image
              width={32}
              height={32}
              src={"/fb.svg"}
              alt="facebook"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
