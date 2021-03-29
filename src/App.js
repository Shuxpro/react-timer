import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date(0));
  let intervalRef = useRef();

  const tick = () => setTime((prev) => {
    prev.setUTCMilliseconds(prev.getUTCMilliseconds() + 10)

    return prev;
  });

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startWatch = () => {
    intervalRef.current = setInterval(tick, 10);
  }

  const pauseWatch = () => {
    clearInterval(intervalRef.current);
  }

  const resetWatch = () => {
    clearInterval(intervalRef.current);
    setTime(new Date(0));
  }

  const getTime = () =>
    ('0' + time.getUTCHours()).slice(-2) + ':' +
    ('0' + time.getUTCMinutes()).slice(-2) + ':' +
    ('0' + time.getUTCSeconds()).slice(-2) + ':' +
    ('0' + time.getUTCMilliseconds()).slice(-3, -1);

  return (
    <div className="main center">
      <div className="container center">
            <h1>Veselyi Secundomer</h1>
            <div className="watch">
                <h2>{getTime()}</h2>
            </div>
            <div className="buttons">
                 <button onClick={startWatch}>Старт</button>
                 <button onClick={pauseWatch}>Пауза</button>
                 <button onClick={resetWatch}>Обнулить</button>
            </div>
      </div>
    </div>
  );
}

export default App;
