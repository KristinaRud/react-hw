import "./Comics.scss";
import {useSelector} from "react-redux";
import {useCallback, useContext, useState} from "react";
import Slider from "../Slider/Slider";
import CardViewContext from "../../context/CardViewContext/CardViewContext";
import Switch from "@material-ui/core/Switch";
import Grid from '@material-ui/core/Grid';

const Comics = () => {
  const dataComics = useSelector((state) => state.comics.slider);
  const loading = useSelector((state) => state.comics.isLoading);

  const { isCardView, setIsCardView } = useContext(CardViewContext);
  const [state, setState] = useState({ checkedA: true });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setIsCardView(!isCardView);
  };

  return (
    <>
      <div className="comics__title">
        <h2 className="module-header">Best Selling Digital Comics </h2>
        <span className="switch-container">
          <p className="switch-title">Table</p>
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          <p className="switch-title">Slider</p>
        </span>
        
      </div>
      {loading && <h3>Loading...</h3>}
      {!loading && (
        <div className="comics__slider">
          <Slider data={dataComics} />
        </div>
      )}
    </>
  );
};

export default Comics;
