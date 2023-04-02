import { Component } from "react";
import Comics from "./components/Comics/Comics";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

import "./styles/styles.scss";

export default class App extends Component {
  state = {
    isModal: false,
    currentComics: {},
    favoriteComics: [],
    orderComics: [],
    countFavor: 0,
    countOrder: 0,
  };

  componentDidMount = () => {
    if (localStorage.getItem("counterFavorite")) {
      this.setState({ countFavor: +localStorage.getItem("counterFavorite") });
    }
    if (localStorage.getItem(`counterOrder`)) {
      this.setState({ countOrder: +localStorage.getItem(`counterOrder`) });
    }
    if (localStorage.getItem(`arrFavorite`)) {
      this.setState({
        favoriteComics: JSON.parse(localStorage.getItem(`arrFavorite`)),
      });
      console.log("local", JSON.parse(localStorage.getItem(`arrFavorite`)));
    }
    if (localStorage.getItem(`arrOrder`)) {
      this.setState({
        orderComics: JSON.parse(localStorage.getItem(`arrOrder`)),
      });
      console.log("local", JSON.parse(localStorage.getItem(`arrOrder`)));
    }
  };

  handlerToggleModal = () => {
    this.setState((prev) => {
      return { ...prev, isModal: !prev.isModal };
    });
  };

  handlerCurrentComics = (currentComics) => {
    console.log("cur", currentComics);
    this.setState((prev) => {
      return { ...prev, currentComics: { ...currentComics } };
    });
  };

  handlerFavorites = (favorite) => {
    let newFavorites = this.state.favoriteComics.find(
      (el) => el.id === favorite.id
    );
    let comicsFavorList;
    if (!newFavorites) {
      comicsFavorList = [...this.state.favoriteComics, favorite];
      localStorage.setItem(`arrFavorite`, JSON.stringify(comicsFavorList));
      localStorage.setItem(`counterFavorite`, comicsFavorList.length);
      this.setState((prev) => {
        return {
          ...prev,
          favoriteComics: [...prev.favoriteComics, favorite],
          countFavor: comicsFavorList.length,
        };
      });
    } else {
      console.log(
        this.state.favoriteComics.findIndex(
          (element) => element.id === favorite.id
        )
      );
      comicsFavorList = this.state.favoriteComics.filter((element) => element.id !== favorite.id);
	  console.log("comicsFavorList", comicsFavorList);
      localStorage.setItem(`arrFavorite`, JSON.stringify(comicsFavorList));
      localStorage.setItem(`counterFavorite`, comicsFavorList.length);
      this.setState((prev) => {
        return {
          ...prev,
          favoriteComics: comicsFavorList,
          countFavor: prev.countFavor - 1,
        };
      });
    }
  };

  isFavorite = (comics) => {
    const favor = this.state.favoriteComics.filter((el) => el.id === comics);
    return favor.length ? true : false;
  };

  handlerOrder = (order) => {
    const orderList = [...this.state.orderComics, order];
    localStorage.setItem(`arrOrder`, JSON.stringify(orderList));
    localStorage.setItem(`counterOrder`, orderList.length);
    this.setState((prev) => {
      return {
        ...prev,
        orderComics: [...prev.orderComics, order],
        countOrder: orderList.length,
      };
    });
  };

  render() {
    const { currentComics, countOrder, countFavor, favoriteComics } =
      this.state;
    return (
      <div className="page__wrapper">
        <Header countOrder={countOrder} countFavor={countFavor} />
        <main className="main">
          <div className="container">
            <Comics
              isModal={this.handlerToggleModal}
              currentComics={this.handlerCurrentComics}
              handlerFavorites={this.handlerFavorites}
              favoriteList={favoriteComics}
              isFavorite={this.isFavorite}
            />
          </div>
        </main>
        <Footer />
        {this.state.isModal && (
          <Modal
            closeModal={this.handlerToggleModal}
            title={currentComics.title}
            content={currentComics}
            handlerModal={() => this.handlerOrder(currentComics)}
          />
        )}
      </div>
    );
  }
}