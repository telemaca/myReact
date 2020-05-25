import React, { useState } from "react";

// Hacer un componente que renderice un componente p, al que se le pueda ingresar texto, y que al clickear el texto switchee el color del mismo (p. ej.: si está en negro que pase a rojo y si está en rojo que esté en negro)

// const Texto = ({ children, onToggleColor, ...props }) => {
//   return (
//     <p onClick={onToggleColor} {...props}>
//       {children}
//     </p>
//   );
// };

// const App = () => {
//   const [color, setColor] = useState("red");

//   const toggleColor = () => {
//     const newColor = color === "red" ? "black" : "red";
//     setColor(newColor);
//   };

//   return (
//     <div>
//       <Texto style={{ color: color }} onToggleColor={toggleColor}>
//         Soy un texto
//       </Texto>
//     </div>
//   );
// };

// Hacer un componente Collapse, que tome children y una prop label. Inicialmente debe mostrar la label con algún ícono o emoji que indique que puede abrirse (+, 👉, ▶). Cuando se lo cliquea, debe renderizar el children y cambiar el ícono o emoji a algo que indique puede cerrarse (-, 👇, ▼). Al clickearlo nuevamente, debe expandirse (como un toggle). Ejemplo:

// Qué debo hacer para utilizar estado en React? (+)
// Qué debo hacer para utilizar estado en React? (-)

// Para utilizar estado en React..

// const Collapse = ({ children, label, onLabelIcon }) => {
//   return (
//     <div>
//       <h5 onClick={onLabelIcon} style={{ cursor: "pointer" }}>
//         {label}
//       </h5>
//       {children}
//     </div>
//   );
// };

// const App = () => {
//   const [icon, setIcon] = useState("▶");

//   const toggleText = () => {
//     const newIcon = icon === "▶" ? "▼" : "▶";
//     setIcon(newIcon);
//   };

//   return (
//     <Collapse
//       onLabelIcon={toggleText}
//       label={`¿Qué debo hacer para utilizar estado en React? ` + icon}
//     >
//       {icon === "▼" && <p>Para utilizar estado en React..</p>}
//     </Collapse>
//   );
// };

// Crear una miniapp que tenga varios botones con distintos precios ($50, $100, etc). Al hacer click en un botón, se debe agregar el gasto a una lista de precios, y se debe mostrar la suma total de los precios, p. ej.

// const List = ({ children }) => {
//   return <ul style={{ listStyle: "none" }}>{children}</ul>;
// };

// const App = () => {
//   const [precios, setPrecios] = useState([]);

//   const addPrice = (nuevoPrecio) => {
//     setPrecios([...precios, nuevoPrecio]);
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={() => addPrice(10)}>+ $10</button>
//         <button onClick={() => addPrice(50)}>+ $50</button>
//         <button onClick={() => addPrice(100)}>+ $100</button>
//       </div>
//       <List>
//         {precios.map((precio) => (
//           <li>{`$${precio}`}</li>
//         ))}
//       </List>
//       {precios.length > 0 && (
//         <p>{`$${precios.reduce((total, valor) => total + valor)}`}</p>
//       )}
//     </div>
//   );
// };

// Crear una miniapp que tenga varios botones con distintos valores (1, 10, 100, etc) y dos botones extra: Sumar y Restar. Se debe mostrar un botón que se debe ir actualizando si se apreta sumar o restar. El valor que se debe sumar o restar es el valor seleccionado en los botones, por ejemplo, si clickeo 1, al apretar sumar debe sumar 1, si luego clickeo 10, al clickear restar debe restar 10, etc.

const App = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <div>
        <button>1</button>
        <button>10</button>
        <button>100</button>
      </div>
      <div>
        <button>Sumar</button>
        <button>Restar</button>
      </div>
      <button>{}</button>
    </div>
  );
};

export default App;
