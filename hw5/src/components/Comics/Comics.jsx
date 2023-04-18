import "./Comics.scss";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";

const Comics = () => {
  const dataComics = useSelector((state) => state.comics.slider);
  const loading = useSelector((state) => state.comics.isLoading);

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
