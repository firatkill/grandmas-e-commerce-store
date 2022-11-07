import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Navbar from "./Components/UI/Navbar/Navbar";
import Footer from "./Components/UI/Footer/Footer";
import CartPage from "./Pages/CartPage";
import PasswordPage from "./Pages/PasswordPage";
import CheckoutPage from "./Pages/CheckoutPage";
import OrdersPage from "./Pages/OrdersPage";
import OrderPlacedPage from "./Pages/OrderPlacedPage";
import { uiActions } from "./Redux/ui-slice";
import { useSelector, useDispatch } from "react-redux";
import { useAddUserToDb } from "./Hooks/CustomHooks";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const orders = useSelector((state) => state.user.userOrders);
  console.log(orders);
  const isNavbarDropdown = useSelector((state) => state.ui.isNavbarDropdown);
  const closeDropdown = (e) => {
    if (isNavbarDropdown) {
      dispatch(uiActions.navbarDropdownSwitch(false));
    }
  };
  const addUserToDb = useAddUserToDb();
  addUserToDb();
  return (
    <div className={"appContainer"} onClick={closeDropdown}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        {!isLoggedIn && (
          <>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
        {isLoggedIn && (
          <>
            <Route path="/changePassword" element={<PasswordPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/orderPlaced" element={<OrderPlacedPage />} />
          </>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
