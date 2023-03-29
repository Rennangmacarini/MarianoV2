import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./styles.module.scss";
import encarteOne from '../../../public/image/encarte-1.png'
import encarteTwo from '../../../public/image/encarte-2.png'
import encarteThree from '../../../public/image/encarte-3.png'
import encarteFour from '../../../public/image/encarte-4.png'
import Image from "next/image";

export function Ofertas() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <>
      <div className={styles.title}>
        <h1>OFERTAS</h1>
      </div>

      <div className={styles.carousel}>
        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image src={encarteOne} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={encarteTwo} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={encarteThree} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={encarteFour} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <Image src={encarteOne} alt="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <Image src={encarteTwo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
