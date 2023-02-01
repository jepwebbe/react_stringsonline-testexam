import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  aspect-ratio: 1 / 1;
`;

const StyledImage = styled.img`
  align-self: center;
  transform: rotate(-90deg);
  width: ${(props) => props.width}px;
  height: auto;
`;

export const RespImg = ({ src, alt }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const height = container.offsetHeight;
    setWidth(height);
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <StyledImage src={src} width={width} alt={alt} />
    </StyledContainer>
  );
};
