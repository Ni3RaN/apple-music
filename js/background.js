let check = () => {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "check"}, function (response) {
            if (response) {
                return response;
            }
        });
    });
}
