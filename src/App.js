import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  // new variable 
  const [background, setBackground] = useState('light');
  const [yellowMode, setYellowMode] = useState('light');
  const [blueMode, setBlueMode] = useState('light');
  const [redMode, setRedMode] = useState('light');
  const [labelText, setLabelText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setLabelText('light');
      setBackground('dark');
      setYellowMode('light');
      setBlueMode('light');
      setRedMode('light');
      document.body.style.backgroundColor = '#2C3333';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      setLabelText('dark');
      setBackground('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const toggleYellowMode = () => {
    if (yellowMode === 'light') {
      setYellowMode('warning');
      setBackground('warning');
      setBlueMode('light');
      setMode('light');
      setRedMode('light');
      document.body.style.backgroundColor = '#F4CE14';
    }
    else {
      setYellowMode('light');
      setBackground('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const togglePrimaryMode = () => {
    if (blueMode === 'light') {
      setBlueMode('primary');
      setYellowMode('light');
      setRedMode('light')
      setMode('light');
      setBackground('primary');
      document.body.style.backgroundColor = '#2D4263';
    }
    else {
      setBlueMode('light');
      setBackground('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const toggleRedMode = () => {
    if (redMode === 'light') {
      setRedMode('danger');
      setBlueMode('light');
      setYellowMode('light');
      setMode('light');
      setBackground('danger');
      document.body.style.backgroundColor = '#FF6969';
    }
    else {
      setRedMode('light');
      setBackground('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar title={"TextUtils"} toggleRedMode={toggleRedMode} togglePrimaryMode={togglePrimaryMode} navbarBg={background} toggleYellowMode={toggleYellowMode} toggleMode={toggleMode} lableText={labelText}></Navbar >
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={background}></TextForm>} />
            <Route exact path='/about' element={<About background={background} />} />
          </Routes>
        </div >
      </Router>
    </>
  );
}

export default App;
