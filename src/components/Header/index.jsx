import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import sizing from "../../utils/sizing";
import logo from "../../assets/logo-s.png";
import githubIcon from "../../assets/header/github-142-svgrepo-com.svg";
import linkedinIcon from "../../assets/header/linkedin-1-svgrepo-com.svg";
import maltIcon from "../../assets/header/malt-svgrepo-com.svg";
import mediaQueries from "../../utils/mediaQueries";

const rotateScaleUp = keyframes`
  0% {
    -webkit-transform: scale(1) rotateZ(0);
            transform: scale(1) rotateZ(0);
  }
  50% {
    -webkit-transform: scale(2) rotateZ(180deg);
            transform: scale(2) rotateZ(180deg);
  }
  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
            transform: scale(1) rotateZ(360deg);
  }
`;

const b = keyframes`
0% {
  transform: translate(0)
}

  20% {
    transform: translate(-2px, 1px)
  }

  40% {
    transform: translate(-2px, -1px)
  }

  60% {
    transform: translate(2px, 1px)
  }

  80% {
    transform: translate(2px, -1px)
  }

  to {
    transform: translate(0)
  }

`;

const HeaderContainer = styled.header`
  background-color: ${colors.cards};
  width: 100%;
  border-radius: ${sizing.border};
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  /* position: sticky;
  top: 30px; */

  @media ${mediaQueries.tablette} {
    height: 15vh;
    min-height: 100px;
    max-height: 140px;
    margin: 30px 0;
  }

  @media ${mediaQueries.laptop} {
    min-height: 140px;
    max-height: 180px;
  }
`;

const LogoContainer = styled.div`
  background-color: ${colors.color};
  border-radius: ${sizing.border} 0 0 ${sizing.border};
  width: 50%;
  /* flex: 1; */

  @media ${mediaQueries.tablette} {
    width: auto;
    flex: 1;
  }

  & > div {
    /* padding: 40px; */
    /* padding-right: 84px; */
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    @media ${mediaQueries.laptop} {
      padding: 30px;
    }

    @media ${mediaQueries.laptopL} {
      padding: 40px;
    }

    .img-container {
      flex: 1;

      & > img {
        width: ${sizing.l};
        height: auto;

        @media ${mediaQueries.laptop} {
          width: ${sizing.xl};
        }
      }
    }

    span {
      flex: 2;
      display: flex;
      justify-content: center;
      font-size: ${sizing.m};
      /* font-size: ${sizing.l}; */
      font-weight: bold;
      color: black;
      /* margin-left: 50px; */

      @media ${mediaQueries.laptopL} {
        font-size: ${sizing.l};
      }
    }
  }
`;

const NavContainer = styled.nav`
  display: none;

  @media ${mediaQueries.tablette} {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > ul {
    list-style: none;
    display: flex;

    & > li {
      font-size: ${sizing.s};
      padding: 10px;

      @media ${mediaQueries.laptop} {
        font-size: ${sizing.m};
        padding: 20px;
      }

      @media ${mediaQueries.laptopL} {
        padding: 30px;
      }

      & > a {
        position: relative;
        color: white;
        text-decoration: none;

        &::after {
          color: ${colors.color};
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        &:hover::after {
          animation: ${b} 500ms ease;
          opacity: 1;
        }
      }

      .about::after {
        content: "A propos";
      }
      .projects::after {
        content: "Projets";
      }
      .contact::after {
        content: "Me contacter";
      }
    }
  }
`;

const NetworksContainer = styled.div`
  /* flex: 1; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  /* padding: 40px; */

  @media ${mediaQueries.tablette} {
    width: auto;
    flex: 1;
  }

  div {
    padding: 5px;

    &:last-child {
      padding-right: 18px;
    }

    @media ${mediaQueries.laptop} {
      &:last-child {
        padding-right: 28px;
      }
    }
    @media ${mediaQueries.laptopL} {
      &:last-child {
        padding-right: 38px;
      }
    }
    img {
      width: calc(${sizing.l} + 10px);
      height: calc(${sizing.l} + 10px);
      &:hover {
        animation: ${rotateScaleUp} 0.8s ease;
      }

      @media ${mediaQueries.laptop} {
        width: ${sizing.xl};
        height: ${sizing.xl};
      }
    }

    .size {
      width: calc(${sizing.l} + 2px);
      height: calc(${sizing.l} + 2px);
      position: relative;
      right: 3px;

      @media ${mediaQueries.laptop} {
        width: calc(${sizing.xl} - 9px);
        height: calc(${sizing.xl} - 9px);
        right: 6px;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <div>
          <div className="img-container">
            <img src={logo} alt="Logo" />
          </div>
          <span>SACHA</span>
        </div>
      </LogoContainer>
      <NavContainer>
        <ul>
          <li>
            <a href="#about_id" className="about">
              A propos
            </a>
          </li>
          <li>
            <a href="#project_id" className="projects">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact_id" className="contact">
              Me contacter
            </a>
          </li>
        </ul>
      </NavContainer>
      <NetworksContainer>
        <div>
          <a
            href="https://github.com/Achassqt"
            target="_blank"
            rel="noreferrer"
          >
            <img className="size" src={githubIcon} alt="Github" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sacha-souquet-7b15681b0/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin" />
          </a>
        </div>
        <div>
          <a
            href="https://www.malt.fr/profile/sachasouquet"
            target="_blank"
            rel="noreferrer"
          >
            <img src={maltIcon} alt="Malt" />
          </a>
        </div>
      </NetworksContainer>
    </HeaderContainer>
  );
}

export default Header;
