import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer/>
    </>
  );
};
