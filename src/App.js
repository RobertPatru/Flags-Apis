import './App.css';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import FlagsContainer from './components/FlagsContainer';


function App() {
    return (
        <div className="App">
            <Header />
            <div className="max-width">
                <div className="search-input--and--filter-container">
                    <SearchInput />
                    <Filter />
                </div>

            <FlagsContainer />
            </div>
          
        </div>
    );
}

export default App;
