import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder="Digite seu nome" />
      <CampoTexto label="Jogo" placeholder="Digite seu Jogo" />
      <CampoTexto label="Foto" placeholder="Informe o URL da sua foto" />
    </div>
  );
}

export default App;
