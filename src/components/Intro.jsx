/******INTRO MODULE******/

/***COMPONENT***/
export default function Intro(data) {
  /*DOM*/
  return (
    <section id="intro">
      <div className="intro">
        <div className="over">
          <img
            fetchpriority="high"
            src="/img/LogoL.webp"
            className=" logo img-responsive page-scroll top"
            id="introSec"
            alt="Logo du Service Numérique d'Accompagnement Pédagogique"
          />{" "}
          <h1> Service Numérique d'Accompagnement Pédagogique</h1>
        </div>
        <div className="under"></div>
      </div>
    </section>
  );
}
