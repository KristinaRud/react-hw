import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "./OrderBasket.scss";
import OrderItem from "./components/OrderItem/OrderItem";

const OrderBasket = ({ handlerToggleModal, changedValue, current, handlerDecrement, handlerInrement, orderComics, handlerDeleteOrderItem }) => {
  const totalPrice=(orderComics?.map(el=>el.count*el.price)).reduce((prev, curr) => prev + curr, 0);
  const orderCards = orderComics?.map((el) => (
    <div className="order-basket-item" key={el.id}>
      <OrderItem 
      handlerDecrement={()=>{handlerDecrement(el)}}
      handlerInrement={()=>{handlerInrement(el)}}
      handlerDeleteOrderItem={()=>{handlerDeleteOrderItem(el)}}
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
      <Link to="/"><HomeIcon sx={{color:"black"}}/><ArrowBackIcon sx={{color:"black"}}/></Link>
      <div className="header-order">
        <h1>OrderBasket</h1>
        <h1>Total: {totalPrice && ( <span className="total-price">${totalPrice}</span>)}</h1>
      </div>

    {(orderCards.length===0) ? <h1>No item in your basket</h1> : orderCards}
   
    </>
  );
};

export default OrderBasket;
