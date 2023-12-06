import styled from "styled-components";
import colors from "../../utils/colors";

import { IoIosMail } from "react-icons/io";
import sizing from "../../utils/sizing";

const FooterContainer = styled.footer`
  background-color: ${colors.cards};
  border-radius: 30px;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  .content-left {
    flex: 1;
  }

  .content-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    & > button {
      background-color: ${colors.color};
      width: 80%;
      padding: 20px 0;
      border-radius: 15px;
      border: none;
      display: flex;
      align-items: center;
      /* justify-content: space-around; */

      & > svg {
        flex: 1;
        font-size: ${sizing.l};
      }

      & > span {
        flex: 2;
        display: flex;
        justify-content: flex-start;
        font-size: ${sizing.s};
        font-weight: bold;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterContainer id="contact_id">
      <div className="content-left">
        <h1>N'ésitez pas à me contacter !</h1>
        <p>
          Discutons de vos projets et explorons ensemble les oportunités d'une
          collaboration fructueuse
        </p>
      </div>
      <div className="content-right">
        <button>
          <IoIosMail />
          <span>sachsqt@gmail.com</span>
        </button>
      </div>
    </FooterContainer>
  );
}

export default Footer;
