import Card from "../../components/Card/Card";
import "./Fighters.css";
import { useState } from "react";

export default function Fighters() {
  const [firstSelected, setFirstSelected] = useState();
  const [cards, setCards] = useState([
    {
      id: 0,
      name: "Something here",
      attack: 5,
      health: 15,
    },
    {
      id: 1,
      name: "Something here",
      attack: 5,
      health: 15,
    },
    {
      id: 2,
      name: "Something here",
      attack: 5,
      health: 15,
    },
    {
      id: 3,
      name: "Something here",
      attack: 5,
      health: 15,
    },
  ]);

  function handleSelected(id) {
    let secondSelected = null;

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        if (!firstSelected) {
          setFirstSelected(cards[i]);
          console.log("first card selected");
        } else {
            secondSelected = cards[id];
            console.log(cards.id);
        }
        break;
      }
    }

    if (firstSelected && secondSelected) {

        const fightersArray = cards;
        fightersArray[secondSelected].health -= fightersArray[firstSelected].attack;

        setCards(fightersArray);

        setFirstSelected(null)



        /* secondSelected.health -= firstSelected.attack;
        const fightersArray = cards;
        fightersArray[secondSelected.id] = secondSelected;
        setCards(fightersArray)

        console.log(secondSelected.health)
        setFirstSelected(null); */
    }
  }

  return (
    <div className="Fighters">
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            attack={item.attack}
            health={item.health}
            handleSelected={handleSelected}
          />
        );
      })}
    </div>
  );
}