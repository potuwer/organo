import Colaborador from "../Colaborador";
import "./Grupo.css";

const Grupo = (props) => {
  const corSecundaria = { backgroundColor: props.corSecundaria };
  const corPrimariaBorda = { borderColor: props.corPrimaria };

  return props.colaboradores.length > 0 ? (
    <section className="grupo" style={corSecundaria}>
      <h3 style={corPrimariaBorda}>{props.titulo}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            nome={colaborador.nome}
            talento={colaborador.talento}
            foto={colaborador.foto}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Grupo;
