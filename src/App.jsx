import About from "./components/About";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Skills from "./components/Skills";
import colors from "./utils/colors";
import Projects from "./components/Projects";
import mediaQueries from "./utils/mediaQueries";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
  }

  html {
    -webkit-scroll-behavior: smooth;
    scroll-behavior: smooth;
}

  body {
    background-color: ${colors.background};
    /* font-family: 'Nova Square', sans-serif; */
    font-family: 'Chakra Petch', sans-serif;
    color: white;
    &::-webkit-scrollbar {
            width: 2px;
    }
    &::-webkit-scrollbar-thumb {
            background-color: #ffffff90; /* Couleur de la poignée de la barre de défilement */
            border-radius: 6px; /* Bord arrondi de la poignée */
    }
  }
`;

const MainContainer = styled.main`
  /* height: 100vh; */
  min-width: 375px;
  /* padding: 0 50px; */
  padding: 0 10px;

  @media ${mediaQueries.mobileM} {
    padding: 0 20px;
  }

  @media ${mediaQueries.tablette} {
    padding: 0 30px;
  }
  .top__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
  }
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <MainContainer>
      {loading && <Loader />}
      <GlobalStyle />
      <div className="top__container">
        <Header />
        <About />
      </div>
      <Skills />
      <Projects />
      <Footer />
    </MainContainer>
  );
}

export default App;
