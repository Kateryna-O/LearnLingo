import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import css from "./NavBar.module.css";
import sprite from "../../assets/icon/sprite.svg";

export const NavBar = () => {
  return (
    <div className={css.wrapper}>
      <Logo />
      <nav className={css.navBar}>
        <NavLink to="/" className={css.navigate}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.navigate}>
          Teachers
        </NavLink>
      </nav>
      <div className={css.wrapperButtons}>
        <button className={css.buttonLogIn}>
          <svg className={css.logInIcon}>
            <use href={`${sprite}#icon-log-in`} />
          </svg>
          <span className={css.logInText}>Log in</span>
        </button>
        <button className={css.buttonReg}>Registration</button>
      </div>
    </div>
  );
};
