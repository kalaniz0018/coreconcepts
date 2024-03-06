import React, { useState, useEffect } from "react";
import { EXAMPLES } from "../dataExamples.js";
import TabButton from "./TabButton/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

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
        <Tabs
        buttonsContainer="menu"
          buttons={
            <>
              <TabButton
                label="Components"
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              />
              <TabButton
                label="JSX"
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              />
              <TabButton
                label="Props"
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              />
              <TabButton
                label="State"
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              />
            </>
          }
        >
          {tableContent}
        </Tabs>

        {/*        {!selectedTopic && <p> Please select a topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h1>Utilizando el &&</h1>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}
      </Section>
    </>
  );
};

export default Examples;
