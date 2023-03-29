import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import styles from "./styles.module.scss";

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
            <img src={"./image/encarte-1.png"} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <img src={"./image/encarte-2.png"} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <img src={"./image/encarte-3.png"} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <img src={"./image/encarte-4.png"} alt="" />
          </div>
          <div className="keen-slider__slide number-slide1">
            <img src={"./image/encarte-1.png"} alt="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={"./image/encarte-2.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
