import styled from "styled-components";

export interface BubbleSpanProps {
  $tempo: number;
}

export const BackgroundBubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BubbleSpan = styled.span<BubbleSpanProps>`
  animation: animate 15s linear infinite;

  animation-duration: calc(125s / ${(props) => props.$tempo});
  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translate(-10vh) scale(1);
    }
  }
`;

export const Bubbles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  span {
    position: relative;
    width: 30px;
    height: 30px;
    background: #da2600;
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #ff6f6f, 0 0 50px #ff6f6f, 0 0 100px #ff6f6f;

    @media (max-width: 450px) {
      width: 20px;
      height: 20px;
    }
  }

  span:nth-child(even) {
    background: #b00000;
    box-shadow: 0 0 0 10px #ce5a5a, 0 0 50px #ce5a5a, 0 0 100px #ce5a5a;
  }
`;
