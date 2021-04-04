import "./App.css";
import SideNav from "../Components/SideNav";
import styled from "@emotion/styled";
import Header from "../Components/Header";
import { CssBaseline } from "@material-ui/core";

function App() {
  const Content = styled.div`
    padding-left: 320px;
    width: 100%;
  `;
  return (
    <>
      <SideNav />
      <Content>
        <Header />
      </Content>
      <CssBaseline />
    </>
  );
}

export default App;
