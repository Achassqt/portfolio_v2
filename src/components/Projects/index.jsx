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

const ProjectsContainer = styled.section`
  background-color: ${colors.cards};
  border-radius: ${sizing.border};
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
  -ms-overflow-style: none; // IE 10+
  overflow: -moz-scrollbars-none; // Fire
  user-select: none;
  -webkit-user-drag: none;

  &::-webkit-scrollbar {
    /* width: 0px;
    height: 0px; */
    display: none;
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
    border-radius: ${sizing.border};
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
        overflow: hidden;

        animation: ${opacity} 1s ease-out;

        & > img {
          width: 100%;
          padding: 20px 0;
          transform: rotate(-90deg) rotateX(180deg);
          user-select: none;
          -webkit-user-drag: none;
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
            user-select: none;
            -webkit-user-drag: none;
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
          user-select: none;
          -webkit-user-drag: none;

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
    display: flex;
    justify-content: space-between;
    width: 100%;
    .project-link {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border: none;
      border-radius: ${sizing.border};
      background-color: ${colors.color};
      width: 48%;
      cursor: pointer;
      user-select: none;
      -webkit-user-drag: none;

      &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        z-index: -1;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        border: 1px solid ${colors.color};
        border-radius: ${sizing.border};
        z-index: 10000;
        /* opacity: 0; */
      }

      &:hover:after {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      & > .svg-container__link {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        & > svg {
          color: black;
          font-size: ${sizing.s};
        }

        & > .svg2 {
          position: absolute;
          color: white;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }

      &:hover > .svg-container__link > .svg2 {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      & > span {
        position: relative;
        font-size: ${sizing.s};
        font-weight: bold;
        color: black;
        margin-left: 10px;

        &::after {
          content: "Github";
          color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }

      & > .live {
        &::after {
          content: "Site live";
        }
      }

      &:hover > span::after {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    }
  }

  .stack-container {
  }
`;

function Projects() {
  const containerRef = useRef(null);
  // const scrollableDivRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
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

    if (!isMouseOver && !isTouching) {
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

    const handleTouchStart = () => {
      setIsTouching(true);
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(handleScroll, 30);
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isMouseOver, isTouching, scrollDirection]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const scrollX = startX - e.pageX;
    containerRef.current.scrollLeft += scrollX;
    setStartX(e.pageX);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };

  return (
    <ProjectsContainer id="project_id">
      <h2>PROJETS</h2>
      <ProjectsContent
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {!isEmpty(projects[0]) &&
          projects
            .slice()
            .reverse()
            .map((project, index) => (
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
                      onMouseEnter={() => {
                        document.getElementById(`logo-${index}`).src =
                          project.logo_gif_url;
                      }}
                      onMouseLeave={() => {
                        document.getElementById(`logo-${index}`).src =
                          project.logo_url;
                      }}
                      // style={{ display: !projectDetails[index] ? "flex" : "none" }}
                    >
                      <img
                        id={`logo-${index}`}
                        src={project.logo_url}
                        alt="test"
                      />
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
                          {project.github_url && (
                            <button
                              className="project-link"
                              onClick={() => {
                                window.open(project.github_url, "_blank");
                              }}
                            >
                              <div className="svg-container__link">
                                <FaGithub />
                                <FaGithub className="svg2" />
                              </div>
                              <span>Github</span>
                            </button>
                          )}
                          {project.site_live_url && (
                            <button
                              className="project-link"
                              onClick={() => {
                                window.open(project.site_live_url, "_blank");
                              }}
                            >
                              <div className="svg-container__link">
                                <MdLiveTv />
                                <MdLiveTv className="svg2" />
                              </div>
                              <span className="live">Site live</span>
                            </button>
                          )}
                        </div>
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
