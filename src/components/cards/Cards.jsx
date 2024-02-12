import axios from "axios";
import { useEffect, useState } from "react";
import scss from "./Cards.module.scss"
const url = "https://rickandmortyapi.com/api/character";
const Cards = () => {
  const [toto, setToto] = useState([]);
  const get = async () => {
    const response = await axios.get(url);
    setToto(response.data.results);
  };
  useEffect(() => {
    get();
  }, []);
  const find = (status) => {
    return status.toLowerCase() === "alive"
      ? scss.greenText
      : status.toLowerCase() === "dead"
      ? scss.redText
      : status.toLowerCase() === "unknown"
      ? scss.unknownText
      : "";
  };
  return (
    <div className={scss.cards}>
      {toto.map((item, index) => (
        <div className={scss.card} key={index}>
          <div>
            <img src={item.image} alt="image" />
          </div>
          <div>
            <h4>{item.name}</h4>
            <div className={scss.text}>
              <p className={find(item.status)}>{item.status}</p>
              <p> - {item.species}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards;