import React, { useCallback, useState, useMemo } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [modalOpen, setModalOpen] = useState(false);

  const list = store.getState().list;
  const cart = store.getState().cart;
  const sumCard = useMemo(() => getsumCard(), [cart]);

  function getsumCard() {
    if (cart.length === 0) {
      return null;
    }
    return {
      sum: cart.reduce((acc, i) => acc + i.value, 0),
      total: cart.reduce((acc, i) => acc + i.price * i.value, 0),
    };
  }

  const callbacks = {
    deleteCart: useCallback(
      (code) => {
        store.deleteItemCart(code);
      },
      [store]
    ),

    addItemCart: useCallback(
      (code) => {
        store.addItemToCart(code);
      },
      [store]
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls sumCard={sumCard} onModalOpen={() => setModalOpen(true)} />
      <Modal
        sumCard={sumCard}
        cartModalOpen={modalOpen}
        cartItems={cart}
        onModalClose={() => setModalOpen(false)}
        deleteCart={callbacks.deleteCart}
      />
      <List list={list} addItemCart={callbacks.addItemCart} />
    </PageLayout>
  );
}

export default App;
