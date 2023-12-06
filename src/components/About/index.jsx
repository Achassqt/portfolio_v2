import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import illustration from "../../assets/1.png";
import sizing from "../../utils/sizing";
import mediaQueries from "../../utils/mediaQueries";

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

const AboutContainer = styled.section`
  background-color: ${colors.cards};
  width: 100%;
  /* height: 75vh; */
  /* height: 80vh; */
  border-radius: 30px;
  margin-bottom: 20px;

  @media ${mediaQueries.tablette} {
    height: 75vh;
    min-height: 470px;
    max-height: 500px;
    margin-bottom: 30px;
  }

  @media ${mediaQueries.laptop} {
    max-height: 900px;
  }

  @media ${mediaQueries.laptopL} {
    min-height: 600px;
  }
`;

const AboutContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around;
  height: 100%;
  padding: 0 20px;
  /* padding-left: 40px; */

  @media ${mediaQueries.tablette} {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 0;
  }

  @media ${mediaQueries.laptop} {
    padding-left: 30px;
  }

  @media ${mediaQueries.laptopL} {
    padding-left: 40px;
  }

  .content-left {
    /* flex: 2; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* padding-top: 20px; */

    @media ${mediaQueries.tablette} {
      flex: 1;
      justify-content: center;
      align-items: center;
      /* max-width: 270px; */
    }

    @media ${mediaQueries.laptop} {
      align-items: flex-start;
    }

    &__top {
      /* padding-bottom: 50px; */
      padding-bottom: 30px;

      & > h1 {
        font-size: ${sizing.m};
        /* font-size: ${sizing.xl}; */
        font-weight: bold;

        @media ${mediaQueries.laptop} {
          font-size: ${sizing.l};
        }

        @media ${mediaQueries.laptopL} {
          font-size: ${sizing.xl};
        }
      }

      & > span {
        font-size: ${sizing.s};
        /* font-size: ${sizing.l}; */
        color: ${colors.backgroundLight};

        @media ${mediaQueries.laptop} {
          font-size: ${sizing.m};
        }

        @media ${mediaQueries.laptopL} {
          font-size: ${sizing.l};
        }
      }

      .btns-container {
        display: flex;
        margin-top: 20px;

        & > button {
          position: relative;
          width: 130px;
          height: 40px;
          background-color: ${colors.color};
          border: none;
          border-radius: 4px;
          margin-right: 10px;
          cursor: pointer;
          font-family: "Nova Square", sans-serif;

          &:after {
            content: "";
            position: absolute;
            top: -1px;
            left: -1px;
            z-index: -1;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            border: 1px solid ${colors.color};
            border-radius: 4px;
            z-index: 1;
            opacity: 0;
          }

          &:hover:after {
            opacity: 1;
            animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          &:last-child {
            margin-right: 0;
          }

          @media ${mediaQueries.laptop} {
            width: 170px;
            height: 50px;
            margin-right: 30px;
            font-size: ${sizing.s};
          }
        }

        & > button > span {
          position: relative;
          font-weight: bold;
        }

        & > .cv-btn > span:after {
          content: "Télécharger CV";
          color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        & > .black-btn > span:after {
          content: "En savoir plus";
          color: ${colors.color};
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        & > button:hover > span:after {
          animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          opacity: 1;
        }

        .black-btn {
          background-color: ${colors.background};
          border: 1px solid white;
          color: white;
        }
      }
    }
    p {
      font-size: ${sizing.s};
      /* font-size: ${sizing.m}; */
      text-align: justify;
      padding-bottom: 30px;

      @media ${mediaQueries.mobileL} {
        padding-left: 20px;
        padding-right: 20px;
      }

      @media ${mediaQueries.tablette} {
        padding-left: 0;
        padding-right: 0;
        font-size: ${sizing.xs};
      }

      @media ${mediaQueries.laptop} {
        font-size: ${sizing.s};
      }
    }
  }

  .content-right {
    /* flex: 1; */
    display: flex;
    justify-content: center;

    @media ${mediaQueries.mobileL} {
      flex: 1;
    }
    img {
      width: 80%;
      max-width: 400px;
      height: auto;
      max-height: 100%;

      @media ${mediaQueries.tablette} {
        max-width: 600px;
        width: 100%;
      }
    }
  }
`;

function About({ ref }) {
  return (
    <AboutContainer id="about_id">
      <AboutContent>
        <div className="content-left">
          <div className="content-left__top">
            <h1>Bonjour, Je suis Sacha</h1>
            <span>Développeur web Junior</span>
            <div className="btns-container">
              <button className="cv-btn">
                <span>Télécharger CV</span>
              </button>
              <button className="black-btn">
                <span>En savoir plus</span>
              </button>
            </div>
          </div>
          <p>
            Passionné d'informatique et de nouvelles technologies, j'ai décidé
            de me lancer dans le développement web. A force de rigueur et de
            volonté, j' ai obtenu un diplôme dans ce domaine tout en continuant
            de me former en autodidacte. Je souhaite acquérir encore plus
            d'expérience, en rejoignant une équipe de professionnels tout en
            apportant de mes compétences.
          </p>
        </div>
        <div className="content-right">
          <img src={illustration} alt="Il code dans l'espace" />
        </div>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
