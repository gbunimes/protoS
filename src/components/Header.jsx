/******HEADER MODULE******/

/***GENERAL***/

/***COMPONENTS***/

/***COMPONENT***/
export default function Header(data) {
    /*DOM*/
    return (
        <header id="header">
      <nav role="navigation" className="top-nav primary-navigation Hheader">
        <div>

        {/*Site Logo*/}
          <a href="/accueil">
            <img
              fetchpriority="high"
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.logo1 +
                data.data1.UimgLinks.IL1B
              }
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={data.data1 ? data.data1.nom : "loading..."}
            />{" "}
          </a>
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
            <a
              href="#intro"
              className="page-scroll"
            >
             Accueil
            </a>
          </li>

                    {/*2 - L'équipe*/}
                    <li>
            <a
              href="#équipe"
              className="page-scroll"
            >
             L'équipe
            </a>
          </li>
          

                              {/*3 - Contact*/}
                    <li>
            <a
              href="contact"
              className="page-scroll"
            >
             Contact
            </a>
          </li>
    


        </ul>
      </nav>
    </header>
    );
}