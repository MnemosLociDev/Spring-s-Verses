const API_BASE = 'http://localhost:8080/api';

export const api = {
  getVerses: async (query = '') => {
    const url = query ? `${API_BASE}/verses?query=${encodeURIComponent(query)}` : `${API_BASE}/verses`;
    const res = await fetch(url);
    return res.json();
  },
  
  createVerse: async (verse) => {
    const res = await fetch(`${API_BASE}/verses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(verse)
    });
    return res.json();
  },
  
  vote: async (verseId, optionId) => {
    const res = await fetch(`${API_BASE}/verses/${verseId}/vote?optionId=${optionId}`, {
      method: 'POST'
    });
    return res.json();
  },
  
  addComment: async (verseId, comment) => {
    const res = await fetch(`${API_BASE}/verses/${verseId}/comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment)
    });
    return res.json();
  },
  
  like: async (verseId) => {
    const res = await fetch(`${API_BASE}/verses/${verseId}/like`, {
      method: 'POST'
    });
    return res.json();
  }
};
