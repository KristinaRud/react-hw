import ComicsItem from "../Comics/components/ComicsItem";
import { Pagination, Navigation } from "swiper";
import { useDispatch, useSelector} from "react-redux";
import { actionToggleFavorite, actionCurrentComics,actionAddOrder } from "../../reducer";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "../../components/Modal/Modal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider=({data})=>{
    const dispatch = useDispatch();
    const favoriteComics = useSelector((state) => state.favorite.favoriteList);
    const isModal=useSelector((state)=>state.app.isModal);
    const current=useSelector((state)=>state.app.currentComics);
   
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
    return(
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
        modalTitle={"Do you want to buy item?"}
        buttonContent={""}
        handlerModal={() => {
          dispatch(actionAddOrder(current));
        }}
      />
      )}
      </>
    )
}
export default Slider;