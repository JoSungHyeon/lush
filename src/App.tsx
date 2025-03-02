import Header from './components/Header';
import Banner from './components/Banner';
import MiddleText from './components/MiddleText';
import Items from './components/Items';
import MiddleBanner from './components/MiddleBanner';
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MiddleText />
      <Items />
      <MiddleBanner />
    </div>
  );
};

export default App;
