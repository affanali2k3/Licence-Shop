import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdmissionPage } from './Pages/Admission';
import { ContactPage } from './Pages/Contact';
import { Programs } from './Pages/Programs';
import { Courses } from './Pages/Courses';
import { Challenges } from './Pages/Challenges';
import { SingleChallenge } from './Pages/SingleChallenge';
import { HomePage } from './Pages/Home';
import { SingleCourse } from './Pages/SingleCourse';
import { AboutPage } from './Pages/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/admission' element={<AdmissionPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/programs' element={<Programs />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/challenges' element={<Challenges />}></Route>
          <Route path='/single-challenge' element={<SingleChallenge />}></Route>
          <Route path='/single-course' element={<SingleCourse />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
