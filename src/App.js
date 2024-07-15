import React from "react";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div>
         <Header />
         <Features />
         <About />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
