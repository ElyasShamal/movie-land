import React from "react";
import Form from "./Form";

function PartOne() {
  return (
    <section className="home-section">
      <article className="article">
        <p style={{ fontSize: "2rem" }}>Unlimited movies, TV shows, and more</p>
        <p style={{ paddingTop: "1rem" }}>Watch anywhere. Cancel anytime.</p>
      </article>
      <Form />
    </section>
  );
}

export default PartOne;
