import NavBar from './components/NavBar';
import HomeMessage from './components/HomeMessage';
import RecentSpendFeed from './components/RecentSpendFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NavBar />
        <HomeMessage />
        <RecentSpendFeed />
      
      </header>
   
    </div>
  );
}

export default App;
