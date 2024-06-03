import './App.css';
import CompanyMotto from './components/companyMotto/CompanyMotto';
import Hero from './components/hero/Hero';
import Menu from './components/menu/Menu';
import ShowCaseItem from './components/showcaseItem/ShowCaseItem';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <div className="showCaseContainer1">
        <ShowCaseItem />
        <ShowCaseItem />
        <ShowCaseItem />
      </div>
      <CompanyMotto />
      <div className="showCaseContainer2">
        <ShowCaseItem />
        <ShowCaseItem />
      </div>
    </div>
  );
}

export default App;
