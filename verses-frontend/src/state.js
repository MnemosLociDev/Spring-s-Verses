
export const state = {
  currentPage: 'landing', 
  isAuthenticated: false,
  
  user: {
    id: 'u1',
    name: 'Guest User',
    role: 'creator', 
  },
  
  activeFilter: 'all',
  searchQuery: '',
  
  verses: [],
  votedVerses: {}, 
  
  selectedVerseId: null,
  isCreating: false
};


