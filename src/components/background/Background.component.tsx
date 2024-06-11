import { useEffect, useState } from "react";
import { BackgroundBubbles, BubbleSpan, Bubbles } from "./Background.styles";
import { Home } from "../../screens/conteudo/Conteudo.screen";

export const BackgroundComponent = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const value = window.innerWidth / 40;
    setWidth(Number(value.toFixed(0)));
  }, [window.innerWidth]);
  return (
    <BackgroundBubbles>
      <Home />
      <Bubbles>
        {Array.from(Array(width).keys()).map((i) => (
          <BubbleSpan
            key={i}
            $tempo={Math.floor(Math.random() * 30)}
          ></BubbleSpan>
        ))}
      </Bubbles>
    </BackgroundBubbles>
  );
};
