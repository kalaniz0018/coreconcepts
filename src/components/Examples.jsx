import React , { useState, useEffect } from "react";
import { EXAMPLES } from "../dataExamples.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";

const Examples = () => {
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
    <>
      <Section title="Examples" id="examples">
       
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
      </Section>
    </>
  );
};

export default Examples;
