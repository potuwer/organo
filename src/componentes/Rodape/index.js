import "./Rodape.css";

const Rodape = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="facebook.com" target="_blank">
            <img src="/imagens/fb.png" alt="Facebook Logo" />
          </a>
        </li>

        <li>
          <a href="instagram.com" target="_blank">
            <img src="/imagens/ig.png" alt="Instagram Logo" />
          </a>
        </li>

        <li>
          <a href="twitter.com" target="_blank">
            <img src="/imagens/tw.png" alt="Twitter Logo" />
          </a>
        </li>
      </ul>

      <img src="/imagens/logo.png" alt="Logo Organo" />

      <p>Dsenvolvido por Arthur Bizordi com Alura.</p>
    </footer>
  );
};

export default Rodape;
