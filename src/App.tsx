import "./styles/index.scss";
import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />;
      <Footer />
    </>
  );
}

export default App;
