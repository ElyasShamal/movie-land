import React from "react";
import Form from "./Form";

function Home() {
  return (
    <main className="container">
      <section className="home-section">
        <article className="article">
          <p style={{ fontSize: "3rem" }}>
            Unlimited movies, TV shows, and more
          </p>
          <p style={{ paddingTop: "1rem" }}>Watch anywhere. Cancel anytime.</p>
        </article>
        <Form />
      </section>
    </main>
  );
}

export default Home;
