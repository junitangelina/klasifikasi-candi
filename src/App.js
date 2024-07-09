import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Klasifikasi from './Klasifikasi';
import Anggota from './Anggota';
import Dosen from './Dosen';
import ImageProcessing from './ImageProcessing';

function App() {
  return (
    <div className='bg-gray-100'>
      <div className='pt-[96px]'>
        <Header /></div>
      <HeroSection />
      <Klasifikasi />
      <Anggota />
      <Dosen />
      <ImageProcessing />
    </div>
  );
}

export default App;
