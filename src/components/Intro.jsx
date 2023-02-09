/******INTRO MODULE******/

/***COMPONENT***/
export default function Intro(data) {
  /*DOM*/
  return (
    <section id="intro">
      <div className="intro">
        <img
          fetchpriority="high"
          src="/img/LogoL.webp"
          className=" logo img-responsive page-scroll top"
          alt="Logo du Service Numérique d'Accompagnement Pédagogique"
        />{" "}
        <div className="under">
          {/*<h2>Bienvenue</h2>*/}
          <p>
            Les missions de notre service s’articulent autour de deux
            composantes :{" "}
            <strong>l’accompagnement à la transformation numérique</strong> et
            la <strong>conception de ressources.</strong>
          </p>
          <p>
            Nous proposons notre appui aux enseignants afin d'
            <strong>identifier leurs besoins</strong>, de leur{" "}
            <strong>proposer des solutions numériques adaptées</strong>, de{" "}
            <strong>
              créer en collaboration des supports pédagogiques adaptés
            </strong>{" "}
            et de <strong> faciliter la prise en main des outils dédiés</strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
