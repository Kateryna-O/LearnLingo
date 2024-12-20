import { Link } from "react-router-dom";
import sprite from "../../assets/icon/sprite.svg";
import css from "./Logo.module.css";
export const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg className={css.logoIcon}>
        <use href={`${sprite}#icon-ukraine`}></use>
      </svg>
      <span className={css.logoText}>LearnLingo</span>
    </Link>
  );
};
