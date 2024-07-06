// Main app 

import NavBar from "./components/NavBar/navbar";
import Introduction from "./components/Introduction/introduction";
// "Home" component will be titled as lighthouse.js


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Introduction/>
    </div>
  );
}

export default App;
