import { BookingForm } from "../../components/BookingForm/BookingForm";
import { CardList } from "../../components/CardList/CardList";
import css from "./TeachersPage.module.css";
export const TeachersPage = () => {
  return (
    <>
      <div className={css.wrapperPage}>
        <CardList />
      </div>
    </>
  );
};
