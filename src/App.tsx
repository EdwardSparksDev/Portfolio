import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./Pages/MainPage";
import SelfSummary from "./Components/SelfSummary";
import AboutMe from "./Pages/AboutMe";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";

const AppContainer = styled(Column)`
  min-height: 90vh;
  padding: 60px;
  gap: 30px;

  width: 95%;
  margin-inline: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 50px;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 0;
    gap: 20px;
  }
`;

const NavbarLink = styled(Link)`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: green;
  text-decoration: none;

  .emoji {
    flex-shrink: 0;
    margin-right: 10px;
  }

  .label {
    white-space: normal;
  }

  &:hover {
    color: lightgreen;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;

    .emoji {
      margin-right: 5px;
    }
  }
  `;

const App: React.FC = () => {
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPosition = `${window.scrollY * 0.05}px ${window.scrollY * 0.8}px`;
  });

  return (
    <Router>
      <AppContainer>
        <SelfSummary />

        <Navbar>
        <NavbarLink to="/">
            <span className="emoji">👾</span>
            <span className="label"> Games</span>
        </NavbarLink>
        <NavbarLink to="/about-me">
            <span className="emoji">💬</span>
            <span className="label"> About me</span>
        </NavbarLink>
        </Navbar>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;