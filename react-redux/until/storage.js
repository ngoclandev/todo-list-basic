const TODO_KEY = "TODOS";
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  },
  set(value) {
    localStorage.setItem(TODO_KEY, JSON.stringify(value));
  },
};
