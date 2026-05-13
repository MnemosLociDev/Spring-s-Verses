import { state } from "./state.js";
import { api } from "./api.js";

const subscribers = [];

export const subscribe = (callback) => {
  subscribers.push(callback);
};

export const notify = () => {
  subscribers.forEach((cb) => cb(state));
};

export const dispatch = async (action, payload) => {
  switch (action) {
    case "NAVIGATE":
      state.currentPage = payload;
      state.selectedVerseId = null;
      break;

    case "SET_SEARCH":
      state.searchQuery = payload.toLowerCase();
      break;

    case "VOTE":
      const vId = payload.verseId;
      const oId = payload.optionId;
      const verse = state.verses.find((v) => v.id === vId);

      if (verse) {
        if (state.votedVerses[vId] === oId) return;

        try {
          const updatedVerse = await api.vote(vId, oId);
          state.verses = state.verses.map(v => v.id === vId ? updatedVerse : v);
          state.votedVerses[vId] = oId;
        } catch (err) {
          console.error("Failed to vote:", err);
        }
      }
      break;

    case "LIKE":
      try {
        const updatedVerse = await api.like(payload);
        state.verses = state.verses.map(v => v.id === payload ? updatedVerse : v);
      } catch (err) {
        console.error("Failed to like:", err);
      }
      break;

    case "RENDER":
      break;
  }

  notify();
};
