import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card da pessoa</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Talento" placeholder="Digite seu Talento" />
        <CampoTexto label="Foto" placeholder="Informe o URL da sua foto" />
        <button type="submit" />
      </form>
    </section>
  );
};

export default Formulario;
