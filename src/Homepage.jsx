/******HOMEPAGE******/

/***COMPONENTS***/
import Header from "./components/Header";
import Intro from "./components/Intro";
import Team from "./components/Team";
import Footer from "./components/Footer";

/***COMPONENT***/
export default function Homepage() {
  /*DOM*/
  return (
    <div>
      <div className="homepage">
        <Header />
        <Intro />
        <Team />
      </div>
    </div>
  );
}
