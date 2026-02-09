import React from 'react';

/**
 * FIXED ASSETS: Reservation Documents
 * Updated 'palazzo' with the correct direct link ID: 1TGbJ2h0LZtgj8exPkRsidgGukqhZ8aTi
 */
const RESERVATION_DOCS: Record<string, string> = {
  'lunch': 'https://drive.google.com/uc?export=view&id=1oVl0Nj_P2B2RKOSJRtCLlDgh8fr2ygbA',
  'palazzo': 'https://drive.google.com/uc?export=view&id=1TGbJ2h0LZtgj8exPkRsidgGukqhZ8aTi',
  'torre': 'https://drive.google.com/uc?export=view&id=16Lb3IcDwZwGAjReWLxuAQAkrM5EwKAjI',
  'aperitivo': '#', // Add your link here when ready!
};

const Reservations: React.FC = () => {
  const handleOpenDoc = (id: string) => {
    const url = RESERVATION_DOCS[id];
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert("Aperitivo link coming soon! 💚");
    }
  };

  const reservationItems = [
    { id: 'lunch', title: 'Lunch Reservation', icon: '🍽️', time: '13:00' },
    { id: 'palazzo', title: 'Palazzo Ducale Tour', icon: '🏰', time: '15:30' },
    { id: 'torre', title: 'Torre Ghirlandina', icon: '🗼', time: '17:00' },
    { id: 'aperitivo', title: 'Aperitivo at L\'Archivio', icon: '🍸', time: '19:30' },
  ];

  return (
    <div className="max-w-[1000px] mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-stone-900">The Schedule 🎫</h2>
        <p className="text-stone-400 text-xl tracking-widest uppercase font-bold">Your Official Invitations</p>
      </div>

      <div className="grid gap-6">
        {reservationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleOpenDoc(item.id)}
            className="group w-full bg-white border-4 border-stone-100 p-8 rounded-[40px] flex items-center justify-between hover:border-red-600 hover:shadow-2xl transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-8">
              <span className="text-6xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div className="text-left">
                <span className="block text-stone-400 font-bold uppercase tracking-widest text-sm mb-1">{item.time}</span>
                <h3 className="text-3xl font-bold text-stone-900 group-hover:text-red-600 transition-colors">{item.title}</h3>
              </div>
            </div>
            
            <div className="bg-stone-50 px-8 py-4 rounded-2xl font-bold text-stone-400 group-hover:bg-red-600 group-hover:text-white transition-all uppercase tracking-widest">
              View PDF →
            </div>
          </button>
        ))}
      </div>

      <div className="bg-red-50 p-12 rounded-[48px] border-2 border-red-100 text-center">
        <p className="text-red-800 text-xl font-medium italic">
          "All documents are pre-booked and ready for you. Just click to see the details of our day."
        </p>
      </div>
    </div>
  );
};

export default Reservations;