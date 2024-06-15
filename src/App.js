import './App.css';
import CompanyMotto from './components/companyMotto/CompanyMotto';
import Hero from './components/hero/Hero';
import Menu from './components/menu/Menu';
import ShopItem from './components/shopItem/ShopItem';
import ShowCaseItem from './components/showcaseItem/ShowCaseItem';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <div className="ShowCaseContainer">
        <ShowCaseItem />
        <ShowCaseItem />
        <ShowCaseItem />
      </div>
      <CompanyMotto />
      <div className="ShowCaseContainer">
        <ShowCaseItem />
        <ShowCaseItem />
        <ShowCaseItem />
      </div>
      <div className="ShopItems">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
}

export default App;
