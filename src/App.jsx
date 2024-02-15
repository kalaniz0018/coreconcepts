import React, { useState, useEffect } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./dataExamples.js";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tableContent = <p> Please select a topic</p>;

  if (selectedTopic) {
    tableContent = (
      <div id="tab-content">
        <h1>Guardando en una variable el codigo</h1>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              label="Components"
              onSelect={() => handleSelect("components")}
              isSelected={selectedTopic === "components"}
            />
            <TabButton
              label="JSX"
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              label="Props"
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              label="State"
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            />
          </menu>

          {!selectedTopic && <p> Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h1>Utilizando el &&</h1>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
          {/* {tableContent} */}
        </section>
      </main>
    </div>
  );
}

export default App;
