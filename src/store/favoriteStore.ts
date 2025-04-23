import {create} from 'zustand';

interface FavoritesState {
    favorites: string[];
    addFavorite: (name: string) => void;
    removeFavorite: (name: string) => void;
    isFavorite: (name: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: [],
    addFavorite: (name: string) =>
        set((state) => ({
            favorites: [...state.favorites, name],
        })),

    removeFavorite: (name: string) => 
        set((state) => ({
            favorites: state.favorites.filter((fav) => fav ! == name),
        })),

    isFavorite: (name: string) => get().favorites.includes(name),
}));