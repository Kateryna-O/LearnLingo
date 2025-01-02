import sprite from "../../assets/icon/sprite.svg";
import css from "./Card.module.css";
export const Card = ({ teachers }) => {
  return (
    <div className={css.separation}>
      <div className={css.cardWrapper}>
        <img
          src={teachers.avatar_url}
          alt="Teacher Avatar"
          className={css.cardImg}
        />
        <div className={css.statusIndicator}></div>
      </div>
      <div>
        <div className={css.wrapperBlockText}>
          <div className={css.textWrapper}>
            <p className={css.textLan}>Languages</p>
            <h2 className={css.name}>
              {teachers.name} {teachers.surname}
            </h2>
          </div>
          <div className={css.separationWithButton}>
            <div className={css.shortInfo}>
              <svg className={css.bookIcon}>
                <use href={`${sprite}#icon-book-open`} />
              </svg>
              <p className={css.infoText}>Lessons online</p>{" "}
              <span className={css.dividingLine}>|</span>
              <p className={css.infoText}>
                Lessons done: {teachers.lessons_done}
              </p>
              <span className={css.dividingLine}>|</span>
              <>
                <svg className={css.starIcon}>
                  <use href={`${sprite}#icon-star`} />
                </svg>
                <p className={css.infoText}>Rating: {teachers.rating}</p>
              </>
              <span className={css.dividingLine}>|</span>
              <p className={css.infoText}>
                Price / 1 hour:
                <span className={css.price}>{teachers.price_per_hour}$</span>
              </p>
            </div>
            <button type="button" className={css.heartBtn}>
              <svg className={css.heartIcon}>
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <p className={css.textLan}>
          Speaks: <span className={css.text}>{teachers.languages}</span>
        </p>
        <p className={css.textLan}>
          Lesson Info: <span className={css.text}>{teachers.lesson_info}</span>
        </p>
        <p className={css.textLan}>
          Conditions: <span className={css.text}>{teachers.conditions}</span>
        </p>
        <button type="button" className={css.btnRead}>
          Read more
        </button>
        <ul className={css.levelList}>
          {teachers.levels.map((level, index) => (
            <li key={index} className={css.levelListitem}>
              #{level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
