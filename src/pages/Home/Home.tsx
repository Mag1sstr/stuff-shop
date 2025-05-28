import Banner from "../../components/Banner/Banner";
import Menu from "../../components/Menu/Menu";
import Poster from "../../components/Poster/Poster";
import Products from "../../components/Products/Products";

function Home() {
  return (
    <>
      <Menu banner={<Banner />} />
      <Products />
      <Poster />
    </>
  );
}

export default Home;
