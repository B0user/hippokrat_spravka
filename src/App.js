// Modules
import { Routes, Route } from "react-router-dom";
// Layouts
import Layout from "./components/Layout";
import HelloStrangers from "./features/HelloStrangers";
import ShowSpravka from "./features/ShowSpravka";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HelloStrangers />} />
        <Route path="test" element={<HelloStrangers />} />
        <Route path=":id" element={<ShowSpravka />} />
      </Route>
    </Routes>
  );
}

export default App;
