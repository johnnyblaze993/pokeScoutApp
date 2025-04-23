
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TeamState {
  team: string[];
  addToTeam: (name: string) => void;
  removeFromTeam: (name: string) => void;
  isInTeam: (name: string) => boolean;
}

export const useTeamStore = create<TeamState>()(
  persist(
    (set, get) => ({
      team: [],

      addToTeam: (name: string) => {
        const current = get().team;
        if (current.includes(name)) return;
        if (current.length >= 6) {
          alert("Team is full! You can only have 6 Pokémon.");
          return;
        }
        set({ team: [...current, name] });
      },

      removeFromTeam: (name: string) => {
        set((state) => ({
          team: state.team.filter((p) => p !== name),
        }));
      },

      isInTeam: (name: string) => get().team.includes(name),
    }),
    {
      name: "team-storage", // 🔐 Key for localStorage
    }
  )
);
