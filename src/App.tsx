import TablePage from "@/pages/TablePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
