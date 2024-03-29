
import React,{useState} from 'react'
import Navbar from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from './components/Alert';



function App() {
  const[mode, setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <br/>
      <div className="container">
        <TextForm heading="Enter the text to analyze" className="my-3" mode={mode}/>
      </div>
    </>
  );
}

export default App;
