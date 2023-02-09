/******INTRO MODULE******/

/***COMPONENT***/
export default function Intro() {
  /*DOM*/
  return (
    <section id="intro">
      <div className="intro">
        <img
          fetchpriority="high"
          src="/img/LogoL.webp"
          className=" logo img-responsive"
          alt="Logo du Service Numérique d'Accompagnement Pédagogique"
        />{" "}
        <div className="under">
          <p className="firstP">
            Les missions de notre service s’articulent autour de deux
            composantes :
          </p>
          <div className="introInline">
            <img
              src="/img/Ico1.webp"
              className=" iconIntro img-responsive"
              alt="Acompagnement numérique"
            />{" "}
            <p>
              <strong>L’accompagnement à la transformation numérique</strong>
            </p>
          </div>
          <div className="introInline">
            <img
              src="/img/Ico2.webp"
              className=" iconIntro img-responsive"
              alt="Conception de ressources"
            />{" "}
            <p>
              <strong>La conception de ressources.</strong>
            </p>
          </div>
          <p>
            Nous proposons notre appui aux enseignants afin{" "}
            <strong>d'identifier leurs besoins</strong>, de leur{" "}
            <strong>proposer des solutions numériques adaptées</strong>, de{" "}
            <strong>
              créer en collaboration des supports pédagogiques numériques
            </strong>{" "}
            et de <strong> faciliter la prise en main des outils dédiés</strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
