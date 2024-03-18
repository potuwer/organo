import Colaborador from "../Colaborador";
import "./Grupo.css";

const Grupo = (props) => {
  const corSecundaria = { backgroundColor: props.corSecundaria };
  const corPrimariaBorda = { borderColor: props.corPrimaria };

  return (
    <section className="grupo" style={corSecundaria}>
      <h3 style={corPrimariaBorda}>{props.titulo}</h3>
      <Colaborador />
      <Colaborador />
    </section>
  );
};

export default Grupo;
