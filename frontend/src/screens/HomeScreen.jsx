import { Col, Row } from 'react-bootstrap';
import building from '../assets/building.svg';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
        <h1><img src={building} alt='bldg' className='building_img' />Latest Products</h1>
        <Row>
         {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <h3>{product.name}</h3>
            </Col>
         ))}
        </Row>
    </>
  )
}
export default HomeScreen