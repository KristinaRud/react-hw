import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch, useSelector} from "react-redux";
import {actionModal} from "../../../../reducer";

const OrderItem = ({
  handlerDecrement,
  handlerInrement,
  current,
  src,
  alt,
  title,
  price,
  count,
}) => {
  const dispatch=useDispatch();
  const openModal = () => dispatch(actionModal(true));
  return (
    <>
      <div className="row-item-text title-order">
        <h3 className="order-title">
          <a className="order-title ellipsis" href="#">
            {title}
          </a>
        </h3>
        <span
         
          className="delete-item"
          onClick={() => {
            openModal();
            current();
          }}
        >
          <DeleteOutlineOutlinedIcon sx={{ color: "#e62429" }} />
        </span>
      </div>
      <div className="card-order">
        <div className="row-item-image order-item">
          <a href="#" className="row-item-image-url">
            <img src={src} alt={alt} title={title} />
          </a>
        </div>
        <div className="count-product">
          <span
            
            className="btn-changed-count"
            onClick={handlerDecrement}
          >
            <RemoveIcon sx={{color:"white"}}/>
          </span>
          <span>{count}</span>
          <span
            
            className="btn-changed-count"
            onClick={handlerInrement}
          >
            <AddIcon sx={{color:"white"}} />
          </span>
        </div>
        <div className="price-item price-item-order">
          <h1 className="price">${price}</h1>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
