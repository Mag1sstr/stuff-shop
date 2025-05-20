import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
