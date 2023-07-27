import React from 'react';
import githubImg from './assets/github.png';

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
      <img src={githubImg} alt="meow" />
    </main>
  );
}
