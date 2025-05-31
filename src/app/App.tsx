import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
