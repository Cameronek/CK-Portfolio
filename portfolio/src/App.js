// Main app 

import NavBar from "./components/NavBar/navbar";
import Lighthouse from "./components/Lighthouse/lighthouse";
import Introduction from "./components/Introduction/introduction";

// need to create and import A gradient that fades from lighthous black to night blue

// "Home" component will be titled as lighthouse.js


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Lighthouse/>
      <Introduction/>
    </div>
  );
}

export default App;
