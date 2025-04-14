import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Signup from './Components/Signup';
import Login from './Components/Login';
import BlogListing from './Pages/BlogListing';
import WritePage from './Pages/WriteBlog';
// import privateRoutes from './Store/Private.jsx';
import './index.css';

function App() {
  return (

    <div className="home">
      <Navbar />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-blogs" element={<BlogListing />} />
        <Route path="/write" element={<WritePage />} />

        {/* <Route element={<privateRoutes />}>
          <Route path="/explore" element={<ExplorePage />} />
          
         
          <Route path="/profile" element={<ProfilePage />} />
        </Route> */}


      </Routes>
    </div>

  );
}

export default App;