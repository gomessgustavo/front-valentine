import { useEffect, useState } from "react";
import Vara from "vara";
import "./EscrevendoTexto.style.css";

export const EscrevendoTexto = ({ text }: { text: string }) => {
  useEffect(() => {
    document.querySelector("#vara-container > svg:last-of-type")?.remove();
    let value = window.innerWidth;
    if (value <= 450) {
      value = 35;
    } else if (value >= 1280) {
      value = 90;
    } else {
      value = 45;
    }
    const valorFixado = value.toFixed(0);

    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text,
          y: 150,
          fromCurrentPosition: { y: false },
          duration: 2500,
        },
      ],
      {
        strokeWidth: 2,
        color: "White",
        fontSize: Number(valorFixado),
        textAlign: "center",
      }
    );
  }, [window.innerWidth]);

  return <div id="vara-container" className=""></div>;
};
