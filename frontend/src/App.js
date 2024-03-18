import { Container } from 'react-bootstrap';
import chat from './assets/chat.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1><img src={chat} alt='chatimg' className='chat_img' />Welcome to the Consummate Shop IO</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App