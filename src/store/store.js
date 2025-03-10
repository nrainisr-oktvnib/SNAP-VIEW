import { create } from "zustand";

const useStore = create((set) => ({
  selectedAlbum: null,
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),

  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),

  // State untuk indeks gambar dalam gallery
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
}));



export default useStore;
