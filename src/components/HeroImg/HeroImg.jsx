import css from "./HeroImg.module.css";
import sticker1x from "../../assets/img/sticker_1x.png";
import sticker2x from "../../assets/img/sticker_2x.png";
import mac1x from "../../assets/img/Mac_1x.png";
import mac2x from "../../assets/img/Mac_2x.png";

export const HeroImg = () => {
  return (
    <div className={css.imgWrapper}>
      <img
        srcSet={`${sticker1x} 1x, ${sticker2x} 2x`}
        className={css.imgGirl}
        alt="Sticker illustration"
      />
      <img
        srcSet={`${mac1x} 1x, ${mac2x} 2x`}
        className={css.imgMac}
        alt="Mac illustration"
      />
    </div>
  );
};
