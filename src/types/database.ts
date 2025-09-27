export interface Database {
  public: {
    Tables: {
      destinations: {
        Row: {
          id: string;
          name: string;
          category: string;
          latitude: number;
          longitude: number;
          address: string;
          state: string;
          description: string;
          image_url: string;
          rating: number;
          reviews: number;
          entry_fee: number;
          best_time: string;
          duration: string;
          highlights: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          category: string;
          latitude: number;
          longitude: number;
          address: string;
          state: string;
          description: string;
          image_url: string;
          rating?: number;
          reviews?: number;
          entry_fee?: number;
          best_time: string;
          duration: string;
          highlights: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: string;
          latitude?: number;
          longitude?: number;
          address?: string;
          state?: string;
          description?: string;
          image_url?: string;
          rating?: number;
          reviews?: number;
          entry_fee?: number;
          best_time?: string;
          duration?: string;
          highlights?: string[];
          created_at?: string;
          updated_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          user_id: string;
          full_name: string;
          phone: string;
          location: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          full_name: string;
          phone?: string;
          location?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          full_name?: string;
          phone?: string;
          location?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      wishlists: {
        Row: {
          id: string;
          user_id: string;
          destination_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          destination_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          destination_id?: string;
          created_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          user_id: string;
          destination_id: string;
          booking_date: string;
          visit_date: string;
          guests: number;
          total_amount: number;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          destination_id: string;
          booking_date: string;
          visit_date: string;
          guests: number;
          total_amount: number;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          destination_id?: string;
          booking_date?: string;
          visit_date?: string;
          guests?: number;
          total_amount?: number;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}