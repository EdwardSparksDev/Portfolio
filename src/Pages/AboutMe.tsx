import React from "react";
import styled from "styled-components";
import { PersonalInfo } from "../data";
import { Column } from "../Styles/StyledComponents";

const Container = styled(Column)`
  align-items: center;
  margin: 40px auto;
  gap: 20px;
  text-align: center;

  width: min(100%, 1500px);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid rgb(238, 231, 166);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  max-width: 75vw;
  margin: 10px;
  text-align: left;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Container>
      <ProfileImage src={PersonalInfo.image} alt="Your Name" />
      <AboutText>
       {PersonalInfo.description}
      </AboutText>
    </Container>
  );
};

export default AboutMe;