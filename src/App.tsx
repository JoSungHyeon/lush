import Header from './components/Header';
import Banner from './components/Banner';
import MiddleText from './components/MiddleText';
import Items from './components/Items';
import MiddleBanner from './components/MiddleBanner';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MiddleText />
      <Items />
      <MiddleBanner />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default App;
