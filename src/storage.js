export const getFromLS = (key) => {
  debugger;
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
};

export const setToLS = (key, value) => {
  debugger;
  window.localStorage.setItem(key, JSON.stringify(value));
};
