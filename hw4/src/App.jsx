import { useEffect, useState } from "react";
import Comics from "./components/Comics/Comics";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/styles.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import OrderBasket from "./pages/OrderBasket/OrderBasket";
import NotPage from "./pages/NotPage/NotPage";
import FavoriteItems from "./pages/FavoriteItems/FavoriteItems";
import { useDispatch, useSelector } from "react-redux";
import { actionSetFavorite, actionSetOrder } from "./reducer";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem(`arrFavorite`)) {
  //     dispatch(
  //       actionSetFavorite(JSON.parse(localStorage.getItem(`arrFavorite`)))
  //     );
  //   }

  //   if (localStorage.getItem(`arrOrder`)) {
  //     dispatch(actionSetOrder(JSON.parse(localStorage.getItem(`arrOrder`))));
  //   }
  // }, []);

  return (
    <div className="page__wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path={"/"} element={<Comics />} />
            <Route path={"/basket"} element={<OrderBasket />} />
            <Route path={"/favorite"} element={<FavoriteItems />} />
            <Route path={"*"} element={<NotPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
