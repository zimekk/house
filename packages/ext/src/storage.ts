const KEY = "data";

export const get = () =>
  chrome.storage.local.get([KEY]).then((result) => {
    console.log(["result"], result);
    return KEY in result ? result[KEY] : [];
  });

export const set = (data: object) =>
  chrome.storage.local.set({ [KEY]: data }).then(() => {
    console.log(["set"], data);
  });

export const addListener = (callback: () => void) =>
  chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log({ changes, namespace });
    if (namespace === "local" && KEY in changes) {
      callback();
    }
  });

export const append = (item: object) =>
  get()
    .then((data) => data.concat(item))
    .then((data) => set(data));
