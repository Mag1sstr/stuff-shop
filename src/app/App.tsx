import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Sidebar from "../components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container menu">
        <Sidebar />
        <AppRouter />
      </div>
      <Products />
      <Footer />
    </>
  );
}

export default App;
