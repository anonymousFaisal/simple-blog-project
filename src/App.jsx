import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ByCategoryPage from "./Pages/ByCategoryPage";
import DetailsPage from "./Pages/DetailsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>} />
            <Route path="/details/:postID" element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
