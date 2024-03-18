import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [talento, setTalento] = useState("");
  const [foto, setFoto] = useState("");
  const [grupo, setGrupo] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      talento,
      foto,
      grupo,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card da pessoa</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Talento"
          placeholder="Digite seu Talento"
          valor={talento}
          aoAlterado={(valor) => setTalento(valor)}
        />
        <CampoTexto
          label="Foto"
          placeholder="Informe o URL da sua foto"
          valor={foto}
          aoAlterado={(valor) => setFoto(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Grupo"
          itens={props.grupos}
          valor={grupo}
          aoAlterado={(valor) => setGrupo(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
