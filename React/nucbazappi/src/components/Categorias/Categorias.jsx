import { Categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

const Categorias = () => {
  return (
    <CategoriasContainer>
      {
        Categories.map((category) => {
          return <Categoria {...category} key={category.id} />
        })
      }
    </CategoriasContainer>
  );
};

export default Categorias;
