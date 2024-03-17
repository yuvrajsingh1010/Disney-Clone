import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from "./components/Header";
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import VideoList from './components/VideoList';
import { useEffect } from 'react';
import TrailerList from './components/TrailerList';


function App() {
  document.title = "Disney-Clone";
  const setFavicon = (faviconUrl) => {
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = faviconUrl;
    document.head.appendChild(link);
  };

  useEffect(() => {
    // Set your image URL here
    const faviconUrl = "/images/favicon.svg";
    // Call the function to set the favicon
    setFavicon(faviconUrl);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
        <Routes>
          <Route path='/video/:id' element={<VideoList />} />
        </Routes>
        <Routes>
          <Route path='/trailer/:id' element={<TrailerList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
