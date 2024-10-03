import create from 'zustand';

const useMemosStore = create((set) => ({
  memo: '',
  setMemo: (text) => set({ memo: text }),
  memos: [],
  setMemos: (newMemo) =>
    set((prev) => ({
      memos: [...prev.memos, newMemo],
    })),
}));

export default useMemosStore;