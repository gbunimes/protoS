/******HOMEPAGE******/

/***COMPONENTS***/
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div>
      <div className="homepage">
        <Header data1={data.data1}/>
        <Intro data1={data.data1}/>
        <Footer data1={data.data1}/>
      </div>
    </div>
  );
}
