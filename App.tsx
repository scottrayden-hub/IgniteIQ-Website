import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionShift from './components/SectionShift';
import SectionDistinction from './components/SectionDistinction';
import SectionRoadmap from './components/SectionRoadmap';
import SectionCapabilities from './components/SectionCapabilities';
import SectionCTA from './components/SectionCTA';
import Footer from './components/Footer';
import BriefModal from './components/BriefModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header onOpenBrief={openModal} />
      
      <main>
        <Hero onOpenBrief={openModal} />
        <SectionShift />
        <SectionDistinction />
        <SectionRoadmap />
        <SectionCapabilities />
        <SectionCTA onOpenBrief={openModal} />
      </main>

      <Footer />
      <BriefModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
