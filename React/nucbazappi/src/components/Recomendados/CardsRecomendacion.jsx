// import { recommended } from "../../data/Recommended";
import CardRecomendacion from "./CardRecomendacion";
import { CardsContainer } from "./CardsRecomendacionStyled";
import {useSelector} from "react-redux"

const CardsRecomendacion = () => {

  const {recommended} = useSelector((state) => state.recommended);

  return (
    <CardsContainer gridLength={recommended.length}>
      {
        recommended.map((recomendado) => {
          return <CardRecomendacion key={recomendado.id} {...recomendado} />
        })
      }
    </CardsContainer>
  );
};

export default CardsRecomendacion;
