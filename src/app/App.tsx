import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Schedule } from './components/Schedule';
import { LiveStream } from './components/LiveStream';
import { Location } from './components/Location';
import { Contribution } from './components/Contribution';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Schedule />
        <About />
        <LiveStream />
        <Location />
        <Contribution />
      </main>
      <Footer />
    </div>
  );
}
