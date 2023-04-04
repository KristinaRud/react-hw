import { Component } from "react";
import Button from "../../Button/Button";
import PropTypes from "prop-types";

export default class ComicsItem extends Component {
  render() {
    const {
      src,
      alt,
      title,
      creators,
      price,
      isModal,
      isFavorite,
      currentComics,
      addToFavorites,
    } = this.props;
    return (
      <>
        <div className="row-item-image">
          <a href="#" className="row-item-image-url">
            <img src={src} alt={alt} title={title} />
          </a>
        </div>

        <div className="row-item-text">
          <h5 className="meta-title">
            <a
              className="meta-title ellipsis"
              href="//www.marvel.com/comics/issue/24822/amazing_spider-man_presents_anti-venom_-_new_ways_to_live_2009_2"
            >
              {title}
            </a>
          </h5>
          <p className="meta-creators">{creators}</p>
        </div>
        <div
          className="count"
          onClick={() => {
            addToFavorites();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 32 32"
          >
            <path
              fill={isFavorite ? "#e62429" : undefined}
              d="M16.2 8.1c-.2.1-.3.1-.4 0-4-5.7-11.6-1.7-11.6 3.8 0 4.8 6.1 8.7 11 14.1 0 0 0 .1.1.1.4.4 1 .3 1.4-.1 4.9-5.4 11-9.2 11-14.1.1-5.5-7.2-9.5-11.5-3.8z"
            />
          </svg>
        </div>
        <div className="price-item">
          <h5 className="price">${price}</h5>
          <Button
            onClick={() => {
              isModal();
              currentComics();
            }}
            text="Add to cart"
          />
        </div>
      </>
    );
  }
}

ComicsItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  creators: PropTypes.string,
  price: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  isModal: PropTypes.func.isRequired,
  currentComics: PropTypes.func.isRequired,
};

ComicsItem.defaultProps = {
  src: "https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=400%2C400&ssl=1",
  alt: "alt",
  title: "title",
  creators: "no creators",
  price: "0",
};
