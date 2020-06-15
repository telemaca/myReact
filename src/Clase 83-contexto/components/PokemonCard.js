import React from "react";
import useAppContext from "../contexts/AppContext";
import styles from "./pokemonCard.module.scss";

const LANGUAGES = {
  Español: "Tipos:",
  English: "Types:",
};

const PokemonCard = ({ name, number, img, types }) => {
  const { language } = useAppContext();
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <p>{number}</p>
      <div className={styles.imgBackground}>
        <img src={img} alt="" />
      </div>
      <h4>{LANGUAGES[language]}</h4>
      <div className={styles.types}>
        {types.map((type, index) => (
          <span key={index}>{type} </span>
        ))}
      </div>
    </article>
  );
};

export default PokemonCard;
