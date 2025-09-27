export interface Destination {
  id: string;
  name: string;
  category: 'temple' | 'forest' | 'mountain' | 'beach' | 'river' | 'architecture' | 'heritage' | 'adventure';
  location: {
    lat: number;
    lng: number;
    address: string;
    state: string;
  };
  description: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  entryFee: number;
  bestTime: string;
  duration: string;
  highlights: string[];
}

export interface UserLocation {
  lat: number;
  lng: number;
  address?: string;
}

export interface TollInfo {
  distance: number;
  estimatedToll: number;
  route: string;
  duration: string;
}

export interface WishlistItem {
  destinationId: string;
  addedAt: Date;
}

export interface BookingOrder {
  id: string;
  destinationId: string;
  bookingDate: Date;
  visitDate: Date;
  guests: number;
  totalAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}