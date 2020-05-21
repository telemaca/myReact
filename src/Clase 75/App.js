import React, { useState } from "react";

const App = () => {
  const [series, setSeries] = useState([
    "Community",
    "Peaky Blinders",
    "Game of Thrones",
  ]);

  const ordenar = () => {
    setSeries([...series].sort());
  };

  const eliminar = () => {
    const [, ...others] = series;
    setSeries(others);
    // setSeries(series.slice(1));
  };

  return (
    <div>
      <ul>
        {series.map((serie, index) => (
          <li key={index}>{serie}</li>
        ))}
      </ul>
      <button onClick={ordenar}>ORDENAR</button>
      <button onClick={eliminar}>ELIMINAR PRIMER ITEM</button>
    </div>
  );
};

// const ColorSelector = ({ color, onColorSelected }) => {
//   return <button onClick={() => onColorSelected(color)}>{color}</button>;
// };

// const COLORS = {
//   red: "firebrick",
//   blue: "lightblue",
// };

// const App = () => {
//   const [color, setColor] = useState("grey");

//   const changeColor = (newColor) => {
//     setColor(newColor);
//   };

//   return (
//     <div className="App">
//       <div>
//         <ColorSelector onColorSelected={changeColor} color="red" />
//         <ColorSelector onColorSelected={changeColor} color="blue" />
//         <ColorSelector onColorSelected={changeColor} color="green" />
//         <ColorSelector onColorSelected={changeColor} color="yellow" />
//       </div>
//       <div style={{ backgroundColor: color, width: 500, height: 500 }}></div>
//     </div>
//   );
// };

export default App;
