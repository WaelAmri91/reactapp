import './App.css';

import styled from "styled-components";

import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";


function App() {
  return (
      <>
      {/*Fragment*/}
      <Header></Header>
    <AppFrame className="App">
     <Welcome></Welcome>
      <Products></Products>
    </AppFrame>
      </>
  );
}
const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
