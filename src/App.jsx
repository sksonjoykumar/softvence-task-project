import Banner from './components/banner/Banner';
import BottomBanner from './components/bottom-banner/BottomBanner';
import Footer from './components/footer/Footer';
import Working from './components/interested-working/Working';
import Lend from './components/lend/Lend';
import LoanProducts from './components/loanProducts/LoanProducts';
import Navbar from './components/navbar/Navbar';
import Resources from './components/resources/Resources';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <LoanProducts />
      <Lend />
      <Reviews />
      <Working />
      <Resources />
      <BottomBanner />
      <Footer />
    </>
  );
}

export default App;
