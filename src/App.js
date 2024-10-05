import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routing from "./Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
