import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //* we dont need to wrap the elements in an extra unnecessary div rather than that we can use <Fragment></Fragment>(old syntax) component to put all sibling tags/elements inside it  OR just use <> </>(new syntax) alternative to Fragment which is recognized by React
    <Fragment>
      <Header></Header>
      {/* or use
       <Header/>
       */}
      <main>
         {/* we made this components because due to the useState the Header Component was also getting updated again and again which was not needed hence we split up these components. */}
        <CoreConcepts/>
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
