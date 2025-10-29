import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";
import LogoButton from "./LogoButton";

const SelfSummaryContainer = styled(Column)`
`;

const TopRow = styled(Row)`
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 3em;
  font-family: "PhoenixGaming", sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  max-width: 60vw;
  font-family: "PixelGame", sans-serif;
  margin-left: 10px;
  color: silver;

  white-space: pre-line;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
`;


const FALLBACK = `${process.env.PUBLIC_URL}/images/Profile.jpg`;

function githubAvatarFromUrl(githubUrl?: string, size = 200): string {
    if (!githubUrl) return FALLBACK;
    try {
        const u = new URL(githubUrl);
        const name = u.pathname.replace(/^\/+|\/+$/g, "");
        if (!name) return FALLBACK;
        return `https://github.com/${encodeURIComponent(name)}.png?size=${size}`;
    } catch (e) {
        const maybeName = String(githubUrl).replace(/^https?:\/\/(www\.)?github\.com\//, "").replace(/\/$/, "");
        if (maybeName) return `https://github.com/${encodeURIComponent(maybeName)}.png?size=${size}`;
        return FALLBACK;
    }
}

const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <Row>
          <Logo src={githubAvatarFromUrl("https://github.com/EdwardSparksDev")} />
          <Title>{PersonalInfo.name}</Title>
        </Row>
        <Row>
          <LogoButton source="/images/logos/discord.png" size={75} margin={12} linkTo={PersonalInfo.links.discord} />
          <LogoButton source="/images/logos/github.png" size={75} margin={12} linkTo={PersonalInfo.links.github} />
        </Row>
      </TopRow>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;