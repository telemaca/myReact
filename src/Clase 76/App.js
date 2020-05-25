import React, { useState } from "react";

// Crear un component Form que
// renderice algunos inputs (3 o 4) y un button que diga "Enviar"
// al apretar enviar, debe chequear que los inputs no estén vacíos
// si alguno está vacío, debe mostrar un mensaje que diga "Por favor, complete todos los campos"
// si ninguno está vacío, debe mostrar un mensaje que diga "Gracias por completar el formulario, sus datos han sido guardados" y debe vaciar todos los campos

const Form = () => {
  const [valor, setValor] = useState({
    valor1: "",
    valor2: "",
    valor3: "",
    valor4: "",
  });
  const [mensaje, setmensaje] = useState("Complete el formulario");

  const handleChange = (event) => {
    const valorTemp = event.target.value;
    setValor({
      ...valor,
      [event.target.name]: valorTemp,
    });
  };

  const validarInputs = () => {
    if (
      valor.valor1 === "" ||
      valor.valor2 === "" ||
      valor.valor3 === "" ||
      valor.valor4 === ""
    ) {
      setmensaje("Por favor, complete todos los campos");
    } else {
      setmensaje(
        "Gracias por completar el formulario, sus datos han sido guardados"
      );
      setValor({ valor1: "", valor2: "", valor3: "", valor4: "" });
    }
  };

  return (
    <>
      <input name="valor1" value={valor.valor1} onChange={handleChange} />
      <input name="valor2" value={valor.valor2} onChange={handleChange} />
      <input name="valor3" value={valor.valor3} onChange={handleChange} />
      <input name="valor4" value={valor.valor4} onChange={handleChange} />
      <button onClick={validarInputs}>Enviar</button>
      <p>{mensaje}</p>
    </>
  );
};

// CurrencyConverter
// Crear un componente CurrencyConverter que

// renderice dos inputs de número con sus labels, uno representando la moneda en pesos y otro la moneda en dólares
// cuando se escriba algo en cualquiera de los inputs, el otro debe actualizar automáticamente a medida que se va escribiendo. Por ejemplo, si ingreso 1 en el input de dolares, el de pesos se debe actualizar a 65, y si ingreso 130 en el de pesos, el de dolares se debe actualizar a 2
// EXTRA: agregar props para definir las monedas y el valor de cambio

const CurrencyConverter = () => {
  const [valor, setValor] = useState({ pesos: 0, dolares: 0 });

  const convert = (event) => {
    const valorNuevo = event.target.value;
    const keyValor = event.target.name === "pesos" ? "dolares" : "pesos";
    const conversion = keyValor === "pesos" ? valorNuevo * 67 : valorNuevo / 67;
    setValor({
      [keyValor]: conversion,
      [event.target.name]: valorNuevo,
    });
  };

  return (
    <>
      <label>Peso</label>
      <input name="pesos" onChange={convert} value={valor.pesos} />
      <label>Dólar</label>
      <input name="dolares" onChange={convert} value={valor.dolares} />
    </>
  );
};

//SearchList
// Crear un componente SearchList que

// renderice un input y una lista (ul con li)
// tome la prop items, que es un array de strings
// renderice cada item como li dentro del ul
// a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
// la lista al realizar la búsqueda debe mostrarse ordenada alfabéticamente
// cuando el input está vacío, debe mostrar la lista normal con todos los ítems
// EXTRA: si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: javascript

const palabras = ["java", "justo", "javascript", "jabón", "joven"];

const SearchList = ({ items }) => {
  const [words, setWords] = useState(palabras);

  const searchWord = (event) => {
    const searchedWord = event.target.value;
    const substrings = items.filter(
      (item) => item.indexOf(searchedWord) !== -1
    );
    const boldface = substrings.map((substring) => (
      <span>
        <b>{searchedWord}</b>
        {substring.substring(searchedWord.length)}
      </span>
    ));
    setWords([...boldface].sort());
  };

  return (
    <>
      <input onChange={searchWord}></input>
      <ul style={{ listStyle: "none" }}>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  );
};

// Crear un componente EditableText que

// renderice un elemento p con texto
// toma una prop defaultValue
// el texto inicial del elemento p debe ser el de defaultValue tener un color gris
// cuando se hace click en el texto, se debe reemplazar el texto por un input, el input debe tener como placeholder el valor de defaultValue
// cuando se escribe algo en el input y se apreta enter, se debe reemplazar el input por el elemento p con el texto ingresado
// cuando se clickea nuevamente en el elemento p, el input debe mantener como valor el texto de p (el ingresado anteriormente)
// si se deja el input vacío, p debe mostrar como texto defaultValue

const EditableText = ({ defaultValue }) => {
  const [editing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(defaultValue);

  const changeText = () => setIsEditing(true);

  const updateText = (event) => setNewText(event.target.value);

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      defaultValue = newText;
      setIsEditing(false);
    }
  };

  return !editing ? (
    <p style={{ color: "grey", margin: 0 }} onClick={changeText}>
      {newText}
    </p>
  ) : (
    <input
      placeholder={newText}
      onChange={updateText}
      onKeyPress={handleKeyPress}
    />
  );
};

// Crear un componente EditableList que

// renderice un input y una lista (ul con li)
// cuando se escriba algo en el input y se aprete enter, se debe agregar un li al ul con el texto ingresado
// al apretar enter el input debe vaciarse
// si se hace click en un li, este debe eliminarse de la lista

const EditableList = () => {
  const [newText, setNewText] = useState("");
  const [items, setItems] = useState([]);

  const updateText = (event) => setNewText(event.target.value);

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setItems([...items, newText]);
      event.target.value = "";
    }
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <input onChange={updateText} onKeyPress={handleKeyPress}></input>
      <ul>
        {items.map((item, index) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => deleteItem(index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

// Crear un componente ## ScoreBoard que renderice un input y una lista de PlayerScore que

// al escribir algo en el input y apretar "enter", agregue un nuevo PlayerScore a la lista
// si el input está vacío, no debe agregar nada
// cuando se apreta "enter", el input debe vaciarse
// PlayerScore contiene la prop player que toma un string, y se llena con el valor ingresado en el input
// PlayerScore renderiza un elemento p para mostrar el nombre (contenido en la prop player), un elemento p para mostrar el puntaje (que comienza en 0) y dos botones, uno para incrementar el puntaje y otro para disminuirlo
// Ejemplo

// [Ingrese un nuevo nombre...]

// Jeff    100 puntos    [+][-]
// Britta  50 puntos     [+][-]
// Abed    500 puntos    [+][-]
// Troy    200 puntos    [+][-]
// Annie   250 puntos    [+][-]
// Shirley 400 puntos    [+][-]
// Pierce  20 puntos     [+][-]

const PlayerScore = ({ player }) => {
  const [score, setScore] = useState(0);

  const changeScore = (operation) => {
    operation === "add" ? setScore(score + 1) : setScore(score - 1);
  };

  return (
    <li
      style={{ display: "flex", width: 300, justifyContent: "space-between" }}
    >
      <p style={{ margin: 0 }}>{player}</p>
      <p style={{ margin: 0 }}>{score} puntos</p>
      <div>
        <button onClick={() => changeScore("add")}>+</button>
        <button onClick={() => changeScore()}>-</button>
      </div>
    </li>
  );
};

const ScoreBoard = () => {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);

  const updateNewPlayer = (event) => setName(event.target.value);

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      setPlayers([...players, name]);
      event.target.value = "";
    }
  };

  return (
    <>
      <input
        placeholder="Ingrese un nuevo nombre..."
        onChange={updateNewPlayer}
        onKeyPress={handleKeyPress}
      ></input>
      <ul>
        {players.map((player) => (
          <PlayerScore player={player} />
        ))}
      </ul>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ScoreBoard />
    </div>
  );
}

export default App;
