
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Student from './components/Student';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Footer/>
      <Student/>
      <StudentList/>
    </div>
  );
}

export default App;
