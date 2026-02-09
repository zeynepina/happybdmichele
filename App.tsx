
import React, { useState } from 'react';
import { TabType, BookingSlot } from './types';
import Overview from './components/Overview';
import Encyclopedia from './components/Encyclopedia';
import Reservations from './components/Reservations';
import Guide from './components/Guide';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.OVERVIEW);
  
  const [bookingSlots, setBookingSlots] = useState<BookingSlot[]>([
    { id: 'lunch', title: 'Lunch', time: '13:00' },
    { id: 'palazzo', title: 'Palazzo Comunale', time: '14:30' },
    { id: 'torre', title: 'Torre Ghirlandina', time: '16:30' },
    { id: 'aperitivo', title: 'Aperitivo', time: '18:30' },
  ]);

  const tabs = [
    { id: TabType.OVERVIEW, label: 'Discover', icon: '🏛️' },
    { id: TabType.ENCYCLOPEDIA, label: 'Encyclopedia', icon: '🏎️' },
    { id: TabType.RESERVATIONS, label: 'Reservations', icon: '🎫' },
    { id: TabType.GUIDE, label: 'Travel Guide', icon: '🍷' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] font-['Pixelify_Sans'] selection:bg-red-100 selection:text-red-900">
      <header className="bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 h-[100px] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[32px] font-bold text-red-600 leading-none">
              Happy Birthday Michele!
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[14px] font-bold tracking-widest uppercase transition-colors ${
                  activeTab === tab.id ? 'text-red-600' : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-[1200px] mx-auto w-full px-4 py-8">
        {activeTab === TabType.OVERVIEW && (
          <Overview 
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}
        {activeTab === TabType.ENCYCLOPEDIA && <Encyclopedia />}
        {activeTab === TabType.RESERVATIONS && (
          <Reservations slots={bookingSlots} setSlots={setBookingSlots} />
        )}
        {activeTab === TabType.GUIDE && <Guide />}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 flex justify-around py-4 z-50 px-2 shadow-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center space-y-1"
          >
            <span className="text-2xl">{tab.icon}</span>
            <span className={`text-[11px] uppercase font-bold tracking-tighter ${
              activeTab === tab.id ? 'text-red-600' : 'text-stone-400'
            }`}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      <footer className="hidden md:block py-12 bg-stone-900 text-stone-400">
        <div className="max-w-[1200px] mx-auto px-4 text-center text-[14px]">
          <p>Made for Michele by Zey • Happy Birthday! 💚</p>
        </div>
      </footer>
      
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default App;
