import "./App.css";
import SideNav from "../Components/SideNav";
import styled from "@emotion/styled";
import Header from "../Components/Header";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import PageHeader from "../Components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});
function App() {
  const Content = styled.div`
    padding-left: 320px;
    width: 100%;
  `;
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideNav />
        <Content>
          <Header />
          <PageHeader
            title={"Page Header"}
            subTitle={"Page description"}
            icon={<PeopleOutlineTwoTone fontSize={"large"} />}
          />
        </Content>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
