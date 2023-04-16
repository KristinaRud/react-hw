import { Link } from "react-router-dom";
import ComicsItem from "../../components/Comics/components/ComicsItem";
import "./FavoriteItems.scss";
import {useSelector, useDispatch } from "react-redux";
import Slider from "../../components/Slider/Slider";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FavoriteItems = ({
  currentComics,
}) => {
  const favoriteComics = useSelector((state) => state.favorite.favoriteList);
  // const isModal=useSelector((state)=>state.app.isModal);
  // const dispatch=useDispatch();
  
  return (
    <>
      <Link to="/"><HomeIcon sx={{ color: "black" }} /><ArrowBackIcon sx={{ color: "black" }} /></Link>
      <h1>FavoriteItems</h1>
      <Slider data={favoriteComics}/>      
    </>
  );
};
export default FavoriteItems;
