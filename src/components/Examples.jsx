import { useState } from "react";
// these are technically reg functions but they must only be called inside react component or inside of other react hooks.
//! call directly inside component not in some other function inside component and call on top level inside component
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

//* React only executes a component once when it is first encountered somewhere in your code hence we will use state hook
export default function Examples() {
  //* const stateArray = useState('Please click a button');
  //things inside parenthesis is default parameter. and it returns an array with EXACTLY 2 ELEMENTS
  // or
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //* selectedButton => 'Components' , 'JSX' , 'Props', 'State'
    //* (basically it should be a string pointing to that button which is being clicked)
    setSelectedTopic(selectedButton); // updating the state or scheduling the update
    //* console.log(selectedTopic);
    // this will show previous state value because the new value will be obtained once the component finishes execution it will not be available just after we schedule the update
  }
  return (
    //* this id here is for css not a prop hence we will use another way to put css to this section tag
    //! the props are not automatically forwarded to JSX code used inside the component. like id prop for Section is not passed to section tag inside Section component(we have to explicitly set this)
    <Section id="examples" title="Examples">
      {/* can pass jsx code into attributes as well */}
      <Tabs
        //* Dynamically setting the wrapper around the buttons
        buttonsContainer="menu"
        //* built in elements will be written just as identifie : "ul" "menu"
        //* custom components will be passed dynamically : {Section}
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {/* 
          {!selectedTopic && <p>Please select a topic.</p>}
          second statement taht comes after AND will be printed
          similarly we can also do:
          {!selectedTopic && <div> ..... </div> }

          OR
          
          (write this outside of return)
          let tabContent = <p>Please select a topic.</p>;
          if(selectedTopic){
          tabcontent = <div>.....
          }

          below menu tag output the variable:
          {tabContent}
          
          */}
        {!selectedTopic ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            {/*  can do so only when property name same as identifiers(which is in this case) */}
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
