import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Covid from './components/covid/Covid';
import Navbar from './components/navbar/Navbar';
function App(props) {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Navbar/>}>
      <Route path="/covid" element={<Covid />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
