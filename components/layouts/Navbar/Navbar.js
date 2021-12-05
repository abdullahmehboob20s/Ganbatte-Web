import logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "styles/globalStyles";
import { Nav, NavbarBtns, NavContainer, NavLink } from "./Navbar.styles";

function Navbar() {
  return (
    <Nav>
      <Container>
        <NavContainer>
          {/* LEFT */}
          <Link href="/" passHref>
            <Image src={logo} alt="Logo" />
          </Link>
          {/* LEFT ENDS */}

          {/* RIGHT STARTS */}
          <NavbarBtns>
            <NavLink href="/">Learn</NavLink>
            <NavLink wrap="true" href="/">
              Sign in/sign up
            </NavLink>
          </NavbarBtns>
          {/* RIGHT ENDS */}
        </NavContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
