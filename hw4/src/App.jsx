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
import { useDispatch, useSelector } from "react-redux";
import { actionSetFavorite, actionSetOrder, actionAddOrder, actionDeleteOrderItem } from "./reducer";

const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [currentComics, setCurrentComics] = useState({});

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(`arrFavorite`)) {
      dispatch(actionSetFavorite(JSON.parse(localStorage.getItem(`arrFavorite`))));
    }

    if (localStorage.getItem(`arrOrder`)) {
      dispatch(actionSetOrder(JSON.parse(localStorage.getItem(`arrOrder`))));
    }
  }, []);

  const handlerToggleModal = () => {
    setIsModal(!isModal);
  };

  const handlerCurrentComics = (currentComics) => {
    console.log("cur", currentComics);
    setCurrentComics({ ...currentComics });
  };

  return (
    <div className="page__wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route
              path={"/"}
              element={
                <Comics
                  isModal={handlerToggleModal}
                  currentComics={handlerCurrentComics}
                />
              }
            />
            <Route
              path={"/basket"}
              element={
                <OrderBasket
                  handlerToggleModal={handlerToggleModal}
                  current={handlerCurrentComics}
                />
              }
            />
            <Route
              path={"/favorite"}
              element={
                <FavoriteItems
                  isModal={handlerToggleModal}
                  currentComics={handlerCurrentComics}
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
              dispatch(actionDeleteOrderItem(currentComics));
            }}
          />
        ) : (
          <Modal
            modalTitle={""}
            closeModal={handlerToggleModal}
            content={currentComics}
            buttonContent={""}
            handlerModal={() => {
              dispatch(actionAddOrder(currentComics));
            }}
          />
        ))}
    </div>
  );
};

export default App;
