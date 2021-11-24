import './App.css';
import 'animate.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
