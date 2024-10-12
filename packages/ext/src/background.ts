import { append, get } from "./storage";

chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
  console.log(`Change URL: ${tab.url}`);
});

console.log(["background service worker"]);

chrome.runtime.onMessage.addListener((message) => {
  console.log(["onMessage"], { message });
});

chrome.runtime.onMessageExternal.addListener((message, sender) => {
  console.log(["onMessageExternal"], { message, sender });
});

chrome.runtime.onInstalled.addListener((details) => {
  console.log(["onInstalled"], { details });

  chrome.contextMenus.create({
    title: "Catch Image URL",
    contexts: ["image", "link"],
    id: "catch",
  });
});

chrome.action.onClicked.addListener((tab) => {
  const { id: tabId, url } = tab;
  console.log(["onClicked"], { tab, url });

  if (url.startsWith("https://www.instagram.com/")) {
    chrome.scripting.executeScript({
      target: { tabId },
      func: function () {
        const layers = document.querySelectorAll('div[style="width: 100%;"]');
        if (layers.length === 4) {
          console.log({ layers });
          // layers.forEach((node, i) => i > 2 && node.remove())
          layers[0].remove();
          layers[2].remove();
        }

        const visual = document.querySelector(
          "body > div[data-visualcompletion]",
        );
        if (visual) {
          console.log({ visual });
          document.querySelectorAll("body > div[style]").forEach((node) => {
            if ((node as HTMLDivElement).style[0] === "--fds-black") {
              console.log({ node });
              node.remove();
            }
          });
        }

        const splash = document.body.lastElementChild;
        if (!splash.matches("[data-visualcompletion]")) {
          console.log({ splash });
          // splash.remove();
        }
      },
      args: [],
    });
  }
  get().then((data) =>
    chrome.scripting.executeScript({
      target: { tabId },
      func: function (data) {
        console.log(data);
        // window.postMessage({ type });
        // navigator.clipboard.writeText(JSON.stringify(data))
      },
      args: [data],
    }),
  );
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const { id: tabId, url } = tab;
  console.log(["onClicked"], { info, tab, url });
  if (info.srcUrl) {
    append({ url: info.pageUrl, src: info.srcUrl });
  } else if (info.linkUrl) {
    if (url.startsWith("https://www.instagram.com/")) {
      chrome.scripting
        .executeScript({
          target: { tabId },
          func: function () {
            const link = document.activeElement as HTMLLinkElement;
            if (link && link.tagName === "A") {
              const img = link.querySelector("img");
              console.log({ link, img });
              return { url: link.href, src: img.src };
            }
          },
          args: [],
        })
        .then(([{ result }]) => append(result));
    }
  }
});

export {};
