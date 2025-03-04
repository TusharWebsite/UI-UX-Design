import "./App.css";
import Article from "./components/Article";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Says from "./components/Says";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Article />
      <Expertise/>
      <Work />
      <Experience />
      <Blog />
      <Says />
      <Questions />
      <Marque />
      <Footer />
    </>
  );
}

export default App;
