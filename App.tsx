import React, { useMemo, useState } from "react";
import data from "./app";

export default function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const section = useMemo(() => data[sectionIndex], [sectionIndex]);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <h1>GitHub Io Wand UI Library</h1>
          <p>Clean category buttons, three-dot menu, and copy-ready snippets.</p>
        </div>
        <div className="nav-row">
          <button className="btn" onClick={() => setSectionIndex((v) => (v - 1 + data.length) % data.length)}>Back</button>
          <button className="btn primary" onClick={() => setSectionIndex((v) => (v + 1) % data.length)}>Next</button>
          <button className="dots">⋯</button>
        </div>
        <div id="sectionsList" />
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="title-wrap">
            <h2>Build UI Library Website</h2>
            <p>React/TypeScript source version of the same layout.</p>
          </div>
        </div>

        <div className="content-head">
          <div>
            <h3>{section.title}</h3>
            <small>{section.subtitle}</small>
          </div>
        </div>

        <div className="cards">
          {section.items.map((item) => (
            <article className="card" key={item.id}>
              <div className="card-top">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="pill">{item.badge}</div>
              </div>

              {item.snippets.map((snippet) => (
                <div className="snippet" key={snippet.label}>
                  <div className="snippet-head">
                    <strong>{snippet.label}</strong>
                    <button
                      className="copy-btn"
                      onClick={() => navigator.clipboard.writeText(snippet.code)}
                    >
                      Copy
                    </button>
                  </div>
                  <pre>{snippet.code}</pre>
                </div>
              ))}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}