// Main app 

import NavBar from "./components/NavBar/navbar";
import Lighthouse from "./components/Lighthouse/lighthouse";
import Introduction from "./components/Introduction/introduction";
import ColourGradient from "./components/ColourGradient/colourgradient";

// need to create and import A gradient that fades from lighthous black to night blue

// "Home" component will be titled as lighthouse.js


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Lighthouse/>
      <ColourGradient/>
      <Introduction/>
    </div>
  );
}

export default App;
