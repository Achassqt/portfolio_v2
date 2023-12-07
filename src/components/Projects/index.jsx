import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import sizing from "../../utils/sizing";
import mediaQueries from "../../utils/mediaQueries";
import { useEffect, useState, useRef } from "react";

import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const opacity = keyframes`
        0% {
          opacity: 0;
        }
        40% {
          opacity: 0;
        }
        60%{
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
`;

const ProjectsContainer = styled.section`
  background-color: ${colors.cards};
  border-radius: 30px;
  padding: 20px;
  /* padding: 40px;
  padding-top: 30px; */

  @media ${mediaQueries.mobileL} {
    padding: 30px;
  }

  & > h2 {
    font-size: ${sizing.m};
    /* font-size: ${sizing.l}; */
    margin-bottom: 20px;
    /* margin-bottom: 30px; */
  }

  .display-none {
    display: none;

    @media ${mediaQueries.tablette} {
      display: block;
    }
  }

  .display-none-2 {
    @media ${mediaQueries.tablette} {
      display: none;
    }
  }
`;

const ProjectsContent = styled.div`
  display: flex;
  /* flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  max-height: 70vh;
  min-height: 400px; */
  flex-direction: row;
  max-height: none;
  min-height: 0;
  /* align-items: normal; */
  overflow: auto;
  /* padding-bottom: 10px; */

  &::-webkit-scrollbar {
    /* width: 2px;
    height: 2px; */
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff90; /* Couleur de la poignée de la barre de défilement */
    border-radius: 6px; /* Bord arrondi de la poignée */
  }

  @media ${mediaQueries.mobileL} {
    flex-direction: row;
    max-height: none;
    min-height: 0;
    align-items: normal;
  }

  .project-container {
    position: relative;
    max-width: 350px;
    min-width: 270px;
    margin-right: 20px;
    height: 400px;
    background-color: ${colors.background};
    border-radius: 15px;
    /* padding: 10px; */
    /* box-shadow: 0px 0px 5px ${colors.color}; */
    color: black;
    /* width: 100%; */

    scroll-behavior: smooth;

    transition: transform 0.6s ease-in-out;

    &.flipped {
      transform: rotateY(180deg);
    }

    &:last-child {
      margin-right: 0;
    }

    @media ${mediaQueries.mobileL} {
      margin-right: 30px;
      min-width: 280px;
    }

    @media ${mediaQueries.tablette} {
      min-width: 300px;
      margin-bottom: 0;
    }

    .project-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 10px;
      transform: rotateY(180deg);
      cursor: pointer;

      .logo {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* transform: rotate(-90deg) rotateX(180deg); */

        animation: ${opacity} 1s ease-out;

        & > img {
          width: 100%;
          padding: 20px 0;
          transform: rotate(-90deg) rotateX(180deg);
        }
      }

      .project-details {
        display: flex;
        flex-direction: column;
        height: 100%;
        animation: ${opacity} 1s ease-out;
        .project-top {
          .laptop-mockup {
            /* width: 350px; */
            width: 100%;
          }
        }

        & > p {
          text-align: justify;
          padding: 10px;
          font-size: ${sizing.s};
          /* max-height: 118px; */
          overflow: auto;
          border-bottom: 1px solid white;
          color: white;

          @media ${mediaQueries.tablette} {
            /* height: 100px; */
            /* max-height: none; */
          }

          @media ${mediaQueries.laptop} {
            /* height: 125px; */
          }

          &::-webkit-scrollbar {
            width: 2px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #ffffff90; /* Couleur de la poignée de la barre de défilement */
            border-radius: 6px; /* Bord arrondi de la poignée */
          }
        }
      }
    }
  }
`;

const ProjectFooter = styled.div`
  display: flex;
  padding: 20px 10px;
  .links-container {
    .project-links {
      display: flex;
      flex-direction: column;

      &__link {
        display: flex;
        align-items: center;

        & > svg {
          color: ${colors.color};
        }

        & > a {
          font-size: ${sizing.s};
          color: ${colors.color};
          margin-left: 10px;
        }
      }
    }
  }

  .stack-container {
  }
`;

function Projects() {
  const containerRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [projects, setProjects] = useState([]);
  const [projectDetails, setProjectDetails] = useState(
    Array(projects.length).fill(false)
  );

  const handleProjectClick = (index) => {
    const newProjectDetails = [...projectDetails];
    newProjectDetails[index] = !newProjectDetails[index];
    setProjectDetails(newProjectDetails);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`);

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des projets");
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des projets : ",
          error.message
        );
        // Gérer les erreurs, afficher un message d'erreur, etc.
      }
    };

    fetchProjects();
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;

    if (!isMouseOver) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth - 1;

      if (scrollDirection === 1) {
        container.scrollLeft += 2;

        if (container.scrollLeft >= maxScrollLeft) {
          setScrollDirection(-1);
        }
      } else {
        container.scrollLeft -= 2;

        if (container.scrollLeft <= 0) {
          setScrollDirection(1);
        }
      }
    }
  };

  // Utilisez useEffect pour attacher/détacher les gestionnaires d'événements
  useEffect(() => {
    const container = containerRef.current;

    const handleMouseEnter = () => {
      setIsMouseOver(true);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(handleScroll, 30);
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isMouseOver, scrollDirection]);

  return (
    <ProjectsContainer id="project_id">
      <h2>PROJETS</h2>
      <ProjectsContent ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              handleProjectClick(index);
            }}
            className={`project-container ${
              projectDetails[index] ? "flipped" : ""
            }`}
          >
            <div className="project-content">
              {!projectDetails[index] && (
                <div
                  className="logo"
                  // style={{ display: !projectDetails[index] ? "flex" : "none" }}
                >
                  <img src={project.logo_url} alt="test" />
                </div>
              )}
              {projectDetails[index] && (
                <div className="project-details">
                  <div className="project-top">
                    <img
                      src={project.mockup_url}
                      className="laptop-mockup"
                      alt="projet"
                    />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  ></p>
                  <ProjectFooter>
                    <div className="links-container">
                      <div className="project-links">
                        <div className="project-links__link">
                          <FaGithub />
                          <a href={project.github_url}>Github</a>
                        </div>
                        <div className="project-links__link">
                          <MdLiveTv />
                          <a href={project.site_live_url}>Site live</a>
                        </div>
                      </div>
                    </div>
                    <div className="stack-container"></div>
                  </ProjectFooter>
                </div>
              )}
            </div>
          </div>
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  );
}

export default Projects;
