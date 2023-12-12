import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";
import sizing from "../../utils/sizing";
import mediaQueries from "../../utils/mediaQueries";

import { IoIosMail } from "react-icons/io";

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

const FooterContainer = styled.footer`
  background-color: ${colors.cards};
  border-radius: ${sizing.border};
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media ${mediaQueries.mobileL} {
    padding: 30px;
  }

  @media ${mediaQueries.tablette} {
    flex-direction: row;
  }

  .content-left {
    /* flex: 1; */
    margin-bottom: 20px;

    @media ${mediaQueries.tablette} {
      flex: 1;
    }

    & > h1 {
      font-size: ${sizing.m};
      margin-bottom: 10px;
    }

    & > p {
      font-size: ${sizing.s};
    }
  }

  .content-right {
    flex: 1;
    display: flex;
    width: 100%;

    @media ${mediaQueries.tablette} {
      flex: 1;
      padding-left: 20px;
    }

    & > button {
      position: relative;
      background-color: ${colors.color};
      width: 100%;
      padding: 20px 0;
      border-radius: ${sizing.border};
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

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
        opacity: 0;
      }

      &:hover:after {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      & > div {
        position: relative;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
          font-size: ${sizing.l};
          color: black;
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

      &:hover > div > .svg2 {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }

      & > span {
        position: relative;
        display: flex;
        justify-content: flex-start;
        font-size: ${sizing.s};
        font-weight: bold;
        color: black;

        &::after {
          content: "sachsqt@gmail.com";
          color: white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }
      }
      &:hover > span::after {
        opacity: 1;
        animation: ${b} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterContainer id="contact_id">
      <div className="content-left">
        <h1>N'hésitez pas à me contacter !</h1>
        <p>
          Discutons de vos projets et explorons ensemble les oportunités d'une
          collaboration fructueuse
        </p>
      </div>
      <div className="content-right">
        <button
          onClick={() => {
            window.location.href = "mailto:sachsqt@gmail.com";
          }}
        >
          <div>
            <IoIosMail />
            <IoIosMail className="svg2" />
          </div>
          <span>sachsqt@gmail.com</span>
        </button>
      </div>
    </FooterContainer>
  );
}

export default Footer;
