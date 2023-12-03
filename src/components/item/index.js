import React from "react";
import PropTypes from "prop-types";
import './style.css';

function Item({item, addItemCart}) {

  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <div className='Item-price'>{item.price} p</div>
      <button className='Item-button' onClick={addItemCart}>
        Добавить
      </button>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItemCart: PropTypes.func,
};

Item.defaultProps = {
  addItemCart: () => {}
}

export default React.memo(Item);
