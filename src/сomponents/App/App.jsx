import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';
import'./App.scss';

function App() {
  return (
    <div className="app">
      <Search />
      <Pagination />
      <CardList />
    </div>
  );
}

export default App;
