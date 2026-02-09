import React, { useState } from 'react';
import { Experience } from '../types';

const INITIAL_DATA: Omit<Experience, 'imageUrl'>[] = [
  { id: '1', title: 'Palazzo Ducale', category: 'Palace', description: 'A masterpiece of Baroque architecture, formerly the residence of the Este Dukes.', notes: 'As you can guess, it is the ruling palace of Este family. Also they lived inside here. The style is pretty baroque and the architect is Avanzini. It is important because the guy is from Rome and Modena pretty much hated the pope.\n\nThe Palace currently houses the Accademia Militare di Modena. The history of it being academic military actually comes from Este Family indeed. Later when Napoleon takes the city (in 1798), he keeps it the same but expends it to become also an engineering school and artillery school. Napoleon was a very smart guy.' },
  { id: '2', title: 'Parco Giardino Ducale Estense', category: 'Parks', description: 'A beautiful historic park with lush gardens and a peaceful atmosphere.', notes: 'This was a park made Duke Cesare d\'Este as a private enclosed garden (just as you deserve it). They made the park in a renaissance style because Este family had a lot of money and loved fancy stuff. However, they were also friendly to public and in 1739, Duke Francis III donated the gardens to the citizens and opened the park to public.' },
  { id: '3', title: 'Duomo di Modena', category: 'History', description: 'A Romanesque masterpiece and UNESCO World Heritage site.', notes: 'Before the Duomo, in the piazza, there were two churches (around 5th century). However, when the Modena\'s patron saint, Saint Geminianus, died, they decided to fuck everything and build a big duomo for his relics. As you see, is an amazing Romanesque building and it is built by a guy Lanfranco who apparently only built this and nothing else.\n\nThere is something cool about Saint Geminianus. Apparently, Geminianus protected Modena from Attila the Hun\'s invasion by enveloping the city in fog. We are very gladful to this very-real-existent man to save Italy from the barbarians.\n\nWe can see his relics inside. Let’s go.' },
  { id: '4', title: 'Palazzo Comunale', category: 'History', description: 'The historic seat of the city\'s government.', notes: 'In fact the sad story is that the actual true bucket is now showed here. There are just random rooms of Este family. \nThere is the fire room next to their dressing room because the Este family was cold during getting dressed. I don’t know how they reached this info. \n\nOther than that, random sale with paintings exists.' },
  { id: '5', title: 'Mercato Storico Albinelli', category: 'Food', description: 'The historic soul of Modena\'s food culture since 1931.', notes: 'It is simply a food market, where we can buy hopefully the balsamic vinegar. The market was inaugurated in 1931 to replace the ugly markets in Piazza Grande.' },
  { id: '6', title: 'Sagami Modena', category: 'Food', description: 'Authentic Japanese cuisine in Modena.', notes: 'I have to say that I looked for 4 ristoranti. But somehow i could find if they went to Modena nor their recommendation, so I went for your second favorite cuisine: Japanese.' },
  { id: '7', title: 'L\'Archivio', category: 'Food', description: 'A unique spot for aperitivo blending history with modern mixology.', notes: 'Always we need to do an ape in each city we go to. Think of San Lazzero, Mantova, and of course Pd, Bo. In Archivio however, it is a bit more different because you can even create your own cocktail if you want to!' }
];

/**
 * FIXED ASSETS: Encyclopedia Images
 * All images are mapped to their respective IDs using the provided direct links.
 */
const ENCYCLOPEDIA_IMAGES: Record<string, string> = {
  '1': 'https://i.postimg.cc/mrQ0rd0z/palazzo-ducale.jpg',      // Palazzo Ducale
  '2': 'https://i.postimg.cc/zf1c4CVq/parco.jpg',               // Parco Giardino
  '3': 'https://i.postimg.cc/Y04Rv0hz/duomo.jpg',               // Duomo
  '4': 'https://i.postimg.cc/BZyNdTVp/Palazzo-Comunale.jpg',    // Palazzo Comunale
  '5': 'https://i.postimg.cc/CLqJYZyn/mercato.jpg',             // Mercato Albinelli
  '6': 'https://i.postimg.cc/5253YZNk/Sagami-Modena.jpg',       // Sagami
  '7': 'https://i.postimg.cc/MGdmtVRJ/L-Archivio.jpg'           // L'Archivio
};

const Encyclopedia: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedExp = INITIAL_DATA.find(e => e.id === selectedId);
  const selectedImg = selectedId ? (ENCYCLOPEDIA_IMAGES[selectedId] || '') : null;

  if (selectedExp) {
    return (
      <div className="max-w-[900px] mx-auto animate-in slide-in-from-right-4 duration-500 pb-20">
        <button 
          onClick={() => setSelectedId(null)} 
          className="mb-8 flex items-center gap-2 text-stone-400 hover:text-red-600 font-bold uppercase tracking-[4px] text-xs transition-colors"
        >
          ← Back to Encyclopedia
        </button>

        <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl border border-stone-100">
          <div className="h-[500px] relative bg-stone-900 group">
            <img 
              src={selectedImg || ''} 
              className="w-full h-full object-cover" 
              alt={selectedExp.title} 
            />
          </div>
          
          <div className="p-16">
            <div className="flex items-center gap-6 mb-8">
              <span className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">{selectedExp.category}</span>
              <h2 className="text-5xl font-bold text-stone-900">{selectedExp.title}</h2>
            </div>
            
            <p className="text-stone-500 text-2xl mb-12 italic border-l-8 border-red-100 pl-8 leading-relaxed">
              {selectedExp.description}
            </p>

            <div className="space-y-8">
              <label className="block text-[14px] font-bold text-stone-400 uppercase tracking-[4px]">The Archive Entry 💚</label>
              <div className="w-full p-10 bg-stone-50 border-4 border-stone-100 rounded-[32px] text-xl leading-[1.8] text-stone-700 whitespace-pre-wrap font-medium">
                {selectedExp.notes}
              </div>
            </div>

            <button 
              onClick={() => setSelectedId(null)} 
              className="mt-16 w-full bg-stone-900 text-white py-8 rounded-[32px] font-bold text-2xl uppercase tracking-[6px] hover:bg-red-600 transition-all shadow-xl active:scale-95"
            >
              Close Entry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto space-y-[64px] pb-[100px]">
      <div className="text-center max-w-[800px] mx-auto space-y-4">
        <h2 className="text-[54px] font-bold tracking-tight">The Modena Encyclopedia <span className="text-red-600">💚</span></h2>
        <p className="text-stone-400 text-xl font-medium tracking-wide">A fixed collection of memories and history for our trip.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {INITIAL_DATA.map((exp) => (
          <div 
            key={exp.id} 
            onClick={() => setSelectedId(exp.id)} 
            className="group bg-white rounded-[40px] overflow-hidden shadow-lg border border-stone-100 flex flex-col cursor-pointer hover:border-red-600 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
          >
            <div className="relative h-[300px] bg-stone-900 overflow-hidden">
              <img 
                src={ENCYCLOPEDIA_IMAGES[exp.id] || ''} 
                alt={exp.title} 
                className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100" 
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-stone-900 uppercase tracking-widest">
                {exp.category}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl">Read Entry</span>
              </div>
            </div>
            <div className="p-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-stone-900 mb-4 group-hover:text-red-600 transition-colors">{exp.title}</h3>
                <p className="text-stone-500 text-lg line-clamp-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Encyclopedia;