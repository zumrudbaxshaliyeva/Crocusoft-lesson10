import "./App.css";
import BadgetPlanner from "./pages/BadgetPlanner";
import { BadgetProvider } from "./shared/context";

function App() {
  return (
    <>
      <BadgetProvider>
        <BadgetPlanner />
      </BadgetProvider>
    </>
  );
}

export default App;
