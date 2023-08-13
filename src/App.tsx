import React from 'react';
import img from './img.jpeg';

export default function App() {
  return (
    <main>
      <h1>Github Action Examples</h1>
      <a
        href="https://github.com/akulsr0/github-action-examples"
        target="_blank"
        rel="noreferrer"
      >
        [github]
      </a>
      <br />
      <img src={img} alt="some-img" />
    </main>
  );
}
