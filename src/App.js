import Navbar from "./views/components/Navbar";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Story from "./views/pages/Story";

const App = (props) => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;