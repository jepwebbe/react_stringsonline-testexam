import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  transform: rotate(90deg);
  height: auto;
  width: ${(props) => props.width}px;

`;

export const RespImg = ({ src }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const height = container.offsetHeight;
    setWidth(height);
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <StyledImage src={src} width={width} />
    </StyledContainer>
  );
};
