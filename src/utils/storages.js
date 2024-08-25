/* eslint-disable func-names */
/* eslint-disable object-shorthand */

const setItemLocalStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("local-storage"));
};

const getItemLocalStorage = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  return JSON.parse(itemStr);
};

const setItemLocalStorageWithExpiry = function (key, value, ttl) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttl * 60 * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
  window.dispatchEvent(new Event("local-storage"));
};

const getItemLocalStorageWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    // remove access_token when expired
    localStorage.removeItem("access_token");
    return null;
  }

  return item.value;
};

const removeItemLocalStorage = (key) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("local-storage"));
};

const clearLocalStorage = () => {
  localStorage.clear();
  window.dispatchEvent(new Event("local-storage"));
};

export {
  clearLocalStorage,
  getItemLocalStorage,
  getItemLocalStorageWithExpiry,
  removeItemLocalStorage,
  setItemLocalStorage,
  setItemLocalStorageWithExpiry,
};
