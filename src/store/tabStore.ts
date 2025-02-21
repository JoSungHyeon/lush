import { create } from 'zustand';

type TabState = {
  activeTab: 'project' | 'aboutme';
  setActiveTab: (tab: 'project' | 'aboutme') => void;
};

export const useTabStore = create<TabState>((set) => ({
  activeTab: 'project',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
