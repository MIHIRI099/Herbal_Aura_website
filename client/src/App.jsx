
import {Route,Routes} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import {  UserContextProvider } from "./UserContext.jsx";
import CartPage from "./pages/CartPage.jsx"
import CheckoutPage from "./pages/CheckOutpage.jsx"
import ProductCatalogPage from "./pages/ProductCatalog.jsx"
import WellnessPage from "./pages/WellnessPage.jsx"
import HairCarePage from "./pages/HairCarePage.jsx"
import HairOilPage from "./pages/HairOilpage.jsx"
import SkinCarePage from "./pages/SkinCarePage.jsx"
import Layout from "./Layout.jsx"


axios.defaults.baseURL = "http://localhost:9000";


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/product/:id" element={<ProductCatalogPage/>} />
        <Route path="/wellness" element={<WellnessPage/>} />
        <Route path="/haircare" element={<HairCarePage/>} />
        <Route path="/hairoil" element={<HairOilPage/>} />
        <Route path="/skincare" element={<SkinCarePage/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

