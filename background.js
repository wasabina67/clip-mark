chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "clip-mark",
    title: "ClipMark",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "clip-mark" && tab.id) {
    if (tab.url && tab.url.startsWith("chrome://")) return;
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const pageTitle = document.title || "title";
        const pageUrl = window.location.href;
        const markdownLink = `[${pageTitle}](${pageUrl})`;

        navigator.clipboard.writeText(markdownLink)
          .then(() => {
          }).catch(err => console.error(err.message));
      },
    }).catch(err => console.error(err.message));
  }
});
