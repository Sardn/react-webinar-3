import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Controls({ sumCard, onModalOpen }) {
  return (
    <div className="Controls">
      {sumCard ? (
        <div>
          В корзине:&nbsp;&nbsp;&nbsp;
          <span className="Controls-total">
            {sumCard.sum} / {sumCard.total} p
          </span>
        </div>
      ) : (
        <div>
          В корзине:&nbsp;&nbsp;&nbsp;
          <span className="Controls-total">пусто</span>
        </div>
      )}
      <button className="Controls-button" onClick={() => onModalOpen()}>
        Перейти
      </button>
    </div>
  );
}

Controls.propTypes = {
  onModalOpen: PropTypes.func,
};

Controls.defaultProps = {
  onModalOpen: () => {},
};

export default React.memo(Controls);
