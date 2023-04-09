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
  };

  componentDidMount = () => {
    if (localStorage.getItem(`arrFavorite`)) {
      this.setState({
        favoriteComics: JSON.parse(localStorage.getItem(`arrFavorite`)),
      });
    }
    if (localStorage.getItem(`arrOrder`)) {
      this.setState({
        orderComics: JSON.parse(localStorage.getItem(`arrOrder`)),
      });
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
      this.setState((prev) => {
        return {
          ...prev,
          favoriteComics: [...prev.favoriteComics, favorite],
        };
      });
    } else {
      console.log(
        this.state.favoriteComics.findIndex(
          (element) => element.id === favorite.id
        )
      );
      comicsFavorList = this.state.favoriteComics.filter((element) => element.id !== favorite.id);
      localStorage.setItem(`arrFavorite`, JSON.stringify(comicsFavorList));
      this.setState((prev) => {
        return {
          ...prev,
          favoriteComics: comicsFavorList,
        };
      });
    }
  };

  isFavorite = (comics) => {
    const favor = this.state.favoriteComics.filter((el) => el.id === comics);
    return !!favor.length;
  };

  handlerOrder = (order) => {
    const orderList = [...this.state.orderComics, order];
    localStorage.setItem(`arrOrder`, JSON.stringify(orderList));
    this.setState((prev) => {
      return {
        ...prev,
        orderComics: [...prev.orderComics, order],
      };
    });
  };

  render() {
    const { currentComics, orderComics, favoriteComics } =
      this.state;
    return (
      <div className="page__wrapper">
        <Header countOrder={orderComics.length} countFavor={favoriteComics.length} />
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
            content={currentComics}
            handlerModal={() => this.handlerOrder(currentComics)}
          />
        )}
      </div>
    );
  }
}