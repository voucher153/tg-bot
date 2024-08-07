import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"
import './App.css';

const tg = window.Telegram.WebApp

function App() {
  
  const [isCook, setCook] = useState(Cookies.get('test'))

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
      {isCook ? <div>there's</div> : null}
    </div>
  );
}

export default App;
