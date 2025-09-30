import "./App.css";
import { WordSearch } from "./components/WordSearch";
import { DefinitionDisplay } from "./components/DefinitionDisplay";

function App() {
  return (
    <>
      <div className="head">
        <h1>Dictionary</h1>
      </div>

      <WordSearch />
      
      <DefinitionDisplay />
    </>
  );
}

export default App;
