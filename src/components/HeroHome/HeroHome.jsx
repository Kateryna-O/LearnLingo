import css from "./HeroHome.module.css";
export const HeroHome = () => {
  return (
    <div className={css.heroWrapper}>
      <h1 className={css.titleHero}>
        Unlock your potential with the best{" "}
        <span className={css.accentTitle}>language</span> tutors
      </h1>
      <p className={css.textHero}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <button className={css.btnHero}>Get started</button>
    </div>
  );
};
