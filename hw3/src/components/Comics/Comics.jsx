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

const Comics = ({ isModal, currentComics, handlerFavorites, isFavorite }) => {
  const [dataCinema, setDataCinema] = useState([]);

  useEffect(() => {
    sendRequest(`${API_URL}`).then((results) => {
      setDataCinema([...results]);
      // this.setState({ dataCinema: results });
    });
  }, []);

  const comicsCards = dataCinema?.map((el) => (
    <SwiperSlide key={el.id} className="row-item comic-item">
      <ComicsItem
        src={el.img.url + el.img.portrait_uncanny}
        alt={el.title}
        title={el.title}
        creators={el.creators}
        price={el.price}
        isModal={isModal}
        isFavorite={isFavorite(el.id)}
        currentComics={() => {
          currentComics(el);
        }}
        addToFavorites={() => handlerFavorites(el)}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <div className="comics__title">
        <h2 className="module-header">Best Selling Digital Comics </h2>
      </div>
      <div className="comics__slider">
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          className="comics__wrapper"
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
  );
};

export default Comics;

Comics.propTypes = {
  isFavorite: PropTypes.func.isRequired,
  handlerFavorites: PropTypes.func.isRequired,
  isModal: PropTypes.func.isRequired,
  currentComics: PropTypes.func.isRequired,
};
