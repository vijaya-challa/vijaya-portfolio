import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import InfoToast from './components/InfoToast';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import Projects from './components/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState( localStorage.getItem("mode") === 'dark' ? true : false);

  useEffect(() => {
      const currMode = isDarkMode ? 'dark' : 'light';
      localStorage.setItem("mode", currMode);
      if (currMode === 'dark') {
        document.body.style.backgroundColor = '#2f231d';
        document.body.style.color = 'white';

      } else {
        document.body.style.backgroundColor = '#bb9e90';
        document.body.style.color = 'black';
      }
  }, [isDarkMode]);
  
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar mode={isDarkMode ? 'dark' : 'light'} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></MyNavbar>
      </header>
      <Routes>
        <Route path='/' element={<Home mode={isDarkMode ? 'dark' : 'light'}></Home>}/>
        <Route path='/projects' element={<Projects mode={isDarkMode ? 'dark' : 'light'}></Projects>}/>
        <Route path='/contact' element={<ContactMe mode={isDarkMode ? 'dark' : 'light'}></ContactMe>}/>
        <Route path='*' element={<Home mode={isDarkMode ? 'dark' : 'light'}></Home>}/>
      </Routes>
      <MyFooter mode={isDarkMode ? 'dark' : 'light'}></MyFooter>
      <InfoToast/>
    </div>
  );
}

export default App;
