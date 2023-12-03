import React from "react";
import PropTypes from "prop-types";
import CartItem from "../card";
import "./style.css";

function Modal({
  sumCard,
  cartModalOpen,
  cartItems,
  onModalClose,
  deleteCart,
}) {
  return (
    <div className={`Modal ${cartModalOpen ? "Modal-open" : ""}`}>
      <div className="Modal-container">
        <div className="Modal-top">
          <h2>Корзина</h2>
          <button className="Modal-button" onClick={onModalClose}>
            Закрыть
          </button>
        </div>
        {cartItems.length !== 0 ? (
          <div className="Modal-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.code}
                item={item}
                onDeleteItem={() => deleteCart(item)}
              />
            ))}
          </div>
        ) : (
          <div className="Modal-empty">Корзина пуста</div>
        )}
        <div className="Modal-total Total">
          <p className="Modal-label">Итого</p>
          <p className="Modal-prices">
            {sumCard ? sumCard.total : 0} p
          </p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  cartModalOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
  deleteCart: PropTypes.func,
};

Modal.defaultProps = {
  onModalClose: () => {},
  deleteCart: () => {},
};

export default React.memo(Modal);
