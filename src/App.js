import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Grupo from "./componentes/Grupos";
import Rodape from "./componentes/Rodape";

function App() {
  const grupos = [
    {
      titulo: "Minecraft",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      titulo: "Overwatch",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      titulo: "Valorant",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },
    {
      titulo: "Programação",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      titulo: "Banco de Dados",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      titulo: "Edição",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      titulo: "Design",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map((grupo) => grupo.titulo)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {grupos.map((grupo) => (
        <Grupo
          key={grupo.titulo}
          titulo={grupo.titulo}
          corPrimaria={grupo.corPrimaria}
          corSecundaria={grupo.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.grupo === grupo.titulo
          )}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
