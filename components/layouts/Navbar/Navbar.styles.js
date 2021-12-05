const { default: styled } = require("styled-components");
const { Container } = require("styles/globalStyles");

export const Nav = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 26px -12px rgba(2, 24, 110, 0.15);
`;

export const NavContainer = styled(Container)`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const NavbarBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
`;
export const NavLink = styled.a`
  color: ${({ wrap }) => (wrap ? "white" : "#763d8e")};
  font-size: 14px;
  font-weight: 700;

  background: ${({ wrap }) => (wrap ? "#763d8e" : "transparent")};
  padding: ${({ wrap }) => (wrap ? ".8rem 2rem" : "0")};
  border-radius: ${({ wrap }) => (wrap ? "4px" : "0")};
  box-shadow: ${({ wrap }) =>
    wrap ? "0px 4px 24px -10px rgba(2, 24, 110, 0.2)" : ""};
`;
