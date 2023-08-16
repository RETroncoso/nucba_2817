import Categorias from "../../components/Categorias/Categorias";
import Hero from "../../components/Hero/Hero";
import CardsProductos from "../../components/Productos/CardsProductos";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";

import {
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from "./HomeStyles";

function Home() {
  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero />

      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2>Hoy te recomendamos</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      {/* Productos Section*/}
      <ProductosWrapper>
        <h2>Nuestros productos</h2>
        <CardsProductos />
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
