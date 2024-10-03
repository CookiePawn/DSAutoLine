import { create } from 'zustand';

const useFastFAQStore = create((set) => ({
    // memo: '',
    // setMemo: (text) => set({ memo: text }),
    // memos: [],
    // setMemos: (newMemo) =>
    //   set((prev) => ({
    //     memos: [...prev.memos, newMemo],
    //   })),
    name: '',
    setName: (text) => set({ name: text }),
    phone: '',
    setPhone: (text) => set({ phone: text }),
}));

export default useFastFAQStore;