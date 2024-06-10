import "./App.css";
import { BackgroundComponent } from "./components/background/Background.component";
import { EscrevendoTexto } from "./components/escrevendo-texto/EscrevendoTexto.component";

function App() {
  return (
    <div className="App">
      <BackgroundComponent />
      <EscrevendoTexto text="Feliz dia dos namorados Gabriela B Falk" />
    </div>
  );
}

export default App;
