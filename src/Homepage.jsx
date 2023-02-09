/******HOMEPAGE******/

/***COMPONENTS***/
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

/***COMPONENT***/
export default function Homepage() {
  /*DOM*/
  return (
    <div>
      <div className="homepage">
        <Header />
        <Intro />
      </div>
    </div>
  );
}
