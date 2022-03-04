import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./page/Home/Home/Home";
import TitleText from "./page/Shared/TitleText/TitleText";

function App() {
  return (
     <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <TitleText></TitleText>
    </BrowserRouter>
    
  
  );
}

export default App;
