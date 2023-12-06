import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import htmlIcon from "../../assets/skills/html-5-svgrepo-com.svg";
import cssIcon from "../../assets/skills/css-3-svgrepo-com.svg";
import javascriptIcon from "../../assets/skills/javascript-svgrepo-com.svg";
import reactIcon from "../../assets/skills/react-svgrepo-com.svg";
import nodejsIcon from "../../assets/skills/nodejs-icon-svgrepo-com.svg";
import mysqlIcon from "../../assets/skills/mysql-svgrepo-com.svg";
import mongodbIcon from "../../assets/skills/mongo-svgrepo-com.svg";
import photoshopIcon from "../../assets/skills/photoshop-svgrepo-com.svg";
import figmaIcon from "../../assets/skills/figma-svgrepo-com.svg";
import sizing from "../../utils/sizing";
import mediaQueries from "../../utils/mediaQueries";
import { useEffect, useRef, useState } from "react";
import PercentageAnimation from "../../utils/PercentageAnimation";

const a = keyframes`
0%{
  opacity: 0
}
100% {
  opacity: 1
}
`;

const SkillsContainer = styled.section`
  width: 100%;
  /* height: 100vh; */
  border-radius: 30px;
  background-color: ${colors.cards};
  padding: 20px;
  margin-bottom: 30px;

  @media ${mediaQueries.mobileL} {
    padding: 30px;
  }

  @media ${mediaQueries.laptopL} {
    padding: 40px;
    padding-top: 30px;
  }

  & > h2 {
    margin-bottom: 20px;
    font-size: ${sizing.m};

    @media ${mediaQueries.laptopL} {
      font-size: ${sizing.l};
      margin-bottom: 30px;
    }
  }
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  @media ${mediaQueries.tablette} {
    flex-direction: row;
  }

  .skills-category {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid white;
    /* border-right: 1px solid white; */
    margin-top: 15px;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      border: none;
    }

    @media ${mediaQueries.tablette} {
      border-bottom: 0;
      border-right: 1px solid white;
      margin: 0;

      &:last-child {
        border: none;
      }
    }

    & > h3 {
      font-size: ${sizing.s};
      margin-bottom: 5px;

      @media ${mediaQueries.laptopL} {
        font-size: ${sizing.m};
      }
    }

    &__skills {
      display: flex;
      &__skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > img {
          width: calc(${sizing.l} + 15px);
          /* width: ${sizing.xl}; */
          margin: 10px;
          /* margin: 20px; */

          @media ${mediaQueries.tablette} {
            margin: 5px;
            width: calc(${sizing.l} + 10px);
          }

          @media ${mediaQueries.laptop} {
            margin: 10px;
            width: calc(${sizing.l} + 20px);
          }

          @media ${mediaQueries.laptopL} {
            margin: 20px;
            width: ${sizing.xl};
          }
        }

        & > span {
          font-size: ${sizing.s};
          /* opacity: 0; */
        }

        .animated {
          animation: ${a} 1s ease both;
        }
      }
    }
  }
`;

function Skills() {
  const divRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Récupérer la position de l'élément par rapport à la fenêtre
      const elementTop = divRef.current.getBoundingClientRect().top;

      // Définir la position de déclenchement de l'animation (par exemple, la moitié de la fenêtre)
      const triggerPoint = window.innerHeight / 1.2;

      // Vérifier si la position de l'élément atteint le point de déclenchement
      if (elementTop < triggerPoint) {
        // Activer l'animation en mettant à jour l'état
        setIsAnimated(true);
      } else {
        // Désactiver l'animation si la position de l'élément est en dehors du point de déclenchement
        setIsAnimated(false);
      }
    };

    // Ajouter un écouteur d'événements de défilement
    window.addEventListener("scroll", handleScroll);

    // Appeler la fonction handleScroll une fois au chargement pour gérer l'état initial
    handleScroll();

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <SkillsContainer>
      <h2>SKILLS</h2>
      <SkillsContent ref={divRef}>
        <div className="skills-category">
          <h3>FRONT-END</h3>
          <div className="skills-category__skills">
            <div className="skills-category__skills__skill">
              <img src={htmlIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>80%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={80} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={cssIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>80%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={80} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={javascriptIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>70%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={70} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={reactIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>70%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={70} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>BACK-END</h3>
          <div className="skills-category__skills">
            <div className="skills-category__skills__skill">
              <img src={nodejsIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>65%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={65} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={mongodbIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>50%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={50} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={mysqlIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>40%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={40} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>DIVERS</h3>
          <div className="skills-category__skills">
            <div className="skills-category__skills__skill">
              <img src={figmaIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>30%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={30} />
              ) : null}
            </div>
            <div className="skills-category__skills__skill">
              <img src={photoshopIcon} alt="html" />
              {/* <span className={`${isAnimated ? "animated" : ""}`}>20%</span> */}
              {isAnimated ? (
                <PercentageAnimation targetPercentage={20} />
              ) : null}
            </div>
          </div>
        </div>
      </SkillsContent>
    </SkillsContainer>
  );
}

export default Skills;
