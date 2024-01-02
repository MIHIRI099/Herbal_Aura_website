import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/footer.jsx"; // Make sure to adjust the import if the filename is different
import Header1 from "./components/Header1.jsx";

export default function Layout() {
  const location = useLocation();

  // Determine which header to render based on the current location
  const renderHeader = () => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      return <Header1 />;
    } else {
      return <Header />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        {renderHeader()}
        <NavigationBar />
      </div>
      <div className="flex-grow pt-32">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
