
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "hello-world",
    title: "Hello World Extension",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "hello-world" && tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => alert("Hello World!"),
    });
  }
});
