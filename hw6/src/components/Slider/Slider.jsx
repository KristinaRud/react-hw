import ComicsItem from "../Comics/components/ComicsItem";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import {
  actionToggleFavorite,
  actionCurrentComics,
  actionAddOrder,
} from "../../reducer";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../components/Modal/Modal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardViewContext from "../../context/CardViewContext/CardViewContext";

const Slider = ({ data }) => {
  const dispatch = useDispatch();
  const favoriteComics = useSelector((state) => state.favorite.favoriteList);
  const isModal = useSelector((state) => state.app.isModal);
  const current = useSelector((state) => state.app.currentComics);
  const { isCardView, setIsCardView } = useContext(CardViewContext);

  const tableItem = data?.map((el) => (
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
      {isCardView ? (
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          className="comics__wrapper"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 16
            },
            1020: {
              slidesPerView: 5,
              spaceBetween: 16
            }
          }}
        >
          {sliderItem}
        </Swiper>
      ):
       (
        <div
          slidesPerView={5}
          spaceBetween={16}
          className="comics__wrapper"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {tableItem}
        </div>
      )}
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
};
export default Slider;
