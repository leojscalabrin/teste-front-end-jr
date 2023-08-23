import "./styles/index.scss";
import "./styles/App.scss";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />;
    </>
  );
}

export default App;
