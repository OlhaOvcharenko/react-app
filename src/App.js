import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About ';
import Favorite from './components/Favorite/Favorite';
import Error from './components/Error/Error';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/favorite" element={<Favorite />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Container>
   </main>
  );
};

export default App;