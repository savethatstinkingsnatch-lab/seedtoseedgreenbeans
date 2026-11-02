import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Habit = "Bush" | "Pole" | "Half-runner";

export type Planting = {
  id: string;
  variety: string;
  habit: Habit;
  sown: string;
  bed: string;
  trellis: string;
  notes: string;
  forSeed: boolean;
};

type BookState = {
  read: string[];
  plantings: Planting[];
  toggleRead: (slug: string) => void;
  addPlanting: (p: Omit<Planting, "id">) => void;
  removePlanting: (id: string) => void;
};

export const useBook = create<BookState>()(
  persist(
    (set) => ({
      read: [],
      plantings: [],
      toggleRead: (slug) =>
        set((s) => ({
          read: s.read.includes(slug) ? s.read.filter((x) => x !== slug) : [...s.read, slug],
        })),
      addPlanting: (p) =>
        set((s) => ({
          plantings: [{ ...p, id: crypto.randomUUID() }, ...s.plantings],
        })),
      removePlanting: (id) =>
        set((s) => ({ plantings: s.plantings.filter((p) => p.id !== id) })),
    }),
    {
      name: "from-seed-to-seed",
      skipHydration: true,
      partialize: (s) => ({ read: s.read, plantings: s.plantings }),
    },
  ),
);
