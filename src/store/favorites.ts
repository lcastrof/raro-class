import create from 'zustand';
import api from '../services/api';
import { Video } from '../types/Video';

type FavoritesHookProps = {
  favorites: Video[];
  fetchFavorites: () => Promise<void>;
  addFavorite: (videoData: Video) => Promise<void>;
  removeFavorite: (id: string) => Promise<void>;
};

export const useFavorites = create<FavoritesHookProps>((set) => ({
  favorites: [],
  fetchFavorites: async () => {
    const { data } = await api.get('/videos/favoritos');
    set(() => ({ favorites: data }));
  },
  addFavorite: async (videoData: Video) => {
    await api.post(`/videos/${videoData.id}/favoritos`);
    set(({ favorites }) => {
      const updatedFavorites = [...favorites, videoData];
      updatedFavorites.sort((a, b) => {
        if (!a.dataPublicacao || !b.dataPublicacao) return 0;
        if (a.dataPublicacao < b.dataPublicacao) return -1;
        if (a.dataPublicacao > b.dataPublicacao) return 1;
        return 0;
      });
      return {
        favorites: updatedFavorites
      };
    });
  },
  removeFavorite: async (videoId: string) => {
    await api.delete(`/videos/${videoId}/favoritos`);
    set(({ favorites }) => ({
      favorites: favorites.filter((video) => video.id !== videoId)
    }));
  }
}));
