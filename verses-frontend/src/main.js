import "./style.css";
import { createIcons, icons } from "lucide";
import { state } from "./state.js";
import { subscribe, dispatch } from "./store.js";
import { renderSidebar } from "./components/sidebar.js";
import { renderLanding } from "./pages/landing.js";
import { renderAuth } from "./pages/auth.js";
import { renderApp } from "./pages/app.js";
import { renderModal } from "./components/modal.js";
import { api } from "./api.js";

const render = () => {
  renderSidebar(state);

  const container = document.getElementById("main-container");
  if (!container) return;
  container.innerHTML = "";

  switch (state.currentPage) {
    case "landing":
      renderLanding(container);
      break;
    case "login":
      renderAuth(container, "login");
      break;
    case "signup":
      renderAuth(container, "signup");
      break;
    case "app":
      renderApp(container, state);
      break;
  }

  renderModal(state);

  createIcons({ icons });
};

subscribe(render);

window.dispatch = dispatch;

const enhancedDispatch = (action, payload) => {
  if (action === "OPEN_DETAIL") {
    state.selectedVerseId = payload;
    dispatch("RENDER");
    return;
  }

  if (action === "CLOSE_MODAL") {
    state.isCreating = false;
    state.selectedVerseId = null;
    dispatch("RENDER");
    return;
  }

  dispatch(action, payload);
};

window.dispatch = enhancedDispatch;

window.state = state;
window.navigate = (page) => enhancedDispatch("NAVIGATE", page);
window.setRole = (role) => {
  state.user.role = role;
  render();
};
window.setFilter = (filter) => {
  state.activeFilter = filter;
  render();
};

window.handleSearch = (query) => {
  state.searchQuery = query.toLowerCase();
  render();

  const input = document.getElementById("search-input");
  if (input) {
    input.focus();
    input.setSelectionRange(state.searchQuery.length, state.searchQuery.length);
  }
};

window.openCreator = () => {
  state.isCreating = true;
  render();
};
window.logout = () => {
  state.isAuthenticated = false;
  state.currentPage = "landing";
  render();
};
window.openDetail = (id) => enhancedDispatch("OPEN_DETAIL", id);
window.closeModal = () => enhancedDispatch("CLOSE_MODAL");
window.vote = (vId, oId) =>
  enhancedDispatch("VOTE", { verseId: vId, optionId: oId });

window.handleAuthSubmit = (e, mode) => {
  e.preventDefault();
  state.isAuthenticated = true;
  state.currentPage = "app";
  render();
};

window.createVerse = async (e) => {
  e.preventDefault();
  const type = document.getElementById("v-type").value;
  const title = document.getElementById("v-title").value;
  const desc = document.getElementById("v-desc").value;
  const opts = document
    .getElementById("v-opts")
    .value.split(",")
    .map((o) => ({
      text: o.trim(),
      votes: 0,
    }));

  try {
    const newVerse = await api.createVerse({
      title,
      type,
      creatorName: state.user.name,
      description: desc,
      options: opts,
      likes: 0,
      createdAt: Date.now(),
      comments: [],
      isTakenDown: false,
    });
    
    state.verses.unshift(newVerse);
    state.isCreating = false;
    render();
  } catch (err) {
    console.error("Failed to create verse:", err);
  }
};

window.addComment = async () => {
  const input = document.getElementById("comment-input");
  if (!input || !input.value.trim() || !state.selectedVerseId) return;

  try {
    const updatedVerse = await api.addComment(state.selectedVerseId, {
      userName: state.user.name,
      text: input.value.trim(),
      likes: 0,
    });
    
    state.verses = state.verses.map(v => v.id === state.selectedVerseId ? updatedVerse : v);
    input.value = "";
    render();
  } catch (err) {
    console.error("Failed to add comment:", err);
  }
};

window.handleTakeDown = (id) => {
  const verse = state.verses.find((v) => v.id === id);
  if (verse) {
    verse.isTakenDown = true;
    render();
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    state.verses = await api.getVerses();
  } catch (err) {
    console.error("Failed to load verses from backend", err);
  }
  render();
});
