import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import sizing from "../../utils/sizing";

const infiniteAnim = keyframes`
0% {
  transform: translateY(0)
}
20% {
  transform: translateY(-4px)
}
40% {
  transform: translateY(0)
}
60% {
  transform: translateY(0)
}
80%{
  transform: translateY(-4px)
}
100% {
  transform: translateY(0)
}
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  min-width: 320px;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderContent = styled.div`
  color: ${colors.color};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-width: 375px;

  & > span {
    font-size: ${sizing.m};
    font-weight: bold;
  }

  & > div {
    background-color: ${colors.color};
    border-radius: 50%;
    padding: 3px;
    margin: 2px;
    position: relative;
    bottom: 5.5px;

    animation: ${infiniteAnim} 1200ms ease-in-out infinite;

    &:first-of-type {
      margin-left: 6px;
    }
  }

  .item2 {
    animation-delay: 100ms;
  }

  .item3 {
    animation-delay: 200ms;
  }
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderContent>
        <span>Chargement en cours</span>
        <div className="item1"></div>
        <div className="item2"></div>
        <div className="item3"></div>
      </LoaderContent>
    </LoaderContainer>
  );
}

export default Loader;
