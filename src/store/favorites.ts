import create from 'zustand';
import { Video } from '../pages/Home';
import api from '../services/api';

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
    set(({ favorites }) => ({
      favorites: [...favorites, videoData]
    }));
  },
  removeFavorite: async (videoId: string) => {
    await api.delete(`/videos/${videoId}/favoritos`);
    set(({ favorites }) => ({
      favorites: favorites.filter((video) => video.id !== videoId)
    }));
  }
}));
