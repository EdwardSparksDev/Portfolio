import React from "react";
import { styled } from "styled-components";
import { Game as GameInterface } from "../types";
import LogoButton from "./LogoButton";
import { Status } from "../types";
import { Column, Row } from "../Styles/StyledComponents";

interface GameInfoProps {
  game: GameInterface;
}

const GameInfoContainer = styled(Column)`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
`;

const GameTitle = styled.h1`
  font-family: "ZenDots", sans-serif;
  font-size: 2rem;
  color: #009fe8;
  margin-top: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const GameDescription = styled.p`
  margin: 0;
  font-size: 1.5rem;

  white-space: pre-line;
  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoTable = styled(Column)`
  gap: 8px;
  margin: 20px 0;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InfoRow = styled(Row)`
  gap: 8px;
`;

const InfoKey = styled.span`
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    min-width: auto;
    width: auto;
  }
`;

const InfoValue = styled.span`
  color: silver;
  flex: 1;
  overflow-wrap: anywhere;
  word-break: break-word;
`;

const LinksContainer = styled(Row)`
  gap: 10px;
`;

const StatusContainer = styled(Row)`
  gap: 8px;
  font-size: 1.4rem;
  align-items: center;
  margin-top: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-top: 20px;
    padding-bottom: 30px;
  }
`;

const StatusCircle = styled.span<{ status: Status }>`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => status === Status.Completed ? "green" : "yellow"};
`;

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
    return (
        <GameInfoContainer>
            <GameTitle>{game.name}</GameTitle>
            <GameDescription>{game.description}</GameDescription>

            <InfoTable>
                <InfoRow>
                    <InfoKey>Platforms:</InfoKey>
                    <InfoValue>{game.platforms.join(", ")}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Engine:</InfoKey>
                    <InfoValue>{game.engine}</InfoValue>
                </InfoRow>
                <InfoRow>
                    <InfoKey>Team Size:</InfoKey>
                    <InfoValue>{game.teamsize}</InfoValue>
                </InfoRow>

                {game.source && <InfoRow>
                    <InfoKey>Source:</InfoKey>
                    <InfoValue >
                        <a href={game.source.url} target="_blank" rel="noopener noreferrer">
                            {game.source.name}
                        </a>
                    </InfoValue>
                </InfoRow>}
            </InfoTable>

            <LinksContainer>
                {game.links.map((link, index) => (
                    <LogoButton key={index} size={35} source={link.source} linkTo={link.url} />
                ))}
            </LinksContainer>

            <StatusContainer>
                <StatusCircle status={game.status} />
                <span>{game.status}</span>
            </StatusContainer>
        </GameInfoContainer>
    );
};

export default GameInfo;