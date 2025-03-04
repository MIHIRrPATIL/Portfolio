import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RollOver = ({
  defaultText = "Next",
  hoverText = null, // if not provided, we use defaultText on hover too
  linkPath = "/",
  buttonBgColor = "transparent",
  buttonBorderColor = "none",
  hoverBgColor = "white",
  dTcolor = "white",  // default text color
  hTcolor = "grey"    // hover text color
}) => {
  // Use the default text if hoverText is not provided.
  const effectiveHoverText = hoverText || defaultText;
  
  return (
    <StyledWrapper
      buttonBgColor={buttonBgColor}
      buttonBorderColor={buttonBorderColor}
      hoverBgColor={hoverBgColor}
      dTcolor={dTcolor}
      hTcolor={hTcolor}
    >
      <Link to={linkPath}>
        <button>
          <div className="default-btn">
            <span>{defaultText}</span>
          </div>
          <div className="hover-btn">
            <span>{effectiveHoverText}</span>
          </div>
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    border-radius: 50px;
    background-color: ${(props) => props.buttonBgColor};
    border: solid 4px ${(props) => props.buttonBorderColor};
    font-family: inherit;
  }

  .default-btn,
  .hover-btn {
    background-color: ${(props) => props.buttonBgColor};
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    border-radius: 50px;
    transition: all 0.3s ease;
  }

  .hover-btn {
    position: absolute;
    inset: 0;
    background-color: ${(props) => props.hoverBgColor};
    transform: translate(0%, 100%);
  }

  .default-btn span {
    color: ${(props) => props.dTcolor};
  }

  .hover-btn span {
    color: ${(props) => props.hTcolor};
  }

  button:hover .default-btn {
    transform: translate(0%, -100%);
  }

  button:hover .hover-btn {
    transform: translate(0%, 0%);
  }
`;

export default RollOver;
