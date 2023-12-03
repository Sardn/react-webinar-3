import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Card({ item, onDeleteItem }) {
  return (
    <div className="Card">
      <div className="Card-num">{item.code}</div>
      <div className="Card-title">{item.title}</div>
      <div className="Card-prices">{item.price} p</div>
      <div className="Card-sum">{item.value} шт</div>
      <button className="Card-btn" onClick={onDeleteItem}>
        Удалить
      </button>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
  onDeleteItem: PropTypes.func,
};

Card.defaultProps = {
  onDeleteItem: () => {},
};

export default React.memo(Card);
