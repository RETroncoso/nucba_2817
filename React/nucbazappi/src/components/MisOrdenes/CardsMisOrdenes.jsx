import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled } from './CardMisOrdenesStyles';
import  Loader from "../UI/Loader/Loader"

const CardsMisOrdenes = () => {

  const {orders, loading, error} = useSelector(state => state.orders)


  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />
  }

  if(error) {
    return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
  }

  return (
    <MisOrdenesContainerStyled>
      {
        orders?.length ? (
          orders.map((order) => {
            return <CardMisOrdenes key={order._id} {...order} />
          })
        ) : (
          <h2>Que esperas para hacer tu primer pedido!!</h2>
        )
      }
      
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
