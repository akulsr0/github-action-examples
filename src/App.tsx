import React from 'react';
import { get } from 'lodash';

const obj = {
  name: 'John Doe',
};

export default function App() {
  const name = get(obj, 'name');
  return (
    <main>
      <h1>Github Action Examples</h1>
      <p>{name}</p>
      <a
        href="https://github.com/akulsr0/github-action-examples"
        target="_blank"
        rel="noreferrer"
      >
        [github]
      </a>
    </main>
  );
}
