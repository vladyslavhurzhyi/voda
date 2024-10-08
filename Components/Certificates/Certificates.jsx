"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import "./styles.css";

export const Certificates = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0,
  });

  const openLightboxOnSlide = (slide) => {
    setLightboxController({ toggler: !lightboxController.toggler, slide });
  };

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          "/certificate1big.png",
          "/certificate2big.png",
          "/certificate3big.png",
          "/certificate4big.png",
        ]}
        slide={lightboxController.slide}
        zoom={true}
      />
      <section className="sectionCertif">
        <div className="containerCertif">
          <h2 className="titleCertif">СЕРТИФІКАЦІЯ</h2>
          <div className="wrapperImages">
            <div
              className="imgContainer"
              onClick={() => openLightboxOnSlide(1)}
            >
              <Image
                src="/certificate1.png"
                width={248}
                height={352}
                alt="Здорова вода"
              />
            </div>
            <div className="wrapperForTowImages">
              <div
                className="imgContainer"
                onClick={() => openLightboxOnSlide(2)}
              >
                <Image
                  src="/certificate2.png"
                  width={238}
                  height={174}
                  alt="Здорова вода"
                />
              </div>
              <div
                className="imgContainer"
                onClick={() => openLightboxOnSlide(3)}
              >
                <Image
                  src="/certificate3.png"
                  width={238}
                  height={174}
                  alt="Здорова вода"
                />
              </div>
            </div>
            <div
              className="imgContainer"
              onClick={() => openLightboxOnSlide(4)}
            >
              <Image
                src="/certificate4.png"
                width={248}
                height={352}
                alt="Здорова вода"
              />
            </div>
          </div>
          <p className="textCertific">
            Якість продукції «Ecosoft» підтверджена <br /> сертифікатами EAC,
            NSF і TÜV SÜD
          </p>
        </div>
        <div className="custom-wave-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill bottom-wave"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};
