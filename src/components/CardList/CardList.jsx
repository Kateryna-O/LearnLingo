import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Card/Card";
import {
  selectError,
  selectLoading,
  selectTeachers,
} from "../../redux/teachers/selectors";
import { useEffect, useState } from "react";
import { fetchTeachers } from "../../redux/teachers/operations";
import css from "./CardList.module.css";

export const CardList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [page, setPage] = useState(1);
  const [itemPerPage] = useState(4);

  useEffect(() => {
    dispatch(fetchTeachers({ page, itemPerPage }));
  }, [dispatch, page, itemPerPage]);
  const LoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && teachers.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
      <ul>
        {teachers.slice(0, itemPerPage * page).map((teachers) => (
          <li key={`${teachers.id}`} className={css.listItem}>
            <Card teachers={teachers} />
          </li>
        ))}
      </ul>
      {!isLoading && teachers.length >= itemPerPage * page && (
        <div className={css.btnLoadContainer}>
          <button type="button" onClick={LoadMore} className={css.btnLoad}>
            Load more
          </button>
        </div>
      )}
      {isLoading && <div className={css.loading}>Loading...</div>}
    </>
  );
};
