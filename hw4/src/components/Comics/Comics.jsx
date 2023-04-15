import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sendRequest } from "../../helpers/sendRequest";
import { API_URL } from "../../configs/API";
import "./Comics.scss";
import ComicsItem from "./components/ComicsItem";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchSliderComics, actionToggleFavorite } from "../../reducer";

const Comics = ({ isModal, currentComics }) => {
  // const [dataComics, setDataComics] = useState([]);

  // useEffect(() => {
  //   sendRequest(`${API_URL}`).then((results) => {
  //     setDataComics([...results]);
  //     // this.setState({ dataCinema: results });
  //   });
  // }, []);
  const dispatch = useDispatch();
  const dataComics = useSelector((state) => state.comics.slider);
  const loading = useSelector((state) => state.comics.isLoading);
  const favoriteComics = useSelector((state) => state.favorite.favoriteList)
  console.log("state", useSelector((state) => state));

  useEffect(() => {
    dispatch(actionFetchSliderComics())
  }, [])

  const comicsCards = dataComics?.map((el) => (
    <SwiperSlide key={el.id} className="row-item comic-item">
      <ComicsItem
        src={el.img.url + el.img.portrait_uncanny}
        alt={el.title}
        title={el.title}
        creators={el.creators}
        price={el.price}
        isModal={isModal}
        isFavorite={favoriteComics?.some((item) => item.id === el.id)}
        currentComics={() => {
          currentComics(el);
        }}
        addToFavorites={() => dispatch(actionToggleFavorite(el))}
      />
    </SwiperSlide>
  ));
  return (
    <>
      {!loading && (
        <>
          <div className="films__title">
            <h2 className="module-header">Best Selling Digital Comics </h2>
          </div>
          <div className="films__slider">
            <Swiper
              slidesPerView={5}
              spaceBetween={16}
              className="films__wrapper"
              navigation={true}
              // grabCursor={false}
              // draggable={false}
              // preventClicksPropagation={true}
              // preventClicks={true}
              // scrollbar={{ draggable: false, hide: true }}
              // slideToClickedSlide={false}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
            >
              {comicsCards}
            </Swiper>
          </div>
        </>
      )

      }
    </>
  );
};

export default Comics;

Comics.propTypes = {
  isModal: PropTypes.func.isRequired,
  currentComics: PropTypes.func.isRequired,
};
