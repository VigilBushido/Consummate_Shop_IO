import FormContainer from '../components/FormContainer';
import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const ShippingScreen = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = (e) => {
        e.prevenDefault();
        console.log('submit');
    };

    return <FormContainer>
        <h1>Shipping</h1>

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address' className='my-2'>
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>
        </Form>
    </FormContainer>;
};
export default ShippingScreen;