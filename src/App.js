import './App.css';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';


function App() {
    return (
        <div className="App">
          <div className="container">
            <Header />

            <SearchInput />
            <Filter />

            
          </div>
        </div>
    );
}

export default App;
