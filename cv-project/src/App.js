import './styles/App.css'
import Form from './components/Form.js'
import logo from './logo.png'; // Tell webpack this JS file uses this image


function App() {
  return (
    <div className="App">
      <header className="header"><h1 className="logo-name">
      <a href="https://github.com/gogamoga1/CV-application"><img id="github" src={logo} alt="github" /> CV Application</ a>
        </h1>
      </header>
      <Form />
    </div>
  )
}

export default App
