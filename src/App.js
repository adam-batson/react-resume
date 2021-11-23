import './App.css';
import 'animate.css';
import Header from './Header/Header';
import Background from './Background/Background';
import Nav from './Nav/Nav';
import Content from './Content/Content';

function App() {
  return (
    <div className="App">
      <Background />
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
