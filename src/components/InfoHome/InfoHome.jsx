import css from "./InfoHome.module.css";

export const InfoHome = () => {
  return (
    <div className={css.infoWrapper}>
      <ul className={css.InfoList}>
        <li className={css.infoListItem}>
          <p className={css.itemNum}>32,000 +</p>
          <p className={css.itemText}>Experienced tutors</p>
        </li>
        <li className={css.infoListItem}>
          <p className={css.itemNum}>300,000 +</p>
          <p className={css.itemText}>5-star tutor reviews</p>
        </li>
        <li className={css.infoListItem}>
          <p className={css.itemNum}>120 +</p>
          <p className={css.itemText}>Subjects taught</p>
        </li>
        <li className={css.infoListItem}>
          <p className={css.itemNum}>200 +</p>
          <p className={css.itemText}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};
