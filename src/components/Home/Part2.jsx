import React from "react";

function Part2() {
  return (
    <section className="part-2">
      <article className="article2">
        <h2>Enjoy on your TV</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </article>
      <video controls>
        <source
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          type="video/mp4"
          autoPlay
        ></source>
      </video>
    </section>
  );
}

export default Part2;
