import { Card, HomeContainer, ImgContainer } from './HomeStyles';

function Home() {
  return (
    <>
      <HomeContainer>
        <div className='text'>
          <h1>Home</h1>
          <p>En esta clase vamos a aprender a usar react-router-dom</p>
        </div>
        <ImgContainer className='img'>
          <Card>
            <img
              src='https://images.unsplash.com/photo-1626025437642-0b05076ca301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80'
              alt='Imagen'
            />
            <h2>La Scaloneta</h2>
          </Card>
        </ImgContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
