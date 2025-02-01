import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaTimes, FaEdit, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetProductsQuery } from '../../slices/productsApiSlice';

const ProductListScreen = () => {
    const { data: product, isLoading, error } = useGetProductsQuery();

    console.log(product);

    return (
        <div>ProductListScreen</div>
    );
};
export default ProductListScreen;