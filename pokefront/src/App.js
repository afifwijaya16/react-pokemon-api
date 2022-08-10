import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
