import { create } from 'zustand';

interface FavoritesState {
    favorites: string[];
    addFavorite: (name: string) => void;
    removeFavorite: (name: string) => void;
    isFavorite: (name: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'), // Load from local storage
    addFavorite: (name: string) => {
        set((state) => {
            const updatedFavorites = [...state.favorites, name];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save to local storage
            return { favorites: updatedFavorites };
        });
    },
    removeFavorite: (name: string) => {
        set((state) => {
            const updatedFavorites = state.favorites.filter((fav) => fav !== name);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save to local storage
            return { favorites: updatedFavorites };
        });
    },
    isFavorite: (name: string) => get().favorites.includes(name),
}));