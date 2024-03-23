import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Design from "./components/design/design";
import Market from "./components/market/market";
import Planning from "./components/planning/planning";
import Manufacturing from "./components/manufacturing/manufacturing";
import Sales from "./components/sales/sales";
import External from "./components/external/external";
import "./index.css";
import Homepage from "./components/homepage/homepage";

function App() {
  // const [activePhase, setActivePhase] = useState(null);

  // const phasesData = [
  //   {
  //     name: 'Market Research',
  //     details: 'Details about Market Research...',
  //     // Include more details and subphases as needed
  //   },
  //   {
  //     name: 'Planning',
  //     details: 'Details about Planning...',
  //   },
  //   {
  //     name: 'Desiging',
  //     details: 'Details about Planning...',
  //   },
  //   {
  //     name: 'Manufacturing',
  //     details: 'Details about Planning...',
  //   },
  //   {
  //     name: 'Sales/Marketing',
  //     details: 'Details about Planning...',
  //   },
  //   // ... other phases
  // ];

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard><Homepage /></Dashboard>} />
          <Route
            path="/market"
            element={
              <Dashboard>
                <Market />
              </Dashboard>
            }
          />
          <Route
            path="/planning"
            element={
              <Dashboard>
                <Planning />
              </Dashboard>
            }
          />
          <Route
            path="/design"
            element={
              <Dashboard>
                <Design />
              </Dashboard>
            }
          />
          <Route
            path="/manufacturing"
            element={
              <Dashboard>
                <Manufacturing />
              </Dashboard>
            }
          />
          <Route
            path="/sales"
            element={
              <Dashboard>
                <Sales />
              </Dashboard>
            }
          />
          <Route
            path="/market/b2c"
            element={
              <Dashboard>
                <External />
              </Dashboard>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
