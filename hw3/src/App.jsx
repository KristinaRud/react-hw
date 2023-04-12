import { useEffect, useState } from "react";
import Comics from "./components/Comics/Comics";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

import "./styles/styles.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderBasket from "./pages/OrderBasket/OrderBasket";
import NotPage from "./pages/NotPage/NotPage";
import FavoriteItems from "./pages/FavoriteItems/FavoriteItems";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentComics, setCurrentComics] = useState({});
  const [favoriteComics, setFavoriteComics] = useState([]);
  const [orderComics, setOrderComics] = useState([]);
  const [valueInput, setValueInput] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem(`arrFavorite`)) {
      setFavoriteComics(JSON.parse(localStorage.getItem(`arrFavorite`)));
      // this.setState({
      //   favoriteComics: JSON.parse(localStorage.getItem(`arrFavorite`)),
      // });
    }

    if (localStorage.getItem(`arrOrder`)) {
      setOrderComics(JSON.parse(localStorage.getItem(`arrOrder`)));
      // this.setState({
      //   orderComics: JSON.parse(localStorage.getItem(`arrOrder`)),
      // });
    }
  }, []);

  const handlerToggleModal = () => {
    setIsModal(!isModal);
    // this.setState((prev) => {
    //   return { ...prev, isModal: !prev.isModal };
    // });
  };

  const handlerCurrentComics = (currentComics) => {
    console.log("cur", currentComics);
    setCurrentComics({ ...currentComics });
    // this.setState((prev) => {
    //   return { ...prev, currentComics: { ...currentComics } };
    // });
  };

  const handlerFavorites = (favorite) => {
    setFavoriteComics((current) => {
      const favorList = [...current];
      const index = favorList.findIndex((el) => el.id === favorite.id);
      if (index === -1) {
        favorList.push(favorite);
      } else {
        favorList.splice(index, 1);
      }
      localStorage.setItem(`arrFavorite`, JSON.stringify(favorList));
      return favorList;
    });
  };

  const isFavorite = (comics) => {
    const favor = favoriteComics.filter((el) => el.id === comics);
    return !!favor.length;
  };

  const handlerOrder = (order) => {
    setOrderComics((current) => {
      const orders = [...current];

      const index = orders.findIndex((el) => el.id === order.id);
      if (index === -1) {
        orders.push({ ...order, count: 1 });
      } else {
        orders[index].count += 1;
      }
      localStorage.setItem("arrOrder", JSON.stringify(orders));
      return orders;
    });
  };

  const handlerDeleteOrderItem = (order) => {
    setOrderComics((current) => {
      const orderList = [...current];
      const index = orderList.findIndex((el) => el.id === order.id);
      if (index !== -1) {
        orderList.splice(index, 1);
      }
      localStorage.setItem(`arrOrder`, JSON.stringify(orderList));
      return orderList;
    });
  };

  const handlerValue = (event) => {
    const target = event.target;
    console.log(target.value);
    setValueInput(target.value);
  };

  const handlerInrement = (order) => {
    console.log("incr", order);
    setOrderComics((current) => {
      const orders = [...current];
      const index = orders.findIndex((el) => el.id === order.id);
      if (index !== -1) {
        orders[index].count += 1;
      }
      localStorage.setItem("arrOrder", JSON.stringify(orders));
      return orders;
    });
  };

  const handlerDecrement = (order) => {
    console.log("decr", order);
    setOrderComics((current) => {
      const orders = [...current];
      const index = orders.findIndex((el) => el.id === order.id);
      if (index !== -1 && orders[index].count !== 0) {
        orders[index].count -= 1;
      }
      localStorage.setItem("arrOrder", JSON.stringify(orders));
      return orders;
    });
  };

  return (
    <div className="page__wrapper">
      <Header
        countOrder={orderComics
          .map(({ count }) => count)
          .reduce((prev, curr) => prev + curr, 0)}
        countFavor={favoriteComics.length}
      />
      <main className="main">
        <div className="container">
          <Routes>
            <Route
              path={"/"}
              element={
                <Comics
                  isModal={handlerToggleModal}
                  currentComics={handlerCurrentComics}
                  handlerFavorites={handlerFavorites}
                  favoriteList={favoriteComics}
                  isFavorite={isFavorite}
                />
              }
            />
            <Route
              path={"/basket"}
              element={
                <OrderBasket
                  handlerToggleModal={handlerToggleModal}
                  value={valueInput}
                  changedValue={handlerValue}
                  current={handlerCurrentComics}
                  orderComics={orderComics}
                  handlerInrement={handlerInrement}
                  handlerDecrement={handlerDecrement}
                  // handlerDeleteOrderItem={handlerDeleteOrderItem}
                />
              }
            />
            <Route
              path={"/favorite"}
              element={
                <FavoriteItems
                  isModal={handlerToggleModal}
                  favoriteList={favoriteComics}
                  currentComics={handlerCurrentComics}
                  handlerFavorites={handlerFavorites}
                  isFavorite={isFavorite}
                />
              }
            />
            <Route path={"*"} element={<NotPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
      {isModal &&
        (location.pathname === "/basket" ? (
          <Modal
            modalTitle={
              <div className="modal-title">
                <h2>Do you want to delete item?</h2>
              </div>
            }
            closeModal={handlerToggleModal}
            content={currentComics}
            buttonContent={"Delete"}
            handlerModal={() => {
              handlerDeleteOrderItem(currentComics);
            }}
          />
        ) : (
          <Modal
            modalTitle={""}
            closeModal={handlerToggleModal}
            content={currentComics}
            buttonContent={""}
            handlerModal={() => {
              handlerOrder(currentComics);
            }}
          />
        ))}
    </div>
  );
};

export default App;
