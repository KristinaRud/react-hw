import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import cx from 'classnames';

import "./OrderBasket.scss";
import OrderItem from "./components/OrderItem/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { actionIncrementCount, actionDecrementCount } from "../../reducer";

const OrderBasket = ({ handlerToggleModal, changedValue, current, handlerDeleteOrderItem }) => {
  const dispatch = useDispatch();
  const orderComics = useSelector((state) => state.order.orderList);

  const totalPrice = (orderComics?.map(el => el.count * el.price)).reduce((prev, curr) => prev + curr, 0).toFixed(2);
  const orderCards = orderComics?.map((el) => (
    <div className="order-basket-item" key={el.id}>
      <OrderItem
        handlerDecrement={() => dispatch(actionDecrementCount(el))}
        handlerInrement={() => dispatch(actionIncrementCount(el))}
        handlerDeleteOrderItem={() => { handlerDeleteOrderItem(el) }}
        isModal={handlerToggleModal}
        count={el.count}
        changedValue={changedValue}
        src={el.img?.url + el.img?.portrait_uncanny}
        alt={el.title}
        title={el.title}
        price={(el.count * el.price).toFixed(2)}
        current={() => {
          current(el);
        }}
      />
    </div>
  ));
  console.log(orderCards);

  return (
    <>
      <Link to="/"><HomeIcon sx={{ color: "black" }} /><ArrowBackIcon sx={{ color: "black" }} /></Link>
      <div className="header-order">
        <h1>OrderBasket</h1>
        <h1>Total: {totalPrice && (<span className="total-price">${totalPrice}</span>)}</h1>
      </div>

      <div className={cx({ "order-container": (orderCards.length > 2) })}>
        {(orderCards.length === 0) ? <h1>No item in your basket</h1> : orderCards}
      </div>

    </>
  );
};

export default OrderBasket;
