import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const grupos = [
    "Minecraft",
    "Overwatch",
    "Valorant",
    "Programação",
    "Banco de Dados",
    "Edição",
    "Design",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card da pessoa</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Talento"
          placeholder="Digite seu Talento"
        />
        <CampoTexto label="Foto" placeholder="Informe o URL da sua foto" />
        <ListaSuspensa obrigatorio={true} label="Grupo" itens={grupos} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
