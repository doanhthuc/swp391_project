import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './app.css';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './components/productList/ProductList';
import Product from './components/product/Product';
import NewProduct from './components/newProduct/NewProduct';
import Login from './pages/login/Login';

function App() {
    return (
        <Router>
            <Topbar />
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <div className='container'>
                    <Sidebar />
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/products'>
                        <ProductList />
                    </Route>
                    <Route path='/product/:id'>
                        <Product />
                    </Route>
                    <Route path='/newproduct'>
                        <NewProduct />
                    </Route>
                    <Route path='/users'>
                        <UserList />
                    </Route>
                    <Route path='/user/:userId'>
                        <User />
                    </Route>
                    <Route path='/newUser'>
                        <NewUser />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
