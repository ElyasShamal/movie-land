import React from "react";
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <main className="container">
      <PartOne />
      <PartTwo />
      <PartThree />
      <Footer />
    </main>
  );
}

export default Home;
