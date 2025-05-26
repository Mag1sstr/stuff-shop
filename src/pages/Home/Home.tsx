import Banner from "../../components/Banner/Banner";
import Poster from "../../components/Poster/Poster";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div className="container menu">
        <Sidebar />
        <Banner />
      </div>
      <Products />
      <Poster />
    </>
  );
}

export default Home;
