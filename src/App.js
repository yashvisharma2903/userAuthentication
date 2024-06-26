
import './App.css';
import SignUpForm from './SignUpForm.jsx';
import SignInForm from './SignInForm.jsx';
import { BrowserRouter as Router, Route,Routes, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signIn" element={<SignInForm />} />
          <Route path="/" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
