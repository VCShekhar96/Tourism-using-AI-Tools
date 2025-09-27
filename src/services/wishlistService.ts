import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Wishlist = Database['public']['Tables']['wishlists']['Row'];
type WishlistInsert = Database['public']['Tables']['wishlists']['Insert'];

export const wishlistService = {
  // Get user's wishlist
  async getUserWishlist(userId: string): Promise<Wishlist[]> {
    const { data, error } = await supabase
      .from('wishlists')
      .select(`
        *,
        destinations (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  // Add to wishlist
  async add(userId: string, destinationId: string): Promise<Wishlist> {
    const { data, error } = await supabase
      .from('wishlists')
      .insert({
        user_id: userId,
        destination_id: destinationId
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Remove from wishlist
  async remove(userId: string, destinationId: string): Promise<void> {
    const { error } = await supabase
      .from('wishlists')
      .delete()
      .eq('user_id', userId)
      .eq('destination_id', destinationId);

    if (error) throw error;
  },

  // Check if destination is in wishlist
  async isInWishlist(userId: string, destinationId: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('wishlists')
      .select('id')
      .eq('user_id', userId)
      .eq('destination_id', destinationId)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return !!data;
  }
};