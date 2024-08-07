import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie"
import './App.css';

const tg = window.Telegram.WebApp

function App() {
  
  const [isCook, setCook] = useState('')

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  const cookSm = () => {
    Cookies.set('test', 'works')
    setCook(Cookies.get('test')!)
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
