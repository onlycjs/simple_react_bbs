import { Outlet } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./styles/global.style";
import Header from "Components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
