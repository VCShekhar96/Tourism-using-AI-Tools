import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Destination = Database['public']['Tables']['destinations']['Row'];
type DestinationInsert = Database['public']['Tables']['destinations']['Insert'];

export const destinationService = {
  // Get all destinations
  async getAll(): Promise<Destination[]> {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get destinations by category
  async getByCategory(category: string): Promise<Destination[]> {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('category', category)
      .order('rating', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Search destinations
  async search(query: string): Promise<Destination[]> {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,address.ilike.%${query}%,state.ilike.%${query}%`)
      .order('rating', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Get destination by ID
  async getById(id: string): Promise<Destination | null> {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  // Add new destination (admin function)
  async create(destination: DestinationInsert): Promise<Destination> {
    const { data, error } = await supabase
      .from('destinations')
      .insert(destination)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update destination rating
  async updateRating(id: string, rating: number, reviews: number): Promise<void> {
    const { error } = await supabase
      .from('destinations')
      .update({ rating, reviews, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;
  }
};