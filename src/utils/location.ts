import { UserLocation, TollInfo } from '../types';

export const getCurrentLocation = (): Promise<UserLocation> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 300000
      }
    );
  });
};

export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return Math.round(distance * 100) / 100;
};

export const calculateTollCharges = (distance: number, vehicleType: 'car' | 'bike' | 'bus' = 'car'): TollInfo => {
  const baseRatePerKm = {
    car: 2.5,
    bike: 1.2,
    bus: 4.8
  };
  
  const estimatedToll = Math.round(distance * baseRatePerKm[vehicleType]);
  const duration = distance < 100 ? '1-2 hours' : 
                   distance < 300 ? '3-5 hours' : 
                   distance < 600 ? '6-10 hours' : '10+ hours';
  
  return {
    distance,
    estimatedToll,
    route: 'Via National Highway',
    duration
  };
};