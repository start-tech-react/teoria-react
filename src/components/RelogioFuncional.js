import { useEffect, useState } from "react";

function RelogioFuncional(props) {
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    console.log('RelogioFuncional apareceu...');
    const intervalID = setInterval(
      () => tick(),
      1000
    );

    return function cleanup() {
      console.log('RelogioFuncional sumiu...');
      clearInterval(intervalID);
    }
  }, []);

  const tick = () => {
    setDate(new Date().toLocaleString());
  }

  console.log('RelogioFuncional atualizou...');
  console.log('RelogioFuncional renderizando');

  return (
    <p className="App-clock">
      Hora certa (Funcional): {date}.
    </p>
  );
}

export default RelogioFuncional;