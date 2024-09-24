chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(`Change URL: ${tab.url}`);
});

console.log(["background service worker"]);

chrome.runtime.onMessage.addListener((message) => {
  console.log(["onMessage"], { message });
});

chrome.runtime.onMessageExternal.addListener((message, sender) => {
  console.log(["onMessageExternal"], { message, sender });
});

const data = [];

chrome.runtime.onInstalled.addListener((details) => {
  console.log(["onInstalled"], { details });

  const context = "image";

  chrome.contextMenus.create({
    title: "Catch Image URL",
    contexts: [context],
    id: context,
  });
});

chrome.action.onClicked.addListener((tab) => {
  console.log(["onClicked"], { data });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: function (data) {
      // window.postMessage({ type });
      console.log(data);
      // navigator.clipboard.writeText(JSON.stringify(data))
    },
    args: [data],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  console.log({ info, tab });
  data.push({ url: info.pageUrl, src: info.srcUrl });
});

export {};
