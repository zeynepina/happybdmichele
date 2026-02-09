import React from 'react';
import { TabType } from '../types';

interface OverviewProps {
  onNavigate: (tab: TabType) => void;
}

const Overview: React.FC<OverviewProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center space-y-12 animate-in fade-in duration-1000 pb-20">
      {/* Hero Section - Clean, No Border, No Shadow, No Zoom */}
      <div className="w-full max-w-[900px] relative group">
        <div className="w-full h-full bg-transparent">
          <img 
            src="https://i.postimg.cc/1zfrC4rb/Screenshot-2026-02-05-at-19-01-57.png" 
            alt="Modena View" 
            className="w-full h-auto object-contain block"
          />
        </div>
      </div>

      {/* Welcome Text */}
      <div className="text-center max-w-[800px] space-y-8 px-4 pt-8">
        <div className="space-y-4">
          <h1 className="text-stone-900 text-[64px] font-bold leading-tight tracking-tight">
            Welcome to Modena, love. <span className="text-red-600"></span>
          </h1>
          <div className="h-2 w-48 bg-red-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6">
          <p className="text-stone-700 text-[26px] leading-relaxed italic font-medium max-w-[700px] mx-auto">
            "Once this city was in a big competition with your city, Bologna. 
            Modena succeeded in winning over Bologna like how I won you."
          </p>
          <p className="text-stone-400 text-[16px] font-bold uppercase tracking-[6px]">
            Let the Journey Begin, honey. 
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-[1100px] pt-12">
        {[
          { label: 'The History', val: 'Encyclopedia', icon: '📜', target: TabType.ENCYCLOPEDIA, color: 'hover:border-blue-500' },
          { label: 'The Schedule', val: 'Reservations', icon: '🎫', target: TabType.RESERVATIONS, color: 'hover:border-red-600' },
          { label: 'The AI-helped Guide', val: 'Travel Guide', icon: '🗺️', target: TabType.GUIDE, color: 'hover:border-green-600' },
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={() => onNavigate(item.target)}
            className={`group bg-white p-12 rounded-[40px] border-4 border-stone-100 shadow-sm text-center transition-all hover:shadow-2xl hover:-translate-y-4 active:scale-95 ${item.color}`}
          >
            <div className="text-7xl mb-8 block transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              {item.icon}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[12px] font-bold text-stone-400 uppercase tracking-[4px] block mb-2">
                {item.label}
              </span>
              <span className="text-3xl font-bold text-stone-900 transition-colors uppercase">
                {item.val}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;