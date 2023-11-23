import React, { useState } from 'react'
import { createElement } from './utils.js'
import './styles.css'

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list
  // --------------------
  // const [activeElementId, setActiveElementId] = useState(null)
  // const handleElementClick = (code) => {
  //   setActiveElementId(code);
  // };
  // const elements = [
  //   { code: 1, title: 'Элемент 1' },
  //   { code: 2, title: 'Элемент 2' },
  //   { code: 3, title: 'Элемент 3' },
  // ]
  //--------------------
  return (
    <div className='App'>
      {/* //-------------------- */}
      {/* <div>
        {elements.map((element) => (
          <div
            key={element.code}
            onClick={() => handleElementClick(element.code)}
            style={{
              backgroundColor:
                element.code === activeElementId ? 'blue' : 'initial',
              color: element.code === activeElementId ? 'white' : 'initial',
            }}
          >
            {element.title}
          </div>
        ))}
      </div> */}
      {/* //-------------------- */}
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>
          {list.map((item) => (
            <div key={item.code} className='List-item'>
              <div
                className={'Item' + (item.selected ? ' Item_selected' : '')}
                // onClick={() => handleElementClick.store.selectItem(item.code)}
                onClick={() => store.selectItem(item.code)}
              >
                <div className='Item-code'>{item.code}</div>
                <div className='Item-title'>{item.title}</div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
