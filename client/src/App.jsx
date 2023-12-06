
import {Route,Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import {  UserContextProvider } from "./UserContext.jsx";
import CartPage from "./pages/CartPage.jsx"
import CheckoutPage from "./pages/CheckOutpage.jsx"
import ProductCatalogPage from "./components/ProductCatalogPage.jsx"

axios.defaults.baseURL = "http://localhost:9000";


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/product/:id" component={ProductCatalogPage} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

