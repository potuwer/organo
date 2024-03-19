import "./Colaborador.css";

const Colaborador = ({ nome, foto, talento, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={foto} alt={nome} />
      </div>

      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{talento}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
