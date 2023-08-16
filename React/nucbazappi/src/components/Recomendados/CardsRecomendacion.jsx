import { recommended } from "../../data/Recommended";
import CardRecomendacion from "./CardRecomendacion";

import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {
        recommended.map((recomendado) => {
          return <CardRecomendacion key={recomendado.id} {...recomendado} />
        })
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
