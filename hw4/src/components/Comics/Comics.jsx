import "./Comics.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchSliderComics,actionSetFavorite, actionSetOrder  } from "../../reducer";
import Slider from "../Slider/Slider";

const Comics = () => {
  const dispatch = useDispatch();
  const dataComics = useSelector((state) => state.comics.slider);
  const loading = useSelector((state) => state.comics.isLoading);

  useEffect(() => {
    dispatch(actionFetchSliderComics());
    if (localStorage.getItem(`arrFavorite`)) {
      dispatch(
        actionSetFavorite(JSON.parse(localStorage.getItem(`arrFavorite`)))
      );
    }

    if (localStorage.getItem(`arrOrder`)) {
      dispatch(actionSetOrder(JSON.parse(localStorage.getItem(`arrOrder`))));
    }
  }, []);

  return (
    <>
      <div className="films__title">
        <h2 className="module-header">Best Selling Digital Comics </h2>
      </div>
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <div className="films__slider">
          <Slider data={dataComics} />
        </div>
      )}
    </>
  );
};

export default Comics;
