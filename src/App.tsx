import React, { useEffect } from 'react';
import Cookies from "js-cookie"
import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  const cookSm = () => {
    Cookies.set('test', 'works')
  }

  return (
    <div>
      Hello
      <button onClick={cookSm}>Cook</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
