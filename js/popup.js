document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const domainPattern = /app\.(.+)\.eventsair\.com/;
        const match = domainPattern.exec(currentTab.url);

        if (match) {
            document.getElementById("clearDataBtn").disabled = false;
            document.getElementById("domainMessageIcon").style = "display:block";
            document.getElementById("domainMessageBefore").textContent = "Found: ";
            document.getElementById("domainMessageInner").textContent = ` ${match[0]}`;
        } else {
            document.getElementById("clearDataBtn").disabled = true;
            document.getElementById("domainMessageIcon").style = "display:none"
            document.getElementById("domainMessageBefore").textContent = "";
            document.getElementById("domainMessageInner").textContent = "The tab is not on the correct domain.";
        }
    });

    document.getElementById("clearDataBtn").addEventListener("click", () => {
        const feedbackMessage = document.getElementById("feedbackMessage");
        feedbackMessage.style.color = "orange";
        feedbackMessage.textContent = "Processing...";
        feedbackMessage.style.display = "block";

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            chrome.tabs.sendMessage(currentTab.id, { action: "clearDataAndReload" }, (response) => {
                if (chrome.runtime.lastError) {
                    feedbackMessage.style.color = "red";
                    feedbackMessage.textContent = "Error: " + chrome.runtime.lastError.message;
                } else if (response && response.success) {
                    feedbackMessage.style.color = "green";
                    feedbackMessage.textContent = "Data cleared and page reloaded!";
                } else {
                    feedbackMessage.style.color = "red";
                    feedbackMessage.textContent = "An unknown error occurred.";
                }
            });
        });
    });
});
