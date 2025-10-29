import React from 'react';
import styled from 'styled-components';

interface LogoProps {
    source: string;
    size: number;
    margin?: number;
    linkTo: string;
}

const LogoContainer = styled.div<{ size: number; margin: number; disabled?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  min-width: ${({ size }) => size * 0.5}px;
  min-height: ${({ size }) => size * 0.5}px;
  border-radius: 50%;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s ease-in-out;
  margin: ${({ margin }) => margin}px;
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.1)')};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.9)')};
  }

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.65}px;
    height: ${({ size }) => size * 0.65}px;
    margin: ${({ margin }) => margin * 0.65}px;
  }
`;

const LogoImage = styled.img<{ size: number; disabled?: boolean }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  object-fit: cover;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};

  @media (max-width: 768px) {
    width: ${({ size }) => size * 0.65}px;
    height: ${({ size }) => size * 0.65}px;
  }
`;

const LogoButton: React.FC<LogoProps> = ({ source, size, margin = 0, linkTo }) => {
    const isDisabled = linkTo.includes("unavailable");

    const handleClick = () => {
        if (!isDisabled) {
            window.open(linkTo, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <LogoContainer
            onClick={handleClick}
            size={size}
            margin={margin}
            disabled={isDisabled}
            title={isDisabled ? "Unavailable" : ""}
        >
            <LogoImage
                src={`${process.env.PUBLIC_URL}${source}`}
                alt="logo"
                size={size}
                disabled={isDisabled}
            />
        </LogoContainer>
    );
};

export default LogoButton;
