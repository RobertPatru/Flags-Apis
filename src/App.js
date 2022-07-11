import './App.css';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';


function App() {
    return (
        <div className="App">
            <Header />

            <div className="search-input--and--filter-container">
                <SearchInput />
                <Filter />
            </div>
          
        </div>
    );
}

export default App;
