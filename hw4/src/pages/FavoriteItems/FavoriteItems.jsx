import { Link } from "react-router-dom";
import ComicsItem from "../../components/Comics/components/ComicsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./FavoriteItems.scss";

const FavoriteItems = ({
  favoriteList,
  handlerFavorites,
  isFavorite,
  isModal,
  currentComics,
}) => {
  const comicsCards = favoriteList?.map((el) => (
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
    <div>
      <h1>FavoriteItems</h1>
      {comicsCards.length === 0 ? (
        <h1>No item in your wishlist</h1>
      ) : (
        <Swiper
          slidesPerView={5}
          spaceBetween={16}
          className="films__wrapper"
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          {comicsCards}
        </Swiper>
      )}

      <Link to="/">Home page</Link>
    </div>
  );
};
export default FavoriteItems;
