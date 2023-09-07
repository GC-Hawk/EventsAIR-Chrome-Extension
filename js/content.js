chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "clearDataAndReload") {
        chrome.runtime.sendMessage({ action: "clearBrowsingData" }, () => {
            location.reload(true);
            sendResponse({ success: true });
        });
    }
    return true;
});