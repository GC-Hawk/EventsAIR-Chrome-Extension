chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "clearBrowsingData") {
        chrome.browsingData.remove({ since: 0 }, {
            cache: true,
            indexedDB: true
        }, sendResponse);
        return true;
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const domainPattern = /app\..+\.eventsair\.com/;
    if (domainPattern.test(tab.url)) {
        chrome.action.enable(tabId);
        // Inject content script
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["js/content.js"]
        });
    } else {
        chrome.action.disable(tabId);
    }
});
