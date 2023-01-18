import Navbar from "./views/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import Services from "./views/pages/Services";
import Story from "./views/pages/Story";

const App = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="story" element={<Story />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;