import './App.css';
import 'animate.css';
import Header from './Header/Header';
import Background from './Background/Background';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <Background />
      <Sidebar />
      <Header />
      <Content />
    </div>
  );
}

export default App;
