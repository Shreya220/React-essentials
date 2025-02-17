import reactImg from "../../assets/react-core-concepts.png";
// we have to go up one level into src then into assets hence .. for two levels use ../../
// this is not something we can normally do in a javascript file but here it will work because of  same build process that will make JSX work.
import "./Header.css";
// the underlying build process will get this statement processed
//! LIMITATION TO BE AWARE OF
// styles will be applied to header elements thorughout the project not liminted to Header component only 


const reactDescription = [
  "Fundamental",
  "Core",
  "Crucial",
  "Important",
  "Significant",
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[genRandomInt(4)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      {/* we dont add quotes here as quotes will create a simple string value instead of using the value stored in reactImg. WE HAVE DYNAMIC VALUE USED HERE !! */}
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
