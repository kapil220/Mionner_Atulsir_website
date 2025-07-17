import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AccountOpeningPage from './components/AccountOpeningPage';
import ServicesPricingPage from './components/ServicesPricingPage';
import WhyChooseUs from './components/WhyChooseUs';
import FindDetails from './components/FindDetails';
import AboutUsFooter from './components/AboutusFooter';

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      {/* Social Links (Left Side) */}
      

      
      

      {/* Page Content */}
      <Navbar />
      <Hero />
      <AccountOpeningPage />
      <ServicesPricingPage />
      <WhyChooseUs />
      <FindDetails />
      <AboutUsFooter />
   
    </main>
  );
}
