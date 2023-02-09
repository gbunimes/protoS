/******HEADER MODULE******/

/***GENERAL***/

/***COMPONENTS***/

/***COMPONENT***/
export default function Header() {
  /*DOM*/
  return (
    <header id="header">
      <nav role="navigation" className="top-nav primary-navigation Hheader">
        <div className="logoText">
          {/*Site Logo*/}
          <a href="/accueil">
            <img
              fetchpriority="high"
              src="/img/LogoS.webp"
              className=" logo img-responsive page-scroll"
              href="#page-top"
              alt="Logo du Service Numérique d'Accompagnement Pédagogique"
            />{" "}
          </a>
          <h1> Service Numérique d'Accompagnement Pédagogique</h1>
        </div>

        {/*Responsive Burger Menu*/}
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>

        {/*Menu*/}
        <ul className="menu">
          {/*1 - Accueil*/}
          <li>
            <a href="#Accueil" className="page-scroll">
              Accueil
            </a>
          </li>

          {/*2 - L'équipe*/}
          <li>
            <a href="#équipe" className="page-scroll">
              L'équipe
            </a>
          </li>

          {/*3 - Contact*/}
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
