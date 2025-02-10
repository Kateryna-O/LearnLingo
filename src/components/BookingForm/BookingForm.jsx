import { useForm } from "react-hook-form";
import sprite from "../../assets/icon/sprite.svg";
import css from "./BookingForm.module.css";
import { useEffect, useState } from "react";

export const BookingForm = ({ teachers }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  return (
    isOpen && (
      <div className={css.blackFon} onClick={handleBackdropClick}>
        <div className={css.formWrapper}>
          <button type="button" className={css.btnClose} onClick={closeModal}>
            <svg className={css.btnCloseIcon}>
              <use href={`${sprite}#icon-x`} />
            </svg>
          </button>
          <h2 className={css.windowTitle}>Book trial lesson</h2>
          <p className={css.text}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
          <div className={css.infoTeacher}>
            <img
              src={teachers.avatar_url}
              className={css.imgTeacher}
              alt="Teacher Avatar"
            />
            <div className={css.infoTeacherName}>
              <p className={css.insert}>Your teacher</p>
              <h2 className={css.name}>
                {teachers.name} {teachers.surname}
              </h2>
            </div>
          </div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <h3 className={css.questionReason}>
              What is your main reason for learning English?
            </h3>
            <ul className={css.reasonWrapper}>
              <li className={css.wrapperRadioText}>
                <input
                  type="radio"
                  id="Career"
                  value="Career and business"
                  className={css.radioReason}
                  {...register("reason")}
                />
                <label htmlFor="Career" className={css.radioLabel}>
                  Career and business
                </label>
              </li>
              <li className={css.wrapperRadioText}>
                <input
                  type="radio"
                  id="ForKids"
                  value="Lesson for kids"
                  className={css.radioReason}
                  {...register("reason")}
                />
                <label htmlFor="ForKids" className={css.radioLabel}>
                  Lesson for kids
                </label>
              </li>{" "}
              <li className={css.wrapperRadioText}>
                <input
                  type="radio"
                  id="abroad"
                  value="Living abroad"
                  className={css.radioReason}
                  {...register("reason")}
                />
                <label htmlFor="abroad" className={css.radioLabel}>
                  Living abroad
                </label>
              </li>
              <li className={css.wrapperRadioText}>
                <input
                  type="radio"
                  id="Exams"
                  value="Exams and coursework"
                  className={css.radioReason}
                  {...register("reason")}
                />
                <label htmlFor="Exams" className={css.radioLabel}>
                  Exams and coursework
                </label>
              </li>
              <li className={css.wrapperRadioText}>
                <input
                  type="radio"
                  id="Culture"
                  value="Culture, travel or hobby"
                  className={css.radioReason}
                  {...register("reason")}
                />
                <label htmlFor="Culture" className={css.radioLabel}>
                  Culture, travel or hobby
                </label>
              </li>
            </ul>
            <div className={css.inputWrapper}>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
                className={css.inputText}
              />
              <input
                type="email"
                placeholder="Email"
                className={css.inputText}
                {...register("email")}
              />
              <input
                type="text"
                placeholder="Phone number"
                className={css.inputText}
                {...register("phoneNumber")}
              />
            </div>
            <button type="submit" className={css.formBtn}>
              Book
            </button>
          </form>
        </div>
      </div>
    )
  );
};
