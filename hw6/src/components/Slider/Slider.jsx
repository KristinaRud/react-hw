import ComicsItem from "../Comics/components/ComicsItem";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {useContext, useState} from "react";
import {actionToggleFavorite, actionCurrentComics, actionAddOrder} from "../../reducer";
import {Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../components/Modal/Modal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardViewContext from "../../context/CardViewContext/CardViewContext";
import CardViewContextProvider from "../../context/CardViewContext/CardViewProviderContext";
import Switch from '@material-ui/core/Switch';

const Slider = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteComics = useSelector((state) => state.favorite.favoriteList);
  const isModal = useSelector((state) => state.app.isModal);
  const current = useSelector((state) => state.app.currentComics);
  const {isCardView, setIsCardView} = useContext(CardViewContext);
  console.log(setIsCardView);

  const [state, setState] = useState({checkedA: true});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setIsCardView((prev)=>!prev);
  };

  if (!isCardView) {
    const sliderItem = data?.map((el) => (
      <div key={el.id} className="table-item">
        <ComicsItem
          src={el.img.url + el.img.portrait_uncanny}
          alt={el.title}
          title={el.title}
          creators={el.creators}
          price={el.price}
          isFavorite={favoriteComics?.some((item) => item.id === el.id)}
          currentComics={() => {
            dispatch(actionCurrentComics(el));
          }}
          addToFavorites={() => dispatch(actionToggleFavorite(el))}
        />
      </div>
    ));
    return (
      <>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div
          slidesPerView={5}
          spaceBetween={16}
          className="films__wrapper"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {sliderItem}
        </div>
        {isModal && (
          <Modal
            modalTitle={<h2>Do you want to buy item?</h2>}
            buttonContent={""}
            handlerModal={() => {
              dispatch(actionAddOrder(current));
            }}
          />
        )}
      </>
    );
  }else{
    const sliderItem = data?.map((el) => (
      <SwiperSlide key={el.id} className="row-item comic-item">
        <ComicsItem
          src={el.img.url + el.img.portrait_uncanny}
          alt={el.title}
          title={el.title}
          creators={el.creators}
          price={el.price}
          isFavorite={favoriteComics?.some((item) => item.id === el.id)}
          currentComics={() => {
            dispatch(actionCurrentComics(el));
          }}
          addToFavorites={() => dispatch(actionToggleFavorite(el))}
        />
      </SwiperSlide>
    ));
    return (
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          className="films__wrapper"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {sliderItem}
        </Swiper>
        {isModal && (
          <Modal
            modalTitle={<h2>Do you want to buy item?</h2>}
            buttonContent={""}
            handlerModal={() => {
              dispatch(actionAddOrder(current));
            }}
          />
        )}
      </>
    );
  }
};
export default Slider;
