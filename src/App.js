import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
