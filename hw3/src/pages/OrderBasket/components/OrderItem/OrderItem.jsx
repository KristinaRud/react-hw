import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const OrderItem = ({
  isModal,
  handlerDecrement,
  handlerInrement,
  changedValue,
  current,
  src,
  alt,
  title,
  price,
  count,
}) => {
  return (
    <>
      <div className="row-item-text title-order">
        <h3 className="order-title">
          <a className="order-title ellipsis" href="#">
            {title}
          </a>
        </h3>
        <button
          type="button"
          className="btn-changed-count"
          onClick={() => {
            isModal();
            current();
          }}
        >
          <DeleteOutlineOutlinedIcon sx={{ color: "#e62429" }} />
        </button>
      </div>
      <div className="card-order">
        <div className="row-item-image order-item">
          <a href="#" className="row-item-image-url">
            <img src={src} alt={alt} title={title} />
          </a>
        </div>
        <div className="count-product">
          <button
            type="button"
            className="btn-changed-count"
            onClick={handlerDecrement}
          >
            <RemoveIcon />
          </button>
          <input
            value={count}
            onChange={changedValue}
            data-testid="cart-counter-input"
            className="cart-counter__input ng-pristine ng-valid ng-touched"
          ></input>
          <button
            type="button"
            className="btn-changed-count"
            onClick={handlerInrement}
          >
            <AddIcon />
          </button>
        </div>
        <div className="price-item">
          <h1 className="price">${price}</h1>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
