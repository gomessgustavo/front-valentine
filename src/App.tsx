import { useEffect, useState } from "react";
import "./App.css";
import { BackgroundComponent } from "./components/background/Background.component";
import { EscrevendoTexto } from "./components/escrevendo-texto/EscrevendoTexto.component";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  return width < 500 ? (
    <div className="App">
      <BackgroundComponent />
      <EscrevendoTexto text="Feliz dia dos namorados Gabriela B Falk" />
    </div>
  ) : (
    <div></div>
  );
}

export default App;
