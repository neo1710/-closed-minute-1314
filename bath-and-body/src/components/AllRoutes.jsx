
import {Routes,Route} from 'react-router-dom';
import Body from '../components/body';
import Login from './login.jsx/login';
import SignIn from './login.jsx/signIn';
import Product from './Product.jsx/product';

export default function AllRoutes(){

    return (
      <Routes>
<Route path='/' element={<Body/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signIn' element={<SignIn/>}/>
<Route path='/products' element={<Product/>}/>
        </Routes>
    )
}