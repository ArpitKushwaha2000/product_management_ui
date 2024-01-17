
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import EditProduct from './Components/EditProduct';

function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>}></Route>
      <Route path='/editProduct/:id' element={<EditProduct/>}></Route>


    </Routes>
    </>
  );
}

export default App;
