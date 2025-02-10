import { useState } from "react";
import sprite from "../../assets/icon/sprite.svg";
import css from "./Card.module.css";
import { BookingForm } from "../BookingForm/BookingForm";
export const Card = ({ teachers }) => {
  const [DetailsInfo, setDetailsInfo] = useState(false);
  const [BookTeacher, setBook] = useState(false);
  const onClick = () => {
    setDetailsInfo((prevState) => !prevState);
  };
  const onBookTeacher = () => {
    setBook((prevState) => !prevState);
  };
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
      <div className={css.limitation}>
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
              <p className={css.infoText}>Lessons online</p>
              <span className={css.dividingLine}>|</span>
              <p className={css.infoText}>
                Lessons done: {teachers.lessons_done}
              </p>
              <span className={css.dividingLine}>|</span>

              <svg className={css.starIcon}>
                <use href={`${sprite}#icon-star`} />
              </svg>
              <p className={css.infoText}>Rating: {teachers.rating}</p>

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
          Speaks:
          <span className={css.text}>{teachers.languages.join(", ")} </span>
        </p>
        <p className={css.textLan}>
          Lesson Info: <span className={css.text}>{teachers.lesson_info}</span>
        </p>
        <p className={css.textLan}>
          Conditions: <span className={css.text}>{teachers.conditions}</span>
        </p>
        <button type="button" className={css.btnRead} onClick={onClick}>
          {DetailsInfo ? "Hide details" : "Read more"}
        </button>
        {DetailsInfo && (
          <div>
            <p className={css.teacherExperience}>{teachers.experience}</p>
            <ul className={css.teacherRevList}>
              {teachers.reviews.map((rev, id) => (
                <li key={id} className={css.teacherRevItem}>
                  <div>
                    <h3 className={css.nameRev}>{rev.reviewer_name}</h3>

                    <p className={css.ratingRev}>
                      <svg className={css.starIcon}>
                        <use href={`${sprite}#icon-star`} />
                      </svg>
                      {rev.reviewer_rating}
                    </p>
                  </div>
                  <p className={css.text}>{rev.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ul className={css.levelList}>
          {teachers.levels.map((level, index) => (
            <li key={index} className={css.levelListitem}>
              #{level}
            </li>
          ))}
        </ul>
        {DetailsInfo && (
          <button type="button" className={css.btnBook} onClick={onBookTeacher}>
            Book trial lesson
          </button>
        )}
        {BookTeacher && <BookingForm teachers={teachers} />}
      </div>
    </div>
  );
};
