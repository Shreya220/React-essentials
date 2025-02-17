import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* WE CAN OUTPUT AN ARRAY OF DATA(can be string or jsx code as well) IN JSX 
                      {['HELLO', 'WORLD']}
                      we can tranform array in javascript with map() method which produces a new array based on exisiting array.takes an arrow function which receives an array item as i/p. 
        
                      this is used so like even if we dont have 4 items in array it 3wont show empty space in ui rather it will elements how much ever they are without leaving any space depicting that one is missing.(this was happening due to our previous approach of CORE_CONCEPT[1])
        
                      below is the quick and easy method
                    */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* key uniquely identifies a list item  */}

        {/* <CoreConcept
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}
                    /> */}
        {/* use 1st one or 2nd one */}

        {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
        {/* spread operator to pull out all the key-value pairs of an object */}

        {/* <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
        {/* prop names similar to property names of object hence we can use this shortcut  */}
      </ul>
    </section>
  );
}
