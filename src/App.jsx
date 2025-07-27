import { Routes, Route } from "react-router-dom";
import ChoosePage from "./pages/ChoosePage";


function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <ChoosePage />
        }
      />
    </Routes>
  )
}

export default App
