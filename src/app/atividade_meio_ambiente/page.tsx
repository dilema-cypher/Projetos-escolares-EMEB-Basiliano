import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-white">
      <Hero />
      <About />
      <Activities />
    </div>
  );
}