import { Col, Row } from 'react-bootstrap';
import building from '../assets/building.svg';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {
  const { data, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (<Message variant='danger'>{error?.data?.message || error.error}</Message>) :
        (<>
          <h1>
            <img src={building} alt='bldg' className='building_img' />
            Latest Products
          </h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
        )}
    </>
  );
};

export default HomeScreen;