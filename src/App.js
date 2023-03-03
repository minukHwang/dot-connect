import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ReportMain from "./pages/ReportMain";
import ReportDetail from "./pages/ReportDetail";
import ReportSimple from "./pages/ReportSimple";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReportMain />} />
        <Route path="/detail" element={<ReportDetail />} />
        <Route path="/simple" element={<ReportSimple />} />
      </Routes>
    </div>
  );
}

export default App;
