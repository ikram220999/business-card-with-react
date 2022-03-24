import React from "react";

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="name">
        <h1>Muhammad Ikram</h1>
        <h4>React Developer</h4>
      </div>
      <div className="card-button">
        <button className="white">
          <i class="material-icons white">mail</i> Email
        </button>
        <button className="blue">
          <i className="material-icons blue">mail</i> LinkedIn
        </button>
      </div>
      <br />
      <div className="text">
        <h3>About</h3>
        <p>
          With the online text generator you can process your personal Lorem
          Ipsum enriching it with html elements that define its structure, with
          the possibility to insert external links, but not only.
        </p>
      </div>

      <div className="text">
        <h3>Interest</h3>
        <p>
          With the online text generator you can process your personal Lorem
          Ipsum enriching it with html elements that define its structure, with
          the possibility to insert external links, but not only.
        </p>
      </div>
    </div>
  );
}
