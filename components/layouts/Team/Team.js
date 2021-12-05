import styled from "styled-components";
import { Container } from "styles/globalStyles";
import teamImg1 from "public/images/team-img-1.png";
import Image from "next/image";

const Wrapper = styled.div`
  padding: 150px 0;
  background: #f8f7f7;

  .section {
    display: flex;
    align-items: center;
    gap: 64px;
  }
`;
const SectionLeft = styled.div`
  min-width: 212px;

  img {
    width: 100%;
  }
`;
const SectionRight = styled.div``;

function Team() {
  return (
    <Wrapper>
      <Container className="section">
        <SectionLeft>
          <Image src={teamImg1} alt="" />
        </SectionLeft>
        <SectionRight>
          <p className="fs-20px gray weight-4 mb-15px">
            With Ganbatte Cities, we’re launching a digital platform for cities
            that offers knowledge, actionable insights and tools to support the
            implementation of practical circular economy solutions to achieve
            their sustainability goals. This digital platform will continuously
            evolve and offer updated content and new features as more cities
            engage with it.
          </p>
          <p className="fs-20px weight-7 gray">
            – Ivonne Bojoh, Head of Digital at Circle Economy
          </p>
        </SectionRight>
      </Container>
    </Wrapper>
  );
}

export default Team;
