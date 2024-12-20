import { HeroHome } from "../../components/heroHome/heroHome";
import { HeroImg } from "../../components/HeroImg/HeroImg";
import { InfoHome } from "../../components/InfoHome/InfoHome";
import css from "./HomePage.module.css";
export const HomePage = () => {
  return (
    <>
      <div className={css.homeWrapper}>
        <HeroHome />
        <HeroImg />
      </div>
      <InfoHome />
    </>
  );
};
