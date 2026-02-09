
export enum TabType {
  OVERVIEW = 'overview',
  ENCYCLOPEDIA = 'encyclopedia',
  RESERVATIONS = 'reservations',
  GUIDE = 'guide'
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  notes?: string;
  imageUrl?: string;
  // Added 'Palace' and 'Parks' to allow these categories in components using the Experience interface
  category: 'Auto' | 'Food' | 'History' | 'Palace' | 'Parks';
}

export interface BookingSlot {
  id: string;
  title: string;
  time: string;
  fileUrl?: string;
  fileName?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: {
    time: string;
    description: string;
    location: string;
  }[];
}
