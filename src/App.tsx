import React, { useEffect } from 'react';;
import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <div>
      Hello
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
