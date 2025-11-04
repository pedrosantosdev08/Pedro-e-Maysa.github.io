import FotoEspelho from "../assets/foto-espelho.jpg";
import FotoAnoNovo from "../assets/foto-anonovo.jpg";
import FotoPiscina from "../assets/foto-piscina.jpg";

export const Historia = () => {
  return (
    <>
      <section>
        <article>
          <h3>O Começo</h3>
          <p>
            Quando tudo começou e nossos corações se encontraram pela primeira
            vez. Cada momento era mágico e especial.
          </p>
        </article>

        <article>
          <h3>Crescendo Juntos</h3>
          <p>
            Nosso amor ficou mais forte a cada dia. Compartilhamos sonhos,
            risadas e construímos memórias inesquecíveis.
          </p>
        </article>

        <article>
          <h3>Hoje</h3>
          <p>
            Quase três anos incríveis juntos. Nosso amor continua crescendo e se
            fortalecendo a cada momento.
          </p>
        </article>

        <h2>Nossos Momentos</h2>

        <article className="galeria-momentos">
          <img src={FotoEspelho} alt="foto-espelho" />
          <img src={FotoAnoNovo} alt="FotoAnoNovo" />
          <img src={FotoPiscina} alt="FotoPiscina" />
        </article>

        <article>
          <p className="p-final">Te amo hoje e sempre 💕</p>
        </article>
      </section>
    </>
  );
};
